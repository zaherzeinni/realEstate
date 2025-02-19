import { useState, useEffect, useMemo } from "react";
import { DropDownCategories } from "@/components/category";
import { TextInput, SelectInput } from "@/components/inputs";
import { PageLayout } from "@/layouts";
import { Grid, Box } from "@mui/material";
import Head from "next/head";
import { CircularLoading as Loading } from "@/components/loading";
import { NoData } from "@/components/empty";
import { map } from "lodash";
import { BookCard } from "@/components/cards";
import { Alert, AlertTitle, Pagination } from "@material-ui/lab";
import CartButton from "@/components/button";
import { Typography, Button, IconButton } from "@material-ui/core";
import axios from "axios";
import styled from "styled-components";
import { useRouter } from "next/router";
import { deleteImage } from "@/utils/getData";
import NotFound from "@/pages/404";
import { useLanguageContext } from "@/context/languageContext";

import { useTranslation } from "@/context/useTranslation";

import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

import { DeleteIcon, EyeIcon, EditIcon } from "@/components/icons";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { message } from "antd";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import useProducts from "@/hooks/useProducts";
import useCities from "@/hooks/useCities";
import useCountries from "@/hooks/useCountries";
import AdminMainLayout from "@/components/Site/dashboardLayout";
import { ImageEndpoint, defaultImage, uploadApi } from "@/utils/global";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface Book {
  _id: string | number;
  title: string;
  story?: string;
  price: string | number;
  cover: string;
  author?: string;
  category?: string;
  forsell?: boolean;
}

const SearchTimeOut = 0; // 0 ms

const AnimatedTypography = styled(Typography)`
  color: #29221f !important;
  animation: bounce 2s;
  animation-iteration-count: 2;
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-12px);
    }
    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    animation: none;
  }
`;

const getStatusColor = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'active':
      return 'text-green-500';
    case 'pending':
      return 'text-yellow-500';
    case 'completed':
      return 'text-blue-500';
    case 'rejected':
      return 'text-red-500';
    default:
      return 'text-gray-500';
  }
};

