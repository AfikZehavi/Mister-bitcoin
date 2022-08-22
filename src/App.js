import { Home } from './pages/Home'
import { Contacts } from './pages/Contacts'
import { Statistics } from './pages/Statistics'
import { ContactDetails } from './pages/ContactDetails'
import { EditContact } from './pages/EditContact'
import Header from './cmps/Header'
import { loadContacts, setFilterBy } from './store/actions/contactActions'
import { BitcoinService } from './services/BitcoinService'
import React, { Component } from 'react'
import { loadUser } from './store/actions/userActions'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

class _App extends Component {
  state = {
    // user: null,
    BTC: null,
    // contacts: null,
  }


  onSearch = async (query) => {
    this.props.setFilterBy(query)
    this.props.loadContacts()
  }

  async componentDidMount() {
    // const user = userService.getUser()
    try {
      // this.loadUser()
       this.props.loadUser()
      const { user } = this.props
      console.log('user = ', user)
      
      this.props.loadContacts()
      console.log(this.props);
      

    } catch (error) {
      console.log('err', error);
    }
  }






  // loadUser = async ()=>{
  //   console.log('props', this.props);
  //   const { user } = this.props
  //   console.log('user = ', user)
  //   if (user) {
  //     const BTC = await BitcoinService.getRate(user.coins)
  //     this.setState({ BTC })
  //   }
  // }

  render() {
    const { contacts, user } = this.props
    // const { contacts } = this.props
    if (!user ) return <div>Loading...</div>
    return (
      <Router>
        <div>
          <header>
            <Header />
          </header>
          <section className='main-app'>
            <Switch>
              <Route exact path="/contact/edit/:id?" component={EditContact} />
              <Route exact path="/contact/:id" component={ContactDetails} />
              <Route path="/contacts">
                <Contacts contacts={contacts} onSearch={this.onSearch} />
              </Route>
              <Route path="/statistics">
                <Statistics />
              </Route>
              <Route path="/">
                <Home user={user} BTC={this.state.BTC} />
                {/* <Home user={user} /> */}
              </Route>
            </Switch>
          </section>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contactModule.contacts,
    user: state.userModule.loggedInUser
  }
}

const mapDispatchToProps = {
  loadContacts,
  setFilterBy,
  loadUser
}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)