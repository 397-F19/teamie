import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import imgURL from './images/rest1.jpg';
import './App.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
<<<<<<< Updated upstream
=======
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import { positions } from '@material-ui/system';
>>>>>>> Stashed changes

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAFzpavaaS5qMRo8FSZsqsZAaglgXL8H04",
  authDomain: "teamie-blue.firebaseapp.com",
  databaseURL: "https://teamie-blue.firebaseio.com",
  projectId: "teamie-blue",
  storageBucket: "teamie-blue.appspot.com",
  messagingSenderId: "373175945503",
  appId: "1:373175945503:web:0ce516f07c5d387642882a"
};

firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
    gridList: {
    width: "100%",
<<<<<<< Updated upstream
    height: 600,
=======
    
   
>>>>>>> Stashed changes
  },
  card:{
    margin: 20,
  },
  paper: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    position: "fixed",
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    margin: theme.spacing(2),
  },
}));

const AppBar_header = () => {
  const classes = useStyles()

  return (
    <div>
      <AppBar position="fixed" color="inherit">
      <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Teamie
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}


const TeamMemberFilter = () => {
  const classes = makeStyles(theme => ({
    TextField: {
      width: '20px',
    }
  }));

  return(
    <div>
      <Typography variant="h5" component="h3">Our team has</Typography>
      <form class="filter">
<<<<<<< Updated upstream
        <TextField id="party-size" className={classes.textField} margin="normal"></TextField>
=======
      <TextField
        id="standard-with-placeholder"
        label="Number of members"
        placeholder="Number of members"
        className={classes.textField}
        margin="normal"
        onChange={(e) => setNumPeople(e.target.value)} id="party-size" className={classes.textField} margin="normal"></TextField>
>>>>>>> Stashed changes
      </form>
      </div>
  )
}

const BudgetFilter = () => {
  return(
    <div>
      <Typography variant="h5" component="h3">Our team building budget is</Typography>
      <form class="filter">
        <TextField id="party-budget" margin="normal"></TextField>
      </form>
<<<<<<< Updated upstream
        
      <Button variant="contained">
        Average
      </Button>
    </Paper>
=======
        </div> 
>>>>>>> Stashed changes
  )
}

const TimeFilter = () => {
  return(
    <div>
      <Typography variant="h5" component="h3">We'd like to go during:</Typography>

      <Button variant="contained">
        Lunch 11:30AM-1:30PM
      </Button>
<<<<<<< Updated upstream

      <Button variant="contained">
=======
<br></br><br></br>
      <Button onClick={(e) => handleOnClick("5:30-7:30")} variant="contained">
>>>>>>> Stashed changes
        Dinner 5:30PM-7:30PM
      </Button>
    </div>
  )
}

const Pool = () => {
  const classes = useStyles()
<<<<<<< Updated upstream

  return(
    <div>
      <Typography variant="h5" component="h3">Pool</Typography>
<Card className={classes.card}>
=======
 
  
  return(
    <div>
      <Typography variant="h5" component="h3">Poll</Typography>
      <GridList>
        <GridListTile height="450">
        <Card className={classes.card}>
  
>>>>>>> Stashed changes
  <Typography>Selected Restaurant 1</Typography>
  
 
</Card>
<Card className={classes.card}>
  <Typography>Selected Restaurant 1</Typography>
 
</Card>
<Card className={classes.card}>
  
  <Typography>Selected Restaurant 3</Typography>

</Card>
<Card className={classes.card}>
  <Typography>Selected Restaurant 4</Typography>
 
</Card>
<Card className={classes.card}>
  
  <Typography>Selected Restaurant 5</Typography>

</Card>
<Card className={classes.card}>
  <Typography>Selected Restaurant 6</Typography>
 
</Card>
        </GridListTile>
      </GridList>


  <Button variant="contained" color="primary">Send out poll</Button>
 </div>
    
  )
}
  
<<<<<<< Updated upstream
const GridComponent = ({restaurants}) => {
  return (
    <div>
      <Grid container spacing={10}>
      <Grid item xs={1}></Grid>
      <Grid item xs={4}>
          <TeamMemberFilter></TeamMemberFilter>
          <BudgetFilter></BudgetFilter>
          <TimeFilter></TimeFilter>
          <Pool></Pool>
          <Button variant="contained" color="primary">Send out pool</Button>
      </Grid>
      <Grid item xs={6}>
=======
const GridComponent = ({filterOnOff, setFilterOnOff, selectedTime, setSelectedTime, budget, setBudget, numPeople, setNumPeople, restaurants, setRestaurantsAll, filteredRestaurants}) => {
  const classes = useStyles();
  return (
    <div>
        <Container>
        <Grid container spacing={3}>

<Grid item xs={5}>
<Paper className={classes.paper}>
<Typography variant="h6" className={classes.title}>
            Teamie
          </Typography>
          <TeamMemberFilter numPeople={numPeople} setNumPeople={setNumPeople}></TeamMemberFilter>
          <BudgetFilter budget={budget} setBudget={setBudget}></BudgetFilter>
          <TimeFilter filterOnOff={filterOnOff} setFilterOnOff={setFilterOnOff} setRestaurantsAll={setRestaurantsAll} filteredRestaurants={filteredRestaurants}
          selectedTime={selectedTime} setSelectedTime={setSelectedTime}></TimeFilter>
          <br/>
          <Poll></Poll>
          
          </Paper>
          
         
          </Grid>
        <Grid item xs={7}>
>>>>>>> Stashed changes
        <RestaurantList restaurants={restaurants}/>
      </Grid>
    
      </Grid>
      </Container>
    </div>
    
  )
}

const RestaurantList = ({restaurants}) => {
  const classes = useStyles()
  
  return(
    
    <GridList className={classes.gridList}>
        <GridListTile cols={2} style={{ height: 'auto' }}>
        { restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={ restaurant } />) }

        </GridListTile>
        
           
      </GridList>

  )
}

const Restaurant = ({key, restaurant}) => {
  // const {name, price, tables, type} = this.props
  return(
    <div className="restaurant-card">
     <Grid container spacing={3}>
      <Grid item xs={8}>
   <h2>{restaurant.name}</h2>
   
   <h5>{restaurant.price} Lunch, Dinner Available Table Sizes: {restaurant.tables.map(size => <span>{size}, </span>)}</h5>
   <type>{restaurant.type}</type>
   <vegan>Vegan</vegan>
   <gltfree>Gluton Free</gltfree>
  </Grid>
  
  <Grid item xs={3}>
<img src={imgURL}/>
<Button variant="outlined" color="primary">Add to list</Button>
</Grid>

</Grid>

</div>
)}




const App = () => {
  const [restaurantsAll, setRestaurantsAll] = useState({restaurants: []});
  const url = '/data/restaurants.json';
  
  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setRestaurantsAll(json);
    }
    fetchRestaurants();
  }, [])
  
  const classes = useStyles();

  return (
<<<<<<< Updated upstream
    <div>
      <AppBar_header/>
      <GridComponent restaurants={restaurantsAll.restaurants} />
      
=======
    <div class="container">
      
      
      <GridComponent 
      filterOnOff={filterOnOff}
      setFilterOnOff={setFilterOnOff}
      budget={budget} 
      setBudget={setBudget} 
      numPeople={numPeople} 
      setNumPeople={setNumPeople} 
      selectedTime={selectedTime}
      setSelectedTime={setSelectedTime}
      filteredRestaurants={filteredRestaurants}
      setRestaurantsAll={setRestaurantsAll}
      restaurants={restaurantsAll.restaurants}
      // restaurants={(filterOnOff) ? filteredRestaurants.restaurants : restaurantsAll.restaurants}
      />
          
  
>>>>>>> Stashed changes
    </div>
  );
}

export default App;