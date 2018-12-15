import React from 'react';
import {Input} from 'reactstrap';
class FighterInput extends React.Component{
    constructor(props){
    super(props);
    this.state={
        inputValue: "",
    
    }
        this.updateInputValue = this.updateInputValue.bind(this)
    }
    
    updateInputValue(e) {
        this.setState({inputValue: e.target.value,
                    
        })
        this.props.changeHandler()
    }
    render(){
        return(
            
            <Input value={this.state.inputValue} onChange={this.updateInputValue}/>
           
        )
    }

};

export default FighterInput;