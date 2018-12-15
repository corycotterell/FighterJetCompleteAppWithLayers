import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input, ListGroup, ListGroupItem} from 'reactstrap';

class ModalEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          name:props.element.name,
          make: props.element.make,
          topSpeed: props.element.topSpeed,
          weapons: props.element.weapons,
          id: props.element.id,
        };
    
        this.toggle = this.toggle.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

      updateHandler(){
        this.props.update(this.state)
        this.setState({
            name: "",
            make: "",
            topSpeed: "",
            weapons: "",
        })
    }
    updateInputValue(obj) {
        
        this.setState(obj)
    }
      render() {
        return (
          <div>
            <Button color="primary" size="lg" onClick={this.toggle}>Edit 🤯</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Update Fighter Jet Info:</ModalHeader>
              <ListGroup>
              <ModalBody>
              <InputGroup>
              <ListGroupItem> <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
                <Input placeholder="name" value={this.state.name}onChange={(e)=>{this.updateInputValue({name: e.target.value})}} /></ListGroupItem>
                    
                <ListGroupItem><InputGroupAddon addonType="prepend">Make</InputGroupAddon>
                        <Input placeholder="make" value={this.state.make}onChange={(e)=>{this.updateInputValue({make: e.target.value})}}/></ListGroupItem>
                        {/* <Input value={this.state.make} onChange={(e)=>{this.updateInputValue({make: e.target.value})}}/> */}
                        <ListGroupItem><InputGroupAddon addonType="prepend">Top Speed</InputGroupAddon>
                        <Input placeholder="top speed" value={this.state.topSpeed} onChange={(e)=>{this.updateInputValue({topSpeed: e.target.value})}}/></ListGroupItem>
                   
                        <ListGroupItem><InputGroupAddon addonType="prepend">Primary Weapon</InputGroupAddon>
                         <Input placeholder="weapons" value={this.state.weapons} onChange={(e)=>{this.updateInputValue({weapons: e.target.value})}}/></ListGroupItem>
                    </InputGroup>
              </ModalBody>
              </ListGroup>
              <ModalFooter>
                <Button  color="primary" onClick={this.toggle} onClick={(e)=>{this.props.update(this.props.name)}} onClick={this.updateHandler}>Update</Button>{' '}
                {/* onClick={(e)=>{props.delete(element.name)}}>Delete</Button> */}
                <Button color="secondary" onClick={this.toggle} >Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
    }


export default ModalEditor