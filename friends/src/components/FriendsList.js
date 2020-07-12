import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { axiosWithAuth } from '../utils/axiosWithAuth'



const useStyles = makeStyles({
  root: {
    minWidth: 345,
    maxWidth: 345,
  },
});



const FriendsList = () => {

    const classes = useStyles();

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }, [])
    
    console.log("Friends state after axios res", friends)
    return(
        <div>
        <div style={{paddingTop: "6%", paddingBottom: "6%"}}>
            <Grid container spacing={6} display='flex' justify="space-around" align="center">
            {friends.map(person => {return(
                <Grid item xs key={person.id}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={person.name}
          height="320"
          image={person.img}
          title={person.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {person.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Age: {person.age}
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            Email: {person.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
    </Grid>
            )})}
            </Grid>
        </div>
        </div>
    )
}

export default FriendsList;


