import * as React from "react";
import { useMemo } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { AutoStories, RemoveRedEye } from "@mui/icons-material";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { message } from "antd";
import { Dialog } from "@mui/material";
import { EyeIcon } from "../icons";
import Image from "next/image";
import { useTranslation } from '@/context/useTranslation'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "scale(1)" : "scale(1.15)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface BookProps {
  _id: string | number;
  title: string;
  titletr?:string;
  story?: string;
  storytr?:string;
  price: string | number;
  cover: string;
  author?: string;
  category?: any;
  
}

export default function BookCard({
  book,
  user,
  dir
}: {
  book: BookProps;
  user: any;
  dir:string
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const uploadUrl = process.env.NEXT_PUBLIC_S3_UPLOAD_URL;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  

  const { translation } = useTranslation()

  const t = useMemo(() => translation ?? {}, [translation])
console.log("BOOK DETAILS--<>" , book)


  const addToCart = (bookDetails: any) => {
    const book = {
      _id: bookDetails?._id,
      title: bookDetails?.title,
      price: bookDetails?.price,
      cover: bookDetails?.cover,
      quantity: 1,
    };
    const CART_KEY = "cart";
    const LOCAL_ORDERS = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    if (LOCAL_ORDERS && LOCAL_ORDERS.length > 0) {
      const existingProduct = LOCAL_ORDERS.find(
        (b: Book) => b._id === book._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        LOCAL_ORDERS.push(book);
      }
    } else {
      LOCAL_ORDERS.push(book);
    }
    localStorage.setItem(CART_KEY, JSON.stringify(LOCAL_ORDERS));
    const msg = t.dir === 'rtl' ? "تم اضافة المنتج الى السلة" : 'Product added to baseket"'
    message.success(msg);
  };

  return (
    <Card className="bg-paper">
      <CardHeader
        action={
          <Link className="color-primary" href={`/~/product/${book._id}`}>
            <IconButton aria-label="settings">
              <EyeIcon size={20} fill="#29221f" />
            </IconButton>
          </Link>
        }
        title={
          <Typography
      //      onClick={() => (window.location.href = `/~/book/${book._id}`)}
          >
            <Link href={`/~/product/${book._id}`} >
      {t.dir ==='rtl' ? book?.title : book?.titletr}

</Link>

          </Typography>
        }
        subheader={
          typeof book.category === "object"
            ? t.dir === 'rtl' ? book.category?.name : book.category?.nametr 
            : book.category
        }
      />
      <CardMedia
        sx={{
          marginBottom: "1rem",
        }}
        className="zoom-in book-cover"
        component="img"
        //onMouseOver={() => setOpen(true)}
        onClick={() => setOpen(true)}
        image={book?.cover}

        // image={uploadUrl + "/" + book.cover}
        object-fit="cover"
        alt={t.dir ==='rtl' ? book?.title : book?.titletr}
      />
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <AutoStories />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography dir={t.dir} variant="body2" color="text.secondary">
            {t.dir ==='rtl' ? book?.story : book?.storytr}
          </Typography>
        </CardContent>
      </Collapse>
      {user?.role !== "admin" ? (
        <Button
        clasName=""
          onClick={() => addToCart(book)}
          style={{
            width: "100%",
            borderRadius: "0",
            padding: "0.75rem",
          }}
          className="zoom-in"
          variant="contained"
          color="secondary"
        >
          {t.dir === 'rtl' ? ' أضف الى السلة' :'add to cart'}
         
        </Button>
      ) : (
        <Button
         // onClick={() => (window.location.href = `/admin/book/${book._id}`)}
          style={{
            width: "100%",
            borderRadius: "0",
            padding: "0.75rem",
          }}
          className="zoom-in"
          variant="contained"
          color="secondary"
        >

<Link className=" !text-white" href={`/admin/book/${book._id}`} >
تعديل المنتج

</Link>
        </Button>
      )}
      <Dialog open={open} onClose={() => setOpen(false)}>
  


<Image
                  className="book__cover drop-shadow-md hover:drop-shadow-xl"
                  src={book.cover  as string}

                  // src={uploadUrl + "/" + bookDetails.cover}
                  alt={book?.title as string}
                  width={400}
                  height={400}
                  objectFit="cover"
                  unoptimized={true}
                  loading="lazy"
               
                />

      </Dialog>
    </Card>
  );
}
