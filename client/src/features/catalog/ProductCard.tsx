import { ListItem, ListItemAvatar, Avatar, ListItemText, CardActionArea, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { makeStyles } from '@mui/styles';


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
      ``<CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://picsum.photos/200"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    )
}