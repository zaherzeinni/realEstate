import Head from "next/head";
import { AuthLayout } from "@/layouts";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { PasswordInput, TextInput } from "@/components/inputs";
import { useState, useMemo } from "react";
import useAuth, { login } from "@/hooks/useAuth";
import { Box } from "@mui/material";
import { Alert } from "@material-ui/lab";
import styled from "styled-components";
import { GoogleAuthButton } from "@/components/button";
import { useTranslation } from "@/context/useTranslation";
import Breadcrumb from "@//components/components/common/Breadcrumb";
import Header from "@/components/components/header/Header2";

export const Form = styled.form`
  align-items: center;
`;

const useStyles: any = makeStyles((theme: any) => ({
  form: {
    marginTop: theme?.spacing(3),
    minWidth: "70%",
  },
  button: {
    marginBottom: theme?.spacing(2),
    marginTop: theme?.spacing(2),
  },
}));

export default function Login() {
  const router = useRouter();
  const classes = useStyles();
  const { mutate } = useAuth();

  const { translation } = useTranslation();

  const t = useMemo(() => translation.login_page ?? {}, [translation]);
  const troot = useMemo(() => translation ?? {}, [translation]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const res = await login({ email, password });
      localStorage.setItem("user", JSON.stringify(res.data));
      mutate();
      router.push("/");
    } catch (e) {
      setHasError(true);
      setLoading(false);
    }
  };
  return (
    <div className=" mb-16">
      <Head>
        <title>Real estate</title>

        <meta name="description" content="Real estate" />
        <meta name="keywords" content="One Lounge" />

        <link rel="icon" href="/logores1.png" />
      </Head>

      <Header />

<Breadcrumb
  pagename="Login page"
  pagetitle="Login page"
/>
      
      
   
      
      <AuthLayout dir="ltr">
        <Typography component={"span"} variant="h5">
          {/* <FormattedMessage id={"title.login"} /> */}
          Login
        </Typography>
        {hasError && (
          <Box marginTop={3}>
            <Alert severity="error">
              <FormattedMessage id={"error.login"} />
            </Alert>
          </Box>
        )}
        <Form className={classes.form} onSubmit={onSubmit}>
          <TextInput
            name="email"
            required
            label={"Email"}
            type="email"
            autoComplete="email"
            onChange={setEmail}
          />

          <PasswordInput
            name="password"
            label={"Password"}
            required={true}
            autoComplete="password"
            onChange={setPassword}
          />

          <Button
            type="submit"
            variant="contained"
            className=" bg-primary text-white primary-btn1"
            fullWidth
            disabled={loading}
          >
            Login
            {/* <FormattedMessage id={"btn.continue"} /> */}
          </Button>
          <Link href="/">
           <Button
           type="submit"
           fullWidth
           className=" primary-btn1 mt-2"
           >
             Home</Button>
           </Link>
          <Box marginTop={2}>
            {/* <NoAccount text={"Dont have account"} /> */}
          </Box>
        </Form>
      </AuthLayout>
    </div>
  );
}

function NoAccount({ text }: any) {
  return (
    <Link href="/auth/register">
      <Typography
        component={"span"}
        align="center"
        className=" text-primary text-md font-bold"
        color={"primary"}
        variant="body2"
      >
        {text}
      </Typography>
    </Link>
  );
}
