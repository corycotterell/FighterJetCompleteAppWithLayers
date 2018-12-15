import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input, Button} from 'reactstrap';
import FighterInput from './FighterInput.js';
class GetNewData extends React.Component {
    constructor(){
        super()
        this.state={
            name: "",
            make: "",
            topSpeed: "",
            weapons: "",
        }
        this.createHandler = this.createHandler.bind(this);
    }
    updateInputValue(obj) {
        
        this.setState(obj)
    }
    createHandler(){
        this.props.create(this.state)
        this.setState({
            name: "",
            make: "",
            topSpeed: "",
            weapons: "",
        })
    }
    
    render() {
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText className="fighterName">Fighter Jet Name: </InputGroupText>
                    </InputGroupAddon>
                    <Input value={this.state.name} onChange={(e)=>{this.updateInputValue({name: e.target.value})}}/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Fighter Jet Make: </InputGroupText>
                    </InputGroupAddon>
                    <Input value={this.state.make} onChange={(e)=>{this.updateInputValue({make: e.target.value})}}/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Top Speed: </InputGroupText>
                    </InputGroupAddon>
                    <Input value={this.state.topSpeed} onChange={(e)=>{this.updateInputValue({topSpeed: e.target.value})}}/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Primary Weapon: </InputGroupText>
                    </InputGroupAddon>
                    <Input value={this.state.weapons} onChange={(e)=>{this.updateInputValue({weapons: e.target.value})}}/>
                </InputGroup>
                <InputGroup>
                <InputGroupAddon addonType="prepend"><Button onClick={this.createHandler}>Submit Fighter Jet</Button></InputGroupAddon>
                </InputGroup>

            </div>
        )
    }
}

export default GetNewData