import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import theme from "@/site-settings/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          
          <meta name="title" content="Sand n Sea Realty" />
          <meta name="description" content="Sand n Sea Realty" />
          <meta name="keywords" content="Sand n Sea Realty" />
          <link rel="icon" href="/5.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content={theme.palette.primary.main} />

          {/* Preload fonts for better performance */}
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap" as="style" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap" />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

        </Head>
        <body dir="rtl">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// MyDocument.getInitialProps = async (ctx) => {
//   const sheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;

//   // ctx.renderPage = () =>
//   //   originalRenderPage({
//   //     enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//   //   });

//   const initialProps = await Document.getInitialProps(ctx);

//   return {
//     ...initialProps,
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//       sheets.getStyleElement(),
//     ],
//   };
// };
