import { TextInput, SelectInput } from "@/components/inputs";
import { PageLayout } from "@/layouts";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import Head from "next/head";
import useAuth from "@/hooks/useAuth";
import NotFound from "@/pages/404";
import { useState } from "react";
import axios from "axios";
import { message, Upload } from "antd";
import { uploadImages, deleteImage } from "@/utils/getData";
import AdminMainLayout from "@/components/Site/dashboardLayout";
import useCountries from "@/hooks/useCountries";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const uploadApi = "https://file-uploader-red.vercel.app";

const colorList = [
  "#001f3f",
  "#0074D9",
  "#7FDBFF",
  "#39CCCC",
  "#3D9970",
  "#2ECC40",
  "#01FF70",
  "#FFDC00",
  "#FF851B",
  "#FF4136",
  "#85144b",
  "#F012BE",
  "#B10DC9",
  "#111111",
  "#AAAAAA",
  "#DDDDDD",
  "#FFFFFF",
  "#1C00ff00",
];

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, false] }], // Add heading levels
    [{ 'font': ['sans-serif', 'serif', 'monospace', 'roboto'] }], // Add more fonts
    [{ 'size': ['small', false, 'large', 'huge'] }], // Add font sizes
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ direction: "rtl" }],
    [{ color: [...colorList] }, { background: [...colorList] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ 'align': [] }], // Text alignment
    ["link", "image", "video"],
    ["clean"],
  ],
};



// const modules = {
//   toolbar: [
//     [{ 'header': [1, 2, 3, 4, 5, false] }], // Add heading levels
//     [{ 'font': ['sans-serif', 'serif', 'monospace', 'roboto'] }], // Add more fonts
//     [{ 'size': ['small', false, 'large', 'huge'] }], // Add font sizes
//     ['bold', 'italic', 'underline'], // Text formatting options
//     [{ 'color': [] }, { 'background': [] }], // Text color and background
//     [{ 'align': [] }], // Text alignment
//     ['link', 'image', 'video'], // Media options
//     ['clean'] // Remove formatting button
//   ]
// };


export default function CreateCountry() {
  const { user } = useAuth({
    redirectTo: "/auth/login",
    redirectIfFound: false,
  });
  const [title, setTitle] = useState("");
  const [titlefr, setTitlefr] = useState("");
  const [story, setStory] = useState("");
  const [storyfr, setStoryfr] = useState("");
  const [description, setDescription] = useState("");

  const [file, setFile] = useState("");

  const handleUploadImage2 = async (file: any, logo: any) => {
    try {
      const formData = new FormData();

      formData.append("image", file);

      console.log("File Data", file);

      const endpoint = logo
        ? `${uploadApi}/file/upload?size=650&&hieghtsize=800`
        : `${uploadApi}/file/upload?size=650&&hieghtsize=800`;
      //?size=${(size = 1200)}&&hieghtsize=${(hieghtSize = 1000)}
      const response = await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File Uplaoded successfully", response.data);

      return response?.data?.file;
    } catch (error) {
      console.error("Error deleting files:", error);
      return;
    }
  };

  const { mutate } = useCountries();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    let image: string | any = "";

    if (!file) {
      return message.error("يجب اختيار الصورة ");
    }

    if (file) {
      //  image = await uploadImages(file, true, "book");
      image = await handleUploadImage2(file, false);
      message.success("تم تحميل الصورة بنجاح");
    }
    await axios
      .post("/api/country", {
        title,
        titlefr,
        story,
        storyfr,
        cover: image,
      })
      .then((res) => {
        mutate();
        message.success("Category added successfully");
        //       window.location.href = `/admin/category`;
      })
      .catch((err) => {
        message.error(err?.message);
      });
  };

  const handleTitle = (value: string) => {
    setTitle(value);
  };

  const handleTitleFr = (value: string) => {
    setTitlefr(value);
  };

  if (user && user.role !== "admin") return <NotFound />;


  return (
    <div dir="ltr" className="cart-area !bg-white">
      <Head>
        <title>Add country</title>
      </Head>
      <AdminMainLayout>
        <PageLayout title="اضافة قسم جديد">
          <form className="  !p-20" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextInput
                  name="name"
                  label="Country title"
                  required
                  value={title}
                  onChange={handleTitle}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextInput
                  name="name"
                  label="Country title french"
                  required
                  value={titlefr}
                  onChange={handleTitleFr}
                />
              </Grid>




              <Grid item xs={12} md={12}>
                English Description
                <ReactQuill
                  modules={modules}
                  value={story}
                  onChange={(value) =>
                    setStory(value)
                   }
                  
                  className="mt-1"
                />
              </Grid>

              <Grid item xs={12} md={12}>
                French Description
                <ReactQuill
                  modules={modules}
                  value={storyfr}
                  onChange={(value) =>
                   setStoryfr(value)
                  }
                  className="mt-1"
                />
              </Grid>

              <div>
                <Upload
                  className=" !font-estedad"
                  accept="image/*"
                  maxCount={1}
                  // file is data of image will be uploaded to firebase/storage
                  beforeUpload={(file: any) => {
                    setFile(file);
                    // setFiles((prev) => [...prev, file]);
                    return false;
                  }}
                  listType="picture-card"
                  onRemove={() => setFile("")}
                >
                  Add cover image
                </Upload>
              </div>

              <Grid item xs={12} md={12}>
                <Button type="submit" variant="contained" color="primary">
                  إنشاء التصنيف
                </Button>
              </Grid>
            </Grid>
          </form>
        </PageLayout>
      </AdminMainLayout>
    </div>
  );
}
