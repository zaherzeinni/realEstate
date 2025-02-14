import dbConnect from "@/utils/dbConnect";
import cookies from "@/utils/cookies";
import User from "@/models/user";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).json({});
    return;
  }
  await dbConnect();
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user?.comparePassword(password)) {
      return res.status(400).json({});
    }
    const result = user.signJwt();
    res.cookie("accessToken", result.token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    });
    user.password = undefined;
    delete user.password;
    
    // Add redirect URL based on role
    const redirectUrl = user.role === 'staff' ? '/staff/properties' : '/admin/dashboard';
    res.status(200).json({ user, redirectUrl });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

export default cookies(handler);
