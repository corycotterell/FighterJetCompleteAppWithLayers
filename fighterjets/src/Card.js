import React from 'react';
import { Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button } from 'reactstrap';  
import ModalEditor from './ModalEditor';


const CardGenerator = (props)=> {
   
        return(
  
            <div> 
            {props.fighterData.map((element)=> {
            return <Card>
            {/*<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />*/}
              <CardBody>
                <CardTitle>{element.name}</CardTitle>
                <CardSubtitle>{element.make}</CardSubtitle>
                <CardText>Top Speed: {element.topSpeed}</CardText>
                <CardText>Primary Weapon: {element.weapons}</CardText>
                {/*delete={this.delete}*/}
                <Button delete={props.delete} onClick={(e)=>{props.delete(element.name)}}>Delete</Button>
                {/* <Input value={this.state.name} onChange={(e)=>{this.updateInputValue({name: e.target.value})}}/> */}
               
                <ModalEditor element={element} update={props.update}/>
              </CardBody>
            </Card>
            })} 
          </div>            
        )
    
}

export default CardGenerator 