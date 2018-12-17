import React from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ModalEditor from './ModalEditor';

class CardGenerator extends React.Component {
  constructor(){
    super()
    // this.state = {
    //   isOpen:false
    // }
    this.populateData = this.populateData.bind(this)
    // this.updateHandler = this.updateHandler.bind(this)
  }
  
//   updateHandler(){
//     this.setState({
//         model: "",
//         top_speed: "",
//         primary_fire: "",
//         manufacturer_id: null
//     })
//     this.props.update(this.props.name)
//     this.toggle()
// }

   populateData(props){
    
    return this.props.fighterData.map((jetData)=>{
      
      return <Card>
         {/* {console.log(jetData.top_speed)} */}
         {/* {console.log(this.props.fighterData)} */}
      <CardBody>
        <CardTitle>{jetData.model}</CardTitle>
        <CardSubtitle>{jetData.manufacturer_id}</CardSubtitle>
        <CardText>Top Speed: {jetData.top_speed}</CardText>
        <CardText>Primary Weapon: {jetData.primary_fire}</CardText>
        <Button onClick={this.props.delete(jetData.id)}>Delete</Button>   
        <Button onClick={this.props.toggleOpen(jetData)}>Edit</Button>        
     
        {/* <ModalEditor 
        isOpen={this.props.isOpen}
        toggleOpen={this.props.toggleOpen} 
        toggleClose={this.props.toggleClose}
        updateInputValue={this.props.updateInputValue}
        jet={jetData} /> */}

      </CardBody>
    </Card>
    
    })
    
  }
  render() {
    
    return (
      <div>
        {this.populateData()}
      </div>
    )
      // <div>
      
      //     <Card>
      //       {/*<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />*/}
      //       <CardBody>
      //         <CardTitle></CardTitle>
      //         <CardSubtitle></CardSubtitle>
      //         <CardText>Top Speed:</CardText>
      //         <CardText>Primary Weapon:</CardText>
      //         {/*delete={this.delete}*/}
      //         <Button>Delete</Button>
      //         {/* <Input value={this.state.name} onChange={(e)=>{this.updateInputValue({name: e.target.value})}}/> */}

      //         {/* <ModalEditor/> */}
      //       </CardBody>
      //     </Card>
      //   })
      // </div>
    

  
}}

export default CardGenerator 