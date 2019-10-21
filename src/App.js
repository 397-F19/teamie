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
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import { positions } from '@material-ui/system';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';


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
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 300,
  },

  title: {
    flexGrow: 1,
  },
    gridList: {
    width: "100%",
    
   
  },
  card:{
    margin: 20,
  },
  paper: {
   // background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    position: "fixed",
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginTop:'200px',
    margin: theme.spacing(2),
  },
}));

const AppBar_header =  ({filterOnOff, setFilterOnOff, selectedTime, setSelectedTime, budget, setBudget, numPeople, setNumPeople, restaurants, setRestaurantsAll, filteredRestaurants}) => {
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
        <Container>
        <Toolbar>
        <Grid container>
<Grid item xs={2}>
        <TeamMemberFilter numPeople={numPeople} setNumPeople={setNumPeople}></TeamMemberFilter>
         </Grid>
         <Grid item xs={2}>
           <BudgetFilter budget={budget} setBudget={setBudget}></BudgetFilter>
           </Grid> 
           <Grid item xs={4}>
             <DateFilter filterOnOff={filterOnOff} setFilterOnOff={setFilterOnOff} setRestaurantsAll={setRestaurantsAll} filteredRestaurants={filteredRestaurants}
          selectedTime={selectedTime} setSelectedTime={setSelectedTime}></DateFilter>
          </Grid> 
           <Grid item xs={4}>
             <TimeFilter filterOnOff={filterOnOff} setFilterOnOff={setFilterOnOff} setRestaurantsAll={setRestaurantsAll} filteredRestaurants={filteredRestaurants}
          selectedTime={selectedTime} setSelectedTime={setSelectedTime}></TimeFilter>
          </Grid> 
          
         </Grid>
         </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

const TeamMemberFilter = ({numPeople, setNumPeople}) => {
  const classes = makeStyles(theme => ({
    TextField: {
      width: '20px',
    }
  }));
  // function handle

  return(
    <div>
      
      <form class="filter">
      <TextField
        id="standard-with-placeholder"
        label="Our team has"
        placeholder="Number of members"
        className={classes.textField}
        margin="normal"
        onChange={(e) => setNumPeople(e.target.value)} id="party-size" className={classes.textField} margin="normal"></TextField>
      </form>
      </div>
  )
}

const BudgetFilter = ({budget, setBudget}) => {
  const classes = makeStyles(theme => ({
    TextField: {
      width: '20px',
    }
  }));
  return(
    <div>
      
      <form class="filter">
        <TextField id="standard-with-placeholder"
        label="We have"
        placeholder="$ budget"
        className={classes.textField}
        margin="normal"
        onChange={(e) => setBudget(e.target.value)} id="party-budget" margin="normal"></TextField>
      </form>
        </div> 
  )
}

const TimeFilter = ({selectedTime, setSelectedTime, filterOnOff, setFilterOnOff, setRestaurantsAll, filteredRestaurants}) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
  });

  const inputLabel = React.useRef(null);


  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">for</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value={10}>Lunch 11:30AM-1:30PM</MenuItem>
          <MenuItem value={20}>Dinner 5:30PM-7:30PM</MenuItem>
          
        </Select>
      </FormControl>
      </form>
      )
}

const DateFilter = ({selectedTime, setSelectedTime, filterOnOff, setFilterOnOff, setRestaurantsAll, filteredRestaurants}) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
  });

  const inputLabel = React.useRef(null);


  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">We would like to go on</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value={10}>Next 5 workdays</MenuItem>
          <MenuItem value={20}>Next 7 workdays</MenuItem>
          
        </Select>
      </FormControl>
      </form>
      )
}

const TimeFilterr = ({selectedTime, setSelectedTime, filterOnOff, setFilterOnOff, setRestaurantsAll, filteredRestaurants}) => {
  const handleOnClick = (time) => {
    console.log("filtering")
    setSelectedTime(time);
    setFilterOnOff(!filterOnOff);
    setRestaurantsAll(filteredRestaurants);
  }

  return(
    <div>
      <Typography variant="h5" component="h5">We'd like to go during:</Typography>

      <Button onClick={(e) => handleOnClick("11:30-1:30")} variant="contained">
        Lunch 11:30AM-1:30PM
      </Button>
      <Button onClick={(e) => handleOnClick("5:30-7:30")} variant="contained">
        Dinner 5:30PM-7:30PM
      </Button>
    </div>
  )
}

const Poll = ({pollRests}) => {
  const classes = useStyles()
 
  
  return(
    <div>
      <Typography variant="h5" component="h3">Poll</Typography>
      <GridList>
        <GridListTile>
        <Card className={classes.card}>
  
  <Typography>Selected Restaurant 1</Typography>

</Card>
<Card className={classes.card}>
  <Typography>Selected Restaurant 2</Typography>
 
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
  
const GridComponent = ({filterOnOff, setFilterOnOff, selectedTime, setSelectedTime, budget, setBudget, numPeople, setNumPeople, restaurants, setRestaurantsAll, filteredRestaurants}) => {
  const classes = useStyles();
  return (
    <div>
      
        <Container>
        <Grid container spacing={3}>

        <Grid item xs={8}>
        <RestaurantList restaurants={restaurants}/>
      </Grid>

<Grid item xs={4}>
<Paper className={classes.paper}>

          
          <Poll></Poll>
          
          </Paper>
          
         
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
  
  const [btnToggle, toggleBtn] = useState(false);
  const [btnColor, setBtnColor] = useState("default");

  const handleClick = () => {
    const btnToggleState = !btnToggle;
    if (btnToggle) {
      setBtnColor("default");
    }
    else {
      setBtnColor("primary");
    }
    toggleBtn(btnToggleState);
  }

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
<Chip label="Add to list" clickable color={btnColor} onClick={handleClick}/>
</Grid>

</Grid>

</div>
)}


const App = ({}) => {
  const [restaurantsAll, setRestaurantsAll] = useState({restaurants: []});
  const url = '/data/restaurants.json';
  const filteredUrl = '/data/restaurantsFiltered.json';
  const [filteredRestaurants, setFilteredRestaurants] = useState({restaurants: []})
  
  //filter
  const [numPeople, setNumPeople] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  //garbage
  const [filterOnOff, setFilterOnOff] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setRestaurantsAll(json);
    }
    const fetchFilteredRestaurants = async () => {
      const response = await fetch(filteredUrl);
      if (!response.ok) throw response;
      const json = await response.json();
      setFilteredRestaurants(json);
    }
    fetchRestaurants();
    fetchFilteredRestaurants();
  }, [])
  

  const classes = useStyles();

  return (
    <div class="container">
      
      <AppBar_header></AppBar_header>
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
          
  
    </div>
  );
}

export default App;