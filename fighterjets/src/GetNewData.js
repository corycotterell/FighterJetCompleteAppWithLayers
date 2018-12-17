import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input, Button} from 'reactstrap';
import FighterInput from './FighterInput.js';
class GetNewData extends React.Component {
    constructor(){
        super()
        console.log("fucking shit")
        this.state={
            name: "",
            make: "",
            topSpeed: "",
            weapons: "",
        }
    }
    
    
    render() {
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText className="fighterName">Fighter Jet Name: </InputGroupText>
                    </InputGroupAddon>
                    <Input value={this.props.jet.model} onChange={(e)=>{this.props.updateInputValue({model: e.target.value})}}/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Fighter Jet Make: </InputGroupText>
                    </InputGroupAddon>
                    <Input value={this.state.make} onChange={(e)=>{this.props.updateInputValue({top_speed: e.target.value})}}/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Top Speed: </InputGroupText>
                    </InputGroupAddon>
                    <Input value={this.state.topSpeed} onChange={(e)=>{this.props.updateInputValue({primary_fire: e.target.value})}}/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Primary Weapon: </InputGroupText>
                    </InputGroupAddon>
                    <Input value={this.state.weapons} onChange={(e)=>{this.props.updateInputValue({manufacturer_id: e.target.value})}}/>
                </InputGroup>
                <InputGroup>
                <InputGroupAddon addonType="prepend"><Button onClick={this.props.create}>Submit Fighter Jet</Button></InputGroupAddon>
                </InputGroup>

            </div>
        )
    }
}

export default GetNewData