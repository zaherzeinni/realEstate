import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import dynamic from "next/dynamic";
import { PageLayout } from "@/layouts";
import AdminMainLayout from "@/components/Site/dashboardLayout";
import { CircularLoading as Loading } from "@/components/loading";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "react-quill/dist/quill.snow.css";

// Dynamic import for React Quill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <Loading />,
});


const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, false] }], // Add heading levels
    [{ 'font': ['sans-serif', 'serif', 'monospace', 'roboto'] }], // Add more fonts
    [{ 'size': ['small', false, 'large', 'huge'] }], // Add font sizes
    ['bold', 'italic', 'underline'], // Text formatting options
    [{ 'color': [] }, { 'background': [] }], // Text color and background
    [{ 'align': [] }], // Text alignment
    ['link', 'image', 'video'], // Media options
    ['clean'], // Remove formatting button
    ['copy', 'paste']
  ]
  
};

// const formats = [
//   "header",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
// ];

const EditBuyguide = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    titlefr: "",
    desc: "",
    descfr: "",
    items: [{ id: "", title: "", titlefr: "", desc: "", descfr: "" }],
  });

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchBuyguide();
    }
  }, [id]);


  
  const fetchBuyguide = async () => {
    try {
      const response = await axios.get(`/api/buyguide/${id}`);
      setFormData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch buyguide:", error);
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;
    if (index !== undefined) {
      setFormData((prev) => {
        const items = [...prev.items];
        items[index] = { ...items[index], [name]: value };
        return { ...prev, items };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { id: "", title: "", titlefr: "", desc: "", descfr: "" },
      ],
    }));
  };

  const removeItem = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/buyguide/${id}`, formData);
      router.push("/admin/buyguide");
    } catch (error) {
      console.error("Failed to update buyguide:", error);
    }
  };

  const handleDescChange = (value: string, field: string, index?: number) => {
    if (index !== undefined) {
      setFormData((prev) => {
        const items = [...prev.items];
        items[index] = { ...items[index], [field]: value };
        return { ...prev, items };
      });
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  if (loading) {
    return <Loading />;
  }



  return (
    <div dir="ltr">
      <AdminMainLayout>
        <PageLayout title="Edit Buyguide">
          <Paper sx={{ p: 3, maxWidth: 1200, margin: "auto" }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Main Information */}
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Basic Information
                  </Typography>
                  <Card>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Title (French)"
                            name="titlefr"
                            value={formData.titlefr}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Typography variant="subtitle2" gutterBottom>
                            Description
                          </Typography>
                          <Box
                            sx={{
                              border: "1px solid #ddd",
                              borderRadius: 1,
                              bgcolor: "background.paper",
                            }}
                          >
                            <ReactQuill
                              value={formData.desc}
                              onChange={(value) =>
                                handleDescChange(value, "desc")
                              }
                              modules={modules}
                              // formats={formats}
                              style={{ height: "400px" }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Typography variant="subtitle2" gutterBottom>
                            Description (French)
                          </Typography>
                          <Box
                            sx={{
                              border: "1px solid #ddd",
                              borderRadius: 1,
                              bgcolor: "background.paper",
                            }}
                          >
                            <ReactQuill
                              value={formData.descfr}
                              onChange={(value) =>
                                handleDescChange(value, "descfr")
                              }
                              modules={modules}
                              // formats={formats}
                              style={{ height: "400px" }}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Items Section */}
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6">Items</Typography>
                    <Button
                      startIcon={<AddCircleOutlineIcon />}
                      onClick={addItem}
                      variant="contained"
                      color="primary"
                    >
                      Add Item
                    </Button>
                  </Box>

                  <Stack spacing={2}>
                    {formData.items.map((item, index) => (
                      <Card key={index}>
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mb: 2,
                            }}
                          >
                            <Typography variant="subtitle1">
                              Item {index + 1}
                            </Typography>
                            <IconButton
                              onClick={() => removeItem(index)}
                              color="error"
                              size="small"
                            >
                              <DeleteOutlineIcon />
                            </IconButton>
                          </Box>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                              <TextField
                                fullWidth
                                label="ID"
                                name="id"
                                value={item.id}
                                onChange={(e) => handleChange(e, index)}
                              />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <TextField
                                fullWidth
                                label="Title"
                                name="title"
                                value={item.title}
                                onChange={(e) => handleChange(e, index)}
                              />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <TextField
                                fullWidth
                                label="Title (French)"
                                name="titlefr"
                                value={item.titlefr}
                                onChange={(e) => handleChange(e, index)}
                              />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Typography variant="subtitle2" gutterBottom>
                                Description
                              </Typography>
                              <Box
                                sx={{
                                  border: "1px solid #ddd",
                                  borderRadius: 1,
                                  bgcolor: "background.paper",
                                }}
                              >
                                <ReactQuill
                                  value={item.desc}
                                  onChange={(value) =>
                                    handleDescChange(value, "desc", index)
                                  }
                                  modules={modules}
                                  // formats={formats}
                                  style={{ height: "400px" }}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Typography variant="subtitle2" gutterBottom>
                                Description (French)
                              </Typography>
                              <Box
                                sx={{
                                  border: "1px solid #ddd",
                                  borderRadius: 1,
                                  bgcolor: "background.paper",
                                }}
                              >
                                <ReactQuill
                                  value={item.descfr}
                                  onChange={(value) =>
                                    handleDescChange(value, "descfr", index)
                                  }
                                  modules={modules}
                                  // formats={formats}
                                  style={{ height: "400px" }}
                                />
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    ))}
                  </Stack>
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => router.push("/admin/buyguide")}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                      Update Buyguide
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </PageLayout>
      </AdminMainLayout>
    </div>
  );
};

export default EditBuyguide;
