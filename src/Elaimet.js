import React from 'react'
import { Transition, Card, Image } from 'semantic-ui-react'

class Elaimet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          visible: false
        }
    }

    componentDidMount(){
        this.setState({visible: true})
    }

    render(){
        return(
            <Transition.Group animation={'slide right'} duration={1000} >
            {this.state.visible &&
            <div>
                <h1>Eläimet</h1>
                <Card>
                   <Image src='' />
                   <Card.Content>
                       <Card.Header>
                           Nimi
                        </Card.Header>
                        <Card.Meta>
                            Tietoa
                        </Card.Meta>
                        <Card.Description>
                            Tekstiä
                        </Card.Description>
                    </Card.Content>
                </Card>
            </div>
            }
            </Transition.Group>
        )
    }
}

export default Elaimet