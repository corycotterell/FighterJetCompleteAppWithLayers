import React from "react"
import { withRouter } from "react-router";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';  
import ModalEditor from './ModalEditor';
  
class ShowTheLocation extends React.Component {


  constructor(props){
    super(props);
    this.state={

    }
  }
  
  render() {
    console.log(this.props.location.pathname)
    // const { match, location, history } = this.props;
    console.log(this.props.fighterObj)


  



    return <Card>
    {/*<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />*/}
      <CardBody>
        <CardTitle>{this.props.fighterObj[0].name}</CardTitle>
        <CardSubtitle>{this.props.fighterObj[0].make}</CardSubtitle>
        <CardText>Top Speed: {this.props.fighterObj[0].topSpeed}</CardText>
        <CardText>Primary Weapon: {this.props.fighterObj[0].weapons}</CardText>
        {/*delete={this.delete}*/}
        {/* <Button delete={props.delete} onClick={(e)=>{props.delete(element.name)}}>Delete</Button>
        {/* <Input value={this.state.name} onChange={(e)=>{this.updateInputValue({name: e.target.value})}}/> */}
       
        {/* <ModalEditor element={element} update={props.update}/> */} 
      </CardBody>
    </Card>
  }
}
export default withRouter(ShowTheLocation)