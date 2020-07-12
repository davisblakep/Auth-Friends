import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function HomeFriend() {
  const classes = useStyles();

  return (
      <div style={{marginLeft: "10%", paddingTop: "6%"}}>
    <Card className={classes.root} style={{backgroundColor: "black", color: "white"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image="https://images.pexels.com/photos/569163/pexels-photo-569163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color: "white"}}>
            Cindy & Sarah
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color: "lightgray"}}>
            "Friends is a community to meet and celebrate friendships.  Cindy & Sarah met on Friends in 2017 and have created a new travel blog about their experiences together."
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color: "white"}}>
          Share
        </Button>
        <Button size="small" style={{color: "white"}}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
