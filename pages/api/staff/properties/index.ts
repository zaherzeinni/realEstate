import auth from "@/utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import Book from "@/models/book";
import Country from "@/models/country";
import dbConnect from "@/utils/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const user = req.user;

  // Check if user is authenticated and is a staff member
  if (!user || user.role !== "staff") {
    return res.status(403).json({
      success: false,
      message: "Unauthorized access",
    });
  }

  switch (req.method) {
    case "GET":
      try {
        const {
          page = 1,
          limit = 10,
          country = "",
          search = "",
          type = "",
          status = "",
          minPrice,
          maxPrice,
          beds,
          baths,
        } = req.query;
        
        // console.log(user , "user❎✳❎✳❎✳");
        // // First, get the country name from the user's country ID
        const userCountry = country ? await Country.findById(country) : null;
        
        // if (!userCountry) {
        //   return res.status(404).json({
        //     success: false,
        //     message: "Staff country not found",
        //   });
        // }

        // Base query for staff's properties
        let baseQuery = { _id: { $in: user.properties } };

        // Get status counts first
        const statusCounts = await Book.aggregate([
          { $match: baseQuery },
          {
            $group: {
              _id: { $ifNull: ["$status", "pending"] },
              count: { $sum: 1 }
            }
          }
        ]);

        // Build the main query
        let query = {
          ...baseQuery
        };

        // Add status filter
        if (status) {
          // Handle 'pending' status specially since it could be null or 'pending'
          if (status === 'pending') {
            query.$or = [
              { status: 'pending' },
              { status: null },
              { status: { $exists: false } }
            ];
          } else {
            query.status = status;
          }
        }

        // Add search filter
        if (search) {
          query.$or = [
            { title: { $regex: search, $options: "i" } },
            { titlefr: { $regex: search, $options: "i" } },
            { city: { $regex: search, $options: "i" } },
            { cityFr: { $regex: search, $options: "i" } },
            { propertyId: { $regex: search, $options: "i" } },
            { story: { $regex: search, $options: "i" } },
            { storyfr: { $regex: search, $options: "i" } },
            { area: { $regex: search, $options: "i" } },
            { address: { $regex: search, $options: "i" } },
            { reference: { $regex: search, $options: "i" } },
          ];
        }

        // Add type filter
        if (type) {
          query.type = type;
        }

        if (country !== "" && userCountry !== null) {
          query.country = userCountry?.title;
        }

        console.log(query , "query❎✳❎✳❎✳");

        // Add price range filter
        if (minPrice || maxPrice) {
          query.price = {};
          if (minPrice) query.price.$gte = Number(minPrice);
          if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        // Add beds filter
        if (beds) {
          query["details.beds"] = Number(beds);
        }

        // Add baths filter
        if (baths) {
          query["details.baths"] = Number(baths);
        }

        // Get paginated results
        const skip = (Number(page) - 1) * Number(limit);

        // Get properties with pagination
        const properties = await Book.find(query)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(Number(limit))
          .lean();

        // Get total count for pagination
        const total = await Book.countDocuments(query);

        // Calculate total pages
        const totalPages = Math.ceil(total / Number(limit));

        // Transform the data to include all necessary information
        const transformedProperties = properties.map((property) => ({
          ...property,
          id: property._id,
          imageUrl: property.image?.[0] || "",
          cover: property.cover?.[0] || "",
          
          formattedPrice: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(property.price),
          // countryName: userCountry.title,
          details: {
            ...property.details,
            totalRooms: property.details?.rooms || 0,
            totalBeds: property.details?.beds || 0,
            totalBaths: property.details?.baths || 0,
            areaSqM: property.details?.areaSqM || 0,
            parkings: property.details?.parkings || 0,
          },
          features: {
            ...property.features,
            ac: property.features?.ac || false,
            balcony: property.features?.balcony || false,
            tv: property.features?.tv || false,
            internet: property.features?.internet || false,
            pet: property.features?.pet || false,
            bathtub: property.features?.bathtub || false,
          },
          services: {
            ...property.services,
            isfeatured: property.services?.isfeatured || false,
            resale: property.services?.resale || false,
            lockoff: property.services?.lockoff || false,
            security: property.services?.security || false,
            cctv: property.services?.cctv || false,
            elevator: property.services?.elevator || false,
            pool: property.services?.pool || false,
            gym: property.services?.gym || false,
            parking: property.services?.parking || false,
            garden: property.services?.garden || false,
            Furnished: property.services?.Furnished || false,
            airBn: property.services?.airBn || false,
            balcon: property.services?.balcon || false,
            golf: property.services?.golf || false,
            malls: property.services?.malls || false,
            roomservice: property.services?.roomservice || false,
            gezepo: property.services?.gezepo || false,
            animalsallow: property.services?.animalsallow || false,
            aircondition: property.services?.aircondition || false,
            beachaccess: property.services?.beachaccess || false,
            cock: property.services?.cock || false,
            electric: property.services?.electric || false,
          },
          coordinate: {
            lat: property.coordinate?.lat || "",
            lng: property.coordinate?.lng || "",
          },
          propertyInfo: {
            constructionYear: property.constructionYear || "",
            condition: property.condition || "",
            reference: property.reference || "",
            category: property.category || "",
            area: property.area || "",
          },
          translations: {
            titlefr: property.titlefr || "",
            storyfr: property.storyfr || "",
            cityFr: property.cityFr || "",
          }
        }));

        // Format status counts
        const formattedStatusCounts = {
          active: 0,
          pending: 0,
          completed: 0,
          rejected: 0,
          ...Object.fromEntries(
            statusCounts.map(({ _id, count }) => [
              (_id || "pending").toLowerCase(),
              count
            ])
          )
        };

        console.log(formattedStatusCounts , "formattedStatusCounts❎✳❎✳❎✳");

        res.status(200).json({
          success: true,
          data: {
            properties: transformedProperties,
            statusCounts: formattedStatusCounts,
            pagination: {
              currentPage: Number(page),
              totalPages,
              totalItems: total,
              limit: Number(limit),
              hasNextPage: Number(page) < totalPages,
              hasPrevPage: Number(page) > 1,
            },
            filters: {
              search,
              type,
              minPrice,
              maxPrice,
              beds,
              baths,
              country,
              status,
            },
          },
        });
      } catch (error) {
        console.error("Error fetching staff properties:", error);
        res.status(500).json({
          success: false,
          message: "Error fetching properties",
          error: process.env.NODE_ENV === "development" ? error : undefined,
        });
      }
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({
        success: false,
        message: `Method ${req.method} Not Allowed`,
      });
  }
};

export default auth(handler);