import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Menu, Transition } from 'semantic-ui-react'
import Etusivu from './Etusivu'
import Historia from './Historia'
import Elaimet from './Elaimet'
import Tuotteet from './Tuotteet'
import Yhteystiedot from './Yhteystiedot'

const Links = (props) => {
  return (
      <Router>
        <div>
          <div>
            <Menu color={'red'} inverted >
              <Link to="/">
              <Menu.Item className='link item' name='Etusivu'>
                Etusivu
              </Menu.Item>
              </Link>

              <Link to="/historia">
              <Menu.Item className='link item' name='Historia'>
                Historia
              </Menu.Item>
              </Link>

              <Link to="/elaimet">
              <Menu.Item className='link item' name='Elaimet'>
                Eläimet
              </Menu.Item>
              </Link>

              <Link to="/tuotteet">
              <Menu.Item className='link item' name='Tuotteet'>
                Tuotteet
              </Menu.Item>
              </Link>

              <Link to="/yhteystiedot">
              <Menu.Item className='link item' name='Yhteystiedot'>
                Yhteystiedot
              </Menu.Item>
              </Link>
            </Menu>
          
          </div>
          <br /><br />
          
          <Route exact path="/" render={() => <div><Etusivu /></div>} />
          <Route path="/historia" render={() => <div><Historia /></div>} />
          <Route path="/elaimet" render={() => <div><Elaimet /></div>} />
          <Route path="/tuotteet" render={() => <div><Tuotteet /></div>} />
          <Route path="/yhteystiedot" render={() => <div><Yhteystiedot /></div>} />
        </div>
      </Router>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  componentDidMount(){
    if(Math.random()>0.99){
      window.setInterval(()=>this.setState({visible: !this.state.visible}), 1200)
    }
  }

  render() {
    return (
        <Transition animation={'bounce'} duration={1000} visible={this.state.visible} >
        <Container>
          <Links />
        </Container>
        </Transition>
    )
  }
}

export default App
