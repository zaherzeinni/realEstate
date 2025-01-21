import { Button, Typography } from "@material-ui/core";
import { Container, Paper } from "@mui/material";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found -  Sand n Sea</title>
        <meta
          name="description"
          content="Sorry Page Not Found"        />
      </Head>
      <Container
        sx={{
          marginTop: "2rem",
          marginBottom: "2rem",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Paper
          sx={{
            padding: "2rem",
            paddingBottom: "4rem",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography className="mb-5" variant="h5">
            الصفحة غير موجودة
          </Typography>
          <Typography variant="h1" className="mb-5" color="primary">
            404
          </Typography>
          <Typography className="mb-5">
        Sorry,  Page Not Found
          </Typography>

          <Button variant="contained" color="primary" href="/">
          Goto Home Page (Sand N Sea Realty)
          </Button>
        </Paper>
      </Container>
    </>
  );
}
