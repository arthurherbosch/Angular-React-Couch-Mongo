import React, { Component } from 'react'
import axios from 'axios'
import ListProduct from './product/ListProduct'
import AddProduct from './product/AddProduct'
import EditProduct from './product/EditProduct'
import SearchProduct from './product/SearchProduct.js'
import DeleteProduct from './product/DeleteProduct'
import Login from './auth/Login'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

/*class App extends Component {
  constructor(props) {
    super(props)
    this.state = { imageURL: '' }
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      this.setState({ imageURL: response.data.message })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <img src={ this.state.imageURL } />
    )
  }
}*/

class App extends Component {

  constructor(props) {  
    super(props)
    this.state = { authenticated: false }
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    if(localStorage.getItem('user')) {
      let user = JSON.parse(localStorage.getItem('user'))
      this.setState({ authenticated: user.authenticated })
    }
  }

  logout() {
    localStorage.removeItem('user')
    window.location.reload()
  }

  render() {
    if(this.state.authenticated === true) {
      return (
        <div className = 'container'>
        <BrowserRouter>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                  <li className='nav-item active'>
                    <Link to={ '/list' } className='nav-link'>List</Link>
                  </li>
                  <li className='nav-item active'>
                    <Link to={ '/add' } className='nav-link'>Add</Link>
                  </li>
                  <li className='nav-item active'>
                    <Link to={ '/search' } className='nav-link'>Search</Link>
                  </li>
                  <li className='nav-item active'>
                    <Link to={ '/delete' } className='nav-link'>Delete</Link>
                  </li>
                  <li className='nav-item active'>
                    <Link to={ '' } onClick={ this.logout } className='nav-link'>Logout</Link>
                  </li>
              </ul>
              </div>
            </nav>
            <br/><br/>
            <Switch>
              <Route exact path='/list'><ListProduct/></Route>
              <Route exact path='/add'><AddProduct/></Route>
              <Route exact path='/edit/:product' component={ EditProduct }/>
              <Route exact path='/search'><SearchProduct/></Route>
              <Route path='/delete/:product' component={ DeleteProduct }/>
              <Route path='/delete'><DeleteProduct/></Route>
              <Route exact path='/login' component={ Login }/>
              <Route path='*'><ListProduct/></Route>
            </Switch>  
        </BrowserRouter>
        </div> 
      )
    }
    else {
      return (
            <BrowserRouter>
              <Route path='*' component={ Login }/>
            </BrowserRouter>)
    }
  }
}

export default App