export default function AllBooks() {
  const { user } = useAuth({
    redirectTo: "/auth/login",
    redirectIfFound: false,
  });

  //const [books, setBooks] = useState<Book[]>();
  const [country, setCountry] = useState<any>({});
  const [city, setCity] = useState<any>({});
  //const [pages, setPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [fetch, setFetch] = useState<boolean>(false);
  const [localUser, setLocalUser] = useState<any>();
  const [statusDialog, setStatusDialog] = useState({
    open: false,
    bookId: '',
    currentStatus: ''
  });

  // ----------

  const { data, isLoading, error, mutate } = useProducts({
    page,
    country: country.value,
    city: city.value,
    search,
 
    // rooms:5
  });

  console.log("DATA-->", data);

  const router = useRouter();

  const handleSearch = (value: string) => {
    const delaySearchFn = setTimeout(() => {
      // setPage(1);
      setSearch(value);
    }, SearchTimeOut);

    return () => clearTimeout(delaySearchFn);
  };

  const handlePageChange = (event: any, value: number) => {
    if (value === page) return;
    setPage(value);
  };

  useEffect(() => {
    let localUserFromStorage = localStorage.getItem("user");
    localUserFromStorage
      ? (localUserFromStorage = JSON.parse(localUserFromStorage))
      : (localUserFromStorage = null);
    setLocalUser(localUserFromStorage);
  }, []);

  useEffect(() => {
    mutate();
  }, [city, country]);

  if (error) return <div>failed to load</div>;



  
  // In your front-end code ARRAY IMAGES ADD DELETE
  const handleDeleteAllImages = async (filesToDelete: any) => {
    try {
      const res = await axios.post(`${uploadApi}/file/delets`, {
        filesToDelete,
      });
      console.log("Files deleted successfully", res);
      message.success("image deleted success");
    } catch (error) {
      console.error("Error deleting files:", error);
    }
  };

  // ------------ SINGLE IMAGE ADD DELETE

  const handleDeleteSingleImage = async (fileToDelete) => {
    try {
      console.log("FILE TO DLEETe-->", fileToDelete);
      const res = await axios.delete(
        `${uploadApi}/file/delete?fileName=${fileToDelete}`
      );
      console.log("File deleted successfully", res);
      message.success("single image deleted success");
    } catch (error) {
      console.error("Error deleting files:", error);
    }
  };





  const handleDelete = (id: number, image: string ,images) => {
    if (!id) return;
    if (!confirm("Are you sure you want to delete item?")) return;
    axios
      .delete(`/api/book/${id}/handler`)
      .then(async (res) => {
        await handleDeleteAllImages(images)
        await handleDeleteSingleImage(image)
      //  await deleteImage(image);
        message.success("Item deleted Successfully");
        mutate();
        //    window.location.reload();
        //router.push("/admin/books");
      })
      .catch((err) => {
        message.error("Something went wrong");
        console.log(err);
      });
  };

  const { language, changeLanguage } = useLanguageContext();

  const { translation } = useTranslation();

  const t = useMemo(() => translation ?? {}, [translation]);

  const {
    data: citiesData,
    isLoading: isLoadingCountries,
    error: errorcount,
  } = useCountries();
  const countries = citiesData?.map((country) => ({
    label: country.title,
    value: country.title,
  }));

  const {
    data: CitiesData,
    isLoading: loadCities,
    error: errorCities,
  } = useCities();

  // console.log("CITIES" , CitiesData)
  const cities = CitiesData?.filter(
    (city) => city.country === country.value
  ).map((city) => ({
    label: city.title,
    value: city.title,
  }));



  if (!user) {
    return <NotFound />;
  }

  const handleStatusClick = (book: any) => {
    setStatusDialog({
      open: true,
      bookId: book._id,
      currentStatus: book.status || 'pending'
    });
  };

  const handleStatusUpdate = async (newStatus: string) => {
    try {
      await axios.put(`/api/book/${statusDialog.bookId}/status`, {
        status: newStatus
      });
      message.success("Status updated successfully");
      mutate();
      setStatusDialog({ open: false, bookId: '', currentStatus: '' });
    } catch (error) {
      message.error("Error updating status");
    }
  };

  return (
    <div dir="ltr">
      <Head>
        <title>Sand n Sea</title>
        <meta name="description" content="متجر لبيع كافة ماتحتاجه" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <AdminMainLayout>
        <PageLayout title="المنتجات">
          <div className=" !p-20">
            <AnimatedTypography
              align="center"
              style={{
                marginBottom: "40px",
              }}
              gutterBottom
            >
              All Properties {country?.value}
            </AnimatedTypography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <TextInput label="Serach..." onChange={handleSearch} />
              </Grid>
              <Grid className="top-45" item xs={12} md={3}>
                <SelectInput
                  placeholder="Select Country"
                  options={countries}
                  selected={country}
                  setSelected={setCountry}
                />
              </Grid>

              <Grid className="top-45" item xs={12} md={3}>
                <SelectInput
                  placeholder="Select City"
                  options={cities}
                  selected={city}
                  setSelected={setCity}
                />
              </Grid>

              {!data?.books || isLoading || !data ? (
                <Loading />
              ) : data?.books.length > 0 ? (
                <>
                  {data?.books?.length > 0 ? (
                    <TableContainer
                      sx={{
                        marginTop: "20px",
                      }}
                      component={Paper}
                    >
                      <Table
                        aria-label="Orders table"
                        sx={{
                          minWidth: "100%",
                          direction: "rtl",
                          ":lang": {
                            direction: "rtl",
                          },
                        }}
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <Typography>isFeatured</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>title</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>Price</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>Status</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>Date</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>Actions</Typography>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {map(data?.books, (book: any, index: number) => {
                            return (
                              <TableRow key={index}>
                                <TableCell>
                                  <Typography>{book.services.isfeatured ? <h6 className=" text-green-500"> True</h6> : <h6 className=" text-red-500"> False</h6> }</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>{book?.title}</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>{book?.price}</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography 
                                    className={getStatusColor(book?.status)}
                                    onClick={() => handleStatusClick(book)}
                                    sx={{ cursor: 'pointer' }}
                                  >
                                    {book?.status || 'pending'} 
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {new Date(book.createdAt).toLocaleDateString()}
                                  </Typography>
                                </TableCell>
                                <TableCell className="btn-icons">
                                  <IconButton onClick={() => {}}>
                                    <Link href={`/admin/book/${book?._id}`}>
                                      <EyeIcon size={20} fill="#29221f" />
                                    </Link>
                                  </IconButton>
                                  <IconButton
                                    className="btn-spacing"
                                    //   onClick={() => (window.location.href = `/admin/book/${book._id}`)}
                                  >
                                    <Link href={`/admin/book/${book._id}`}>
                                      <EditIcon size={20} fill="#c45e4c" />
                                    </Link>
                                  </IconButton>

                                  <IconButton
                                    onClick={() => {
                                      handleDelete(book._id, book?.cover,book?.image);
                                    }}
                                  >
                                    <DeleteIcon size={20} fill="#c45e4c" />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "2rem",
                          marginBottom: "2rem",
                        }}
                      >
                        <Pagination
                          onChange={(e, i) => {
                            handlePageChange(e, i);
                          }}
                          count={data?.pages}
                          defaultPage={page}
                          page={page}
                          siblingCount={0}
                          shape="rounded"
                          color="primary"
                          showFirstButton
                          showLastButton
                        />
                      </Box>
                    </TableContainer>
                  ) : (
                    <NoData description="لا توجد طلبات بعد" />
                  )}
                </>
              ) : (
                <NoData />
              )}
            </Grid>
          </div>
        </PageLayout>
      </AdminMainLayout>

      <Dialog open={statusDialog.open} onClose={() => setStatusDialog({ open: false, bookId: '', currentStatus: '' })}>
        <DialogTitle>Update Status</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusDialog.currentStatus}
              label="Status"
              onChange={(e) => handleStatusUpdate(e.target.value)}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="rejected">Rejected</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setStatusDialog({ open: false, bookId: '', currentStatus: '' })}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <CartButton user={localUser} />
    </div>
  );
}
