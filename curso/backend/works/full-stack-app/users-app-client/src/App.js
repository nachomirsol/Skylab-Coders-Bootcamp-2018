import React, { Component } from 'react';
import './App.css';
import api from 'users-api-client-0'
import RegisterForm from './components/register/index'

require('dotenv').config()



class App extends Component {
  constructor(){
    super()
    this.state = {
      data:[],
      name:"",
      surname:"",
      email:"",
      username:"",
      password:"",
      showEdit:true
    }
  }

  componentDidMount() {
    api.list()
      .then(({ data }) => {
        this.setState({ data })
      })
      .catch(console.error)
  }

  createUser = () => {
    const {name, surname, email, username, password} = this.state
    api.register(name, surname, email, username, password)
    .then(({ data }) => {
      console.log({ data })
    })
    .catch(console.error)
      
  }

  deleteUser = (id) => {
    const {username, password} = this.state
    api.remove(id,username, password)
    .then(({ data }) => {
      console.log({ data })
    })
    .catch(console.error)
      
  }

  showEditForm = (e) => {
    e.preventDefault()
    this.setState({
      showEdit:false
    })
  }

  keepInputName = (e) => {this.setState({name: e.target.value})}
  keepInputSurname = (e) => {this.setState({surname: e.target.value})}
  keepInputEmail = (e) => {this.setState({email: e.target.value})}
  keepInputUsername = (e) => {this.setState({username: e.target.value})}
  keepInputPassword = (e) => {this.setState({password: e.target.value})}



  render() {
    const editTrue = this.state.showEdit
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <p className="App-intro">
        </p>
        <ul>
            {this.state.data.map((item,index) => 
              <li key = {index}>{item.name}
              
                { editTrue ? <EditForm edit = {this.showEditForm} /> : 'nothing to show'}
                <DeleteForm 
                  remove = {this.deleteUser(item.id)} 
                  showInputUsername = {this.keepInputUsername} 
                  showInputPassword = {this.keepInputPassword}
                />
              </li>
            )}
        </ul>
        <RegisterForm 
            create = {this.createUser} 
            showInputName = {this.keepInputName}
            showInputSurname = {this.keepInputSurname}
            showInputEmail = {this.keepInputEmail}
            showInputUsername = {this.keepInputUsername} 
            showInputPassword = {this.keepInputPassword}
        /> 

      </div>
    );
  }
}


function DeleteForm(props){
  return(
    <form onSubmit = {props.remove}>
      <input type = 'text' username = 'username' onChange = {props.showInputUsername}/>
      <input type = 'password' password = 'password' onChange = {props.showInputPassword}/>
      <button>Delete</button>
    </form>
  )
}

function EditForm(props){

  return(
    
    <form onSubmit = {props.edit}>
      <input type = 'text' username = 'username'/>
      <input type = 'password' password = 'password'/>
      <button>Edit</button>
    </form>
  )
}

export default App;
