import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input, ListGroup, ListGroupItem} from 'reactstrap';

class ModalEditor extends React.Component {
    constructor(props) {
        super(props);
        this.buildButton = this.buildButton.bind(this)
      }
    
    //   toggle() {
    //     this.setState({
    //       modal: !this.state.modal
    //     });
    //   }

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

    buildButton(props){
      if(this.props.currentEvent === "update"){
     return <Button  name={this.props.jet.model} color="primary" onClick={this.props.updateHandler(this.props.jet)}>Update</Button>
    }else if(this.props.currentEvent === "create"){
      return <Button  name={this.props.jet.model} color="primary" onClick={this.props.updateHandler(this.props.jet)}>Create</Button>
  }

}
    
      render() {
      
        
        return (
          <div>
         {console.log(this.props.jet)}
            <Modal isOpen={this.props.isOpen} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Update Fighter Jet Info:</ModalHeader>
              <ListGroup>
              <ModalBody>
              <InputGroup>
              <ListGroupItem> <InputGroupAddon addonType="prepend">Model</InputGroupAddon>
                <Input placeholder="name" value={this.props.jet.model}onChange={(e)=>{this.props.updateInputValue({model: e.target.value})}} /></ListGroupItem>
                    
                <ListGroupItem><InputGroupAddon addonType="prepend">Top Speed</InputGroupAddon>
                        <Input placeholder="make" value={this.props.jet.top_speed}onChange={(e)=>{this.props.updateInputValue({top_speed: e.target.value})}}/></ListGroupItem>
                        {/* <Input value={this.state.make} onChange={(e)=>{this.updateInputValue({make: e.target.value})}}/> */}
                        <ListGroupItem><InputGroupAddon addonType="prepend">Primary Weapon</InputGroupAddon>
                        <Input placeholder="top speed" value={this.props.jet.primary_fire} onChange={(e)=>{this.props.updateInputValue({primary_fire: e.target.value})}}/></ListGroupItem>
                   
                        <ListGroupItem><InputGroupAddon addonType="prepend">Manufacturer ID</InputGroupAddon>
                         <Input placeholder="weapons" value={this.props.jet.manufacturer_id} onChange={(e)=>{this.props.updateInputValue({manufacturer_id: e.target.value})}}/></ListGroupItem>
                    </InputGroup>
              </ModalBody>
              </ListGroup>
              <ModalFooter>
                 {this.buildButton()}
                  
                {/* onClick={(e)=>{props.delete(element.name)}}>Delete</Button> */}
                <Button color="secondary" onClick={this.props.toggleClose} >Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
    }


export default ModalEditor