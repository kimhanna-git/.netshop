import { ListItem, ListItemAvatar, Avatar, ListItemText, CardActionArea, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../../app/models/product";
import { makeStyles } from '@mui/styles';
import { responsiveFontSizes } from "@material-ui/core";


interface Props {
    product: Product;
}
const useStyles = makeStyles({
    root: {
      
    },
    media: {
      height: 140,
    },
  });

export default function ProductCard({product}: Props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar sx={{bgcolor: 'secondary.main'}}>
              {product.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={product.name}
          titleTypographyProps={{
            sx: {fontWeight: 'bold', color: 'primary.main', fontSize: 20}
          }}
        
        />
        <CardMedia
          sx={{height: 140, backgroundSize: 'contain', bgcolor: 'primary.light'}}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom color='secondary' variant="h5" component="h2">
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to cart
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
    )
}