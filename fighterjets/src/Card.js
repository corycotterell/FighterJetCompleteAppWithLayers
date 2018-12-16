import React from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
// import ModalEditor from './ModalEditor';

class CardGenerator extends React.Component {
  constructor(){
    super()
    this.populateData = this.populateData.bind(this)
  }
   populateData(props){
    
    return this.props.fighterData.map((jetData)=>{
     console.log(jetData.top_speed)
      return <Card>
         {console.log(jetData.top_speed)}
      <CardBody>
        <CardTitle>{jetData.model}</CardTitle>
        <CardSubtitle>{jetData.manufacturer_id}</CardSubtitle>
        <CardText>Top Speed: {jetData.top_speed}</CardText>
        <CardText>Primary Weapon: {jetData.primary_fire}</CardText>
        <Button>Delete</Button>
      </CardBody>
    </Card>
    
    })
    
  }
  render() {
    
    console.log(this.props.fighterData)
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