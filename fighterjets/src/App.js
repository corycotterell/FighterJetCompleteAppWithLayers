import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetNewData from './GetNewData.js';
import Card from './Card.js';
import CardGenerator from './Card.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import ShowTheLocation from "./location.js"
import axios from "axios"

const Home = () => <h2>Home</h2>;
const Main = () => {
  return (
    <React.Fragment>
      <h2 className="change-color">
        Welcome to the Danger Zone!
      </h2>
    <img src='https://images.pexels.com/photos/76971/fighter-jet-fighter-aircraft-f-16-falcon-aircraft-76971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></img>
</React.Fragment>
)}

  

class App extends Component {
  constructor(props){
    super(props)
    console.log(props)
   var local = localStorage.getItem('data')
   console.log(local)
      if(local){
      
        this.state={data: JSON.parse(local)};
      }
      else {
      
    this.state = {data:[
      {
      name: "F84 Thunderjet",
      make: "Republic  Aviation",
      topSpeed: "622 MPH",
      weapons:  "6 x .50 in M3 Browning machine guns",
      id: 0,
                },
      {
      name: "F86 Sabre",
      make: "North American Aviation",
      topSpeed: "685 MPH",
      weapons:  " 6 X 0.50 in (12.7 mm) M3 Browning machine guns (1,800 rounds in total)",
      id: 1,     
      },
      {
      name: "F100 Super Sabre",
      make: "North American Aviation",
      topSpeed: "864 MPH",
      weapons:  "4× 20 mm (0.787 in) Pontiac M39A1 revolver cannon w/ 200 rpg",
      id: 2,           
              
      },
      {
      name: "F4 Phantom 2",
      make: "McDonald Douglas",
      topSpeed: "1,473 MPH",
      weapons:  "E-model has a 20 mm (0.787 in) M61A1 Vulcan cannon mounted internally under the nose, 640 Rounds",
      id: 3,           
              
      }
  ]
}
};
  
  
//   localStorage.setItem( 'car', JSON.stringify(car) );
// console.log( JSON.parse( localStorage.getItem( 'car' ) ) );
  

  
  this.create = this.create.bind(this);
  this.delete = this.delete.bind(this);
  this.update = this.update.bind(this);
  
  }
  componentDidMount(){
    axios.get("/test").then(()=>{
      
    })
  }
  create(obj){
    console.log(this.state.data);
    this.setState({
      data: this.state.data.concat([{...obj,id:this.state.data.length}])
    })
 
  
   
  }
  delete(fighterJetName){
      this.setState({data: this.state.data.filter((fighterJet)=> {
          if(fighterJetName === fighterJet.name){
            localStorage.setItem('data',JSON.stringify(this.state.data));
            return false
          }else {
            
            return true;
            
          }
      })});
      
  }


  update(obj){
    console.log(obj)
    this.setState({
      data: this.state.data.map((element)=>{
        
        if(obj.id===element.id){
          return obj
        }
        return element
       

      }) 
    })
    
    
  }

  
  
  render() {
    localStorage.setItem('data',JSON.stringify(this.state.data));

    console.log(this.state)
    return (
      <Router>
      <div className="App">
      <ShowTheLocation fighterObj={this.state.data}/>
        <ul>
          <li>
            <Link to="/Fighter-Jets">Fighter Jets</Link>
          </li>
          <li>
          <Link to="/Welcome-to-the-Danger-Zone">Welcome to the Danger Zone</Link>
          </li>
          <li>
            <Link to="/Submit-Fighter-Jet">Submit Fighter Jet</Link>
          </li>

        </ul>

        {/* <CardGenerator update={this.update} delete={this.delete} fighterData={this.state.data}/> */}
        {/* <GetNewData create={this.create}/> */}
        <Route path="/Fighter-Jets" component={props => <CardGenerator {...props} update={this.update} delete={this.delete} fighterData={this.state.data} />} ></Route>
        <Route path="/Welcome-to-the-Danger-Zone" component={Main}></Route>
        <Route path="/Submit-Fighter-Jet" component={props => <GetNewData{...props} create={this.create}/> }/>
      </div>
      </Router>
    );
  }
}


export default App;