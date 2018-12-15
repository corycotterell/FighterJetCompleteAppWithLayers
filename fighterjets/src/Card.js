import React from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ModalEditor from './ModalEditor';

class CardGenerator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false
    }
  }

  render() {
    return (
      <div>
          <Card>
            {/*<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />*/}
            <CardBody>
              <CardTitle></CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>Top Speed:</CardText>
              <CardText>Primary Weapon:</CardText>
              {/*delete={this.delete}*/}
              <Button>Delete</Button>
              {/* <Input value={this.state.name} onChange={(e)=>{this.updateInputValue({name: e.target.value})}}/> */}

              <ModalEditor/>
            </CardBody>
          </Card>
        })
      </div>
    )

  }
}
export default CardGenerator 