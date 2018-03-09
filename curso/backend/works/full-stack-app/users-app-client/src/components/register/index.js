import React, { Component } from 'react';
function RegisterForm(props){
    return(
      <form onSubmit = {props.create}>
        <input type = 'text' name = 'name' placeholder = 'name' onChange = {props.showInputName}/>
        <input type = 'text' name = 'surname' placeholder = 'surname' onChange = {props.showInputSurname}/>
        <input type = 'text' name = 'email' placeholder = 'email' onChange = {props.showInputEmail}/>
        <input type = 'text' name = 'username' placeholder = 'username' onChange = {props.showInputUsername}/>
        <input type = 'text' name = 'password' placeholder = 'password' onChange = {props.showInputPassword} />
        <button>Add User</button>
    </form>
    )
  }
export default RegisterForm