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
import ModalEditor from "./ModalEditor.js"
  

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[],
      currentEvent:"read",
      editingJetData:{
        model: '',
        top_speed: '',
        primary_fire: '',
        manufacturer_id: null
      },
      isOpen: false
    }
  this.updateInputValue = this.updateInputValue.bind(this);
  this.create = this.create.bind(this);
 
  //this.update = this.update.bind(this); 
  this.toggleOpen = this.toggleOpen.bind(this);
  this.toggleClose = this.toggleClose.bind(this);
  this.updateHandler = this.updateHandler.bind(this);
  this.deleteHandler = this.deleteHandler.bind(this);
}
  componentDidMount(){
    axios.get("/jets").then((obj)=>{
      this.setState({
        data:obj.data.data
      })
    })
  }

  // toggle() {
  //   this.setState({
  //     modal: !this.state.modal,
  //     isOpen: true
  //   });
  // }

  toggleOpen(jetData){
    return e => {
    this.setState({
      isOpen: true,
      currentEvent: "update",
      editingJetData:jetData
    })
  }
  }

  toggleClose(){
    this.setState({
      isOpen: false
    })
  }

  updateHandler(jet){
    console.log(jet)
    return e =>{
     //console.log(jet.id)
     if(this.state.currentEvent === "update"){
      axios.put(`/update/${jet.id}`, jet)
        .then(()=>axios.get("/jets").then((obj)=>{
          this.setState({
            data:obj.data.data
          })
        }))
        this.toggleClose()
      }else if(this.state.currentEvent === 'create'){
        axios.post(`/create/`, jet)
        .then(()=>axios.get("/jets").then((obj)=>{
          this.setState({
            data:obj.data.data
          })
        }))
        }
  }
}


updateInputValue(obj) {
  console.log(obj,this.state.editingJetData)
  let updatedJet = Object.assign(this.state.editingJetData,obj)
  this.setState({
    editedJetData: updatedJet
  })
}
  inputForCreate(obj){
    let newJet = Object.assign(this.state.editingJetData,obj)
    this.setState({
      editingJetData:newJet
    })
  }
  create(obj){

    //console.log(this.state.data);
   
    this.setState({
      isOpen: true,
      currentEvent: "create"
    })
  }
 
   
  
  deleteHandler(id){
    return e =>{
    axios.delete(`/delete/`, {data:{id:id}})
    .then(()=>axios.get("/jets").then((obj)=>{
      this.setState({
        data:obj.data.data
      })
    }))
  }
  }


  // update(obj){
  //   //.log(obj)
  //   axios.put(`/update/${obj.id}`, obj)
  //       .then(this.setState({
  //     // data: this.state.data.map((element)=>{
        
  //     //   if(obj.id===element.id){
  //     //     return obj
  //     //   }
  //     //   return element
       

  //     // }) 
  //   }))
  // } 
    
  

  
  
  render() {
    localStorage.setItem('data',JSON.stringify(this.state.data));

    
    return (
      <>
      
      <ModalEditor 
      isOpen={this.state.isOpen}
      toggleOpen={this.toggleOpen} 
      toggleClose={this.toggleClose}
      updateInputValue={this.updateInputValue}
      updateHandler={this.updateHandler}
      jet={this.state.editingJetData} 
      currentEvent={this.state.currentEvent}
      /> 
      <Router>
      <div>
      <button onClick={this.create}>create</button>
        <Route path="/add" component={props => <GetNewData
          create={this.create}
          updateInputValue={this.updateInputValue}
          jet={this.state.editingJetData}
        /> }></Route>
      <Route path="/fighter" component={props => <CardGenerator
        toggleOpen={this.toggleOpen} 
        delete={this.deleteHandler}
        toggleClose={this.toggleClose} 
        updateHandler={this.updateHandler} 
        updateInputValue={this.updateInputValue}
        fighterData={this.state.data || []} />} >
      </Route>
      {/* <ModalEditor toggle={this.toggle} updateHandler={this.updateHandler} update={this.update} /> */}
      {/* <Route path="/update" component={props => <ModalEditor update={this.update} />} ></Route> */}
      </div>
      </Router>
      </>
    );
  }
}


export default App;