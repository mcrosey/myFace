import React,{useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {UserContext} from '../App';
const NavBar =()=>{
const {state, dispatch} = useContext(UserContext)
const history = useHistory()
const renderList = ()=>{
  if(state){
    return [
      <li key = '1'><Link to="/"><i className="material-icons">home</i></Link></li>,
      <li key = '2'><Link to="/profile"><i className="material-icons">account_circle</i></Link></li>,
      <li key = '3'><Link to="/create"><i className="material-icons">add_a_photo</i></Link></li>,
      <li key = '4'>
        <button className="btn #c62828 red darken-3"
                onClick={()=>{
                  localStorage.clear()
                  dispatch({type:"CLEAR"})
                  history.push('/login')
                }}
                >
                    Logout
                </button>
      </li>
    ]
  }else{
    return [
      <li key = '5'><Link to="/login">Login</Link></li>,
      <li key = '6'><Link to="/signup">Signup</Link></li>
    ]
  }
}
return(
  <nav>
  <div className="nav-wrapper white" >
    <Link to={state?"/":"login"} className="brand-logo left">My Face</Link>
    <ul id="nav-mobile" className="right">
      {renderList()}
      </ul>
  </div>
</nav>
    )
}
export default NavBar