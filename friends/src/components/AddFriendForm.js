import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 275,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    }},
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}))


export default function AddFriendForm(props) {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    name: "",
    age: "",
    email: "",
    img: "",
    id: Date.now(),
})

const inputChange = (e) => {
    e.persist();
    setFormState({...formState, [e.target.name]: e.target.value});
}


let history = useHistory();


const submitForm = (e) => {
    e.preventDefault();
   
    axiosWithAuth()
        .post('/api/friends', formState)
        .then(res => {
           console.log("Axios addfriend submit form res", res);
           history.push('/dashboard')
        })
        .catch(err => console.log(err))

    setFormState({name: "", age: "", email: "", img: ""})
        
}

  return (
      <div style={{paddingTop: "4%"}}>
        <Card className={classes.root} style={{opacity: "0.9", marginLeft: "10%"}}>
           <CardContent>
              <Typography variant="h5" component="h2">
               Add Your Friend
              </Typography>
              <br />
           <form onSubmit={submitForm} className={classes.form} autoComplete="off">
              <FormControl required>
                 <TextField 
                 autoFocus
                 required={true} 
                 id="name" 
                 name="name"
                 label="Name" 
                 value={formState.name}
                 onChange={inputChange}
                 variant="filled" 
                 />
              </FormControl>
              <FormControl required>
                 <TextField 
                 id="age" 
                 name="age"
                 label="Age" 
                 value={formState.age}
                 onChange={inputChange}
                 variant="filled" 
                 type="text" 
                 required={true}
                 />
               </FormControl>
               <FormControl required>
                 <TextField 
                 id="email" 
                 name="email"
                 label="Email" 
                 value={formState.email}
                 onChange={inputChange}
                 variant="filled" 
                 type="email" 
                 required={true}
                 />
               </FormControl>
               <FormControl required>
                 <TextField 
                 id="img" 
                 name="img"
                 label="Image URL" 
                 value={formState.img}
                 onChange={inputChange}
                 variant="filled" 
                 type="text" 
                 required={true}
                 />
                 </FormControl>
             <CardActions>
           <Button type="submit" size="small">Submit</Button>
           <Link to="/dashboard" style={{textDecoration: "none"}}>
           <Button size="small">Cancel</Button>
           </Link>
          </CardActions>
        </form>
      </CardContent>
     </Card>
    </div>
 );
}

