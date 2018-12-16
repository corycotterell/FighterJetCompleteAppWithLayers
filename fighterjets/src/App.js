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
  
</React.Fragment>
)}

  

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  this.create = this.create.bind(this);
  this.delete = this.delete.bind(this);
  this.update = this.update.bind(this); 
}
  componentDidMount(){
    axios.get("/jets").then((obj)=>{
      this.setState({
        data:obj.data.data
      })
    })
  }
  create(obj){
    //console.log(this.state.data);
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
      {/* <div className="App">
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
        <Route path="/Fighter-Jets" component={props => <CardGenerator {...props} update={this.update} delete={this.delete} fighterData={this.state.data} />} ></Route>
        <Route path="/Welcome-to-the-Danger-Zone" component={Main}></Route>
        <Route path="/Submit-Fighter-Jet" component={props => <GetNewData{...props} create={this.create}/> }/>
        
      </div> */}
      <div>
      <Route path="/fighter" component={props => <CardGenerator fighterData={this.state.data || []} />} ></Route>
      </div>
      </Router>
    );
  }
}


export default App;