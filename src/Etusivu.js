import React from 'react'
import { Transition } from 'semantic-ui-react'

class Etusivu extends React.Component {
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
            <div>
                <Transition.Group animation={'slide right'} duration={1000} >
                    {this.state.visible&&<h1>Tervetuloa</h1>}
                </Transition.Group>
            </div>
        )
    }
}

export default Etusivu