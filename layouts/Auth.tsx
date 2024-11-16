import { makeStyles } from "@material-ui/core";
import {
  Container,
  CssBaseline,
  Box,
  Paper,
  Typography,
  Link as MuiLink,
  Grid,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import { AuthBackgroundPattern } from "@/components/pattern";
import useAuth from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/useTranslation";
import { useMemo } from "react";

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    marginTop: theme?.spacing(8),
   padding: theme?.spacing(8),
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      padding: theme?.spacing(3),
    },
  },
}));

export default function Auth({ children, width = "xs"  , dir}: any) {
  useAuth({
    redirectTo: "/",
    redirectIfFound: true,
  });
  const classes = useStyles();
  
  const { translation } = useTranslation();

  const t = useMemo(() => translation.register_page ?? {}, [translation]);
  return (
    <div dir={dir} className={classes.root}>
      <Container component="main">
        <CssBaseline />
        <Grid container justifyContent="center">
          {/* <Grid item display={{ xs: "none", sm: "block" }} xs={0} md={6}>
            <AuthBackgroundPattern t={t} />
          </Grid> */}
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              {/* start: Content */}
              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                {children}
              </motion.section>
         
              {/* <Box mt={5}>
                <Typography
                  component={"span"}
                  variant="body2"
                  color="textSecondary"
                  align="center"
                >
                  <FormattedMessage id="copyright" />{" "}
                  <MuiLink color="primary" href="/">
                    <FormattedMessage id="app.name" />
                  </MuiLink>
                </Typography>
              </Box> */}



              {/* end: Copyright */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
