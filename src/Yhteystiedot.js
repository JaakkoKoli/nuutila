import React from 'react'
import { Transition } from 'semantic-ui-react'

class Yhteystiedot extends React.Component {
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
            <h1>Yhteystiedot</h1>
            }
            </Transition.Group>
        )
    }
}

export default Yhteystiedot