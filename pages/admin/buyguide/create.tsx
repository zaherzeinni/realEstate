import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
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
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

// Dynamic import for React Quill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <Loading />,
});


const CreateBuyguide = () => {
  const [formData, setFormData] = useState({
    title: '',
    titlefr: '',
    desc: '',
    descfr: '',
    items: [{ id: '', title: '', titlefr: '', desc: '', descfr: '' }],
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string, index?: number, field?: string) => {
    if (typeof e === 'string' && field) {
      // Handle Quill editor changes
      if (index !== undefined) {
        const items = [...formData.items];
        items[index] = { ...items[index], [field]: e };
        setFormData({ ...formData, items });
      } else {
        setFormData({ ...formData, [field]: e });
      }
    } else if (typeof e === 'object') {
      // Handle regular input changes
      const { name, value } = e.target;
      if (index !== undefined) {
        const items = [...formData.items];
        items[index] = { ...items[index], [name]: value };
        setFormData({ ...formData, items });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { id: '', title: '', titlefr: '', desc: '', descfr: '' }],
    });
  };

  const removeItem = (index: number) => {
    const items = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Filter out empty items
      const cleanedFormData = {
        ...formData,
        items: formData.items.filter(item => 
          item.id || item.title || item.titlefr || item.desc || item.descfr
        )
      };
      
      const response = await axios.post('/api/buyguide', cleanedFormData);
      if (response.data.success) {
        router.push('/admin/buyguide');
      }
    } catch (error: any) {
      console.error('Failed to create buyguide:', error.response?.data || error);
      // Add error handling UI here
    }
  };


  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5,6, false] }], // Add heading levels
      [{ 'font': ['sans-serif', 'serif', 'monospace', 'roboto'] }], // Add more fonts
      [{ 'size': ['small', false, 'large', 'huge'] }], // Add font sizes
      ['bold', 'italic', 'underline'], // Text formatting options
      [{ 'color': [] }, { 'background': [] }], // Text color and background
      [{ 'align': [] }], // Text alignment
      ['link', 'image', 'video'], // Media options
      ['clean'], // Remove formatting button
      // ['copy', 'paste']
    ]
  };
  



  return (
    <div dir='ltr'>
    <AdminMainLayout>
      <PageLayout title="Create Buyguide">
        <Paper sx={{ p: 3, maxWidth: 1200, margin: 'auto' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Main Information */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Basic Information ADD GUIDE
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
                      <Grid item xs={12} md={6} >
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
                        <Typography variant="body1">Description</Typography>
                        <ReactQuill
                          modules={modules}
                          value={formData.desc}
                          onChange={(value) => handleChange(value, undefined, 'desc')}
                          style={{ height: '400px', marginBottom: '50px' }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6} >
                        <Typography variant="body1">Description (French)</Typography>
                        <ReactQuill
                         modules={modules}
                          value={formData.descfr}
                          onChange={(value) => handleChange(value, undefined, 'descfr')}
                          style={{ height: '400px', marginBottom: '50px' }}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* Items Section */}
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
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
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Typography variant="subtitle1">Item {index + 1}</Typography>
                          {formData.items.length > 1 && (
                            <IconButton onClick={() => removeItem(index)} color="error">
                              <DeleteOutlineIcon />
                            </IconButton>
                          )}
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
                          <Grid item xs={12} md={6} className=' contents'>
                            <TextField
                              fullWidth
                              label="Title (French)"
                              name="titlefr"
                              value={item.titlefr}
                              onChange={(e) => handleChange(e, index)}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography variant="body1">Description</Typography>
                            <ReactQuill
                            modules={modules}
                              value={item.desc}
                              onChange={(value) => handleChange(value, index, 'desc')}
                              style={{ height: '400px', marginBottom: '50px' }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography variant="body1">Description (French)</Typography>
                            <ReactQuill
                            modules={modules}
                              value={item.descfr}
                              onChange={(value) => handleChange(value, index, 'descfr')}
                              style={{ height: '400px', marginBottom: '50px' }}
                            />
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
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => router.push('/admin/buyguide')}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Create Buyguide
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

export default CreateBuyguide;
