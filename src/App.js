import React, {useEffect, createContext, useReducer, useContext} from 'react'
import NavBar from './components/NavBar'
import "./App.css"
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import UserProfile from './components/screens/UserProfile'
import {reducer, intialState} from './Reducer/userReducer'
export const UserContext = createContext()


const Routing = () =>{
  const history = useHistory()
  const{state, dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    
    if(user){
      dispatch({type:"USER", payload:user})
      history.push('/')
    }else{
      history.push('/login')
    }
  },[])
  return(
    <Switch>
      <Route exact path="/" >
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route exact path="/profile">   {/*Using the "exact path" allows us to only acces this profile when called and not get mixed up with UserProfile.js */}
      <Profile />
    </Route>
    <Route path="/create">
      <CreatePost />
    </Route>
    <Route path="/profile/:userid">
      <UserProfile />
    </Route>

    </Switch>
  )
}


function App() {
  const [state, dispatch] =useReducer( reducer, intialState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
