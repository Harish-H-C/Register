import React, { Component } from 'react';
import './Register.css';

function ValidationMessage(props) {
    if(!props.valid){
        return(<div className="error-msg">{props.msg}</div>)
    }else {
        return null;
    }
}


const url = "http://localhost:8900/languages"


class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: "",usernameValid:false,
            email:"",emailValid:false,
            password: "",passwordValid:false,
            passwordConfirmation: "",passwordConfirmationValid:false,
            formValid:false,
            error:{}
        }
    }

    ValidateForm = () => {
        const {usernameValid,emailValid,passwordValid,passwordConfirmationValid} = this.state;
        this.setState({
            formValid:usernameValid && emailValid && passwordValid && passwordConfirmationValid
        })
    }

    updateUsername = (username) => {
        this.setState({username:username},this.validateUsername)
    }

    validateUsername = () => {
        const{username} = this.state;
        let usernameValid = true;
        let error = {...this.state.error}

        if(username.length < 3)
        {
            usernameValid = false;
            error.username = "username must be greater than 3 character"
        }

        this.setState({usernameValid, error}, this.validateForm)
    }

    updateEmail = (email) => {
        this.setState({email},this.validateEmail)
    }

    validateEmail = () => {
        const{email} = this.state;
        let emailValid = true;
        let error = {...this.state.error}

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            emailValid = false;
            error.email = "Invalid email Format"
        }
        this.setState({emailValid, error}, this.validateForm)
    }

    updatePassword = (password) => {
        this.setState({password},this.validatePassword);
    }

    validatePassword = () => {
        const{password} = this.state;
        let passwordValid = true;
        let error = {...this.state.error}
        
        if (password.length < 6){
            passwordValid = false;
            error.password = "Password must be at least 6 characters"
        } else if (!/\d/.test(password)){
            passwordValid = false;
            error.password = "Password must be 6 digits"
        } else if (!/[!@#$%^&*]/.test(password)){
            passwordValid = false;
            error.password = "Password must contain Special Characters"
        }
        this.setState({passwordValid, error}, this.validateForm)
    }

    updatePasswordConfirm = (passwordConfirmation) => {
        this.setState({passwordConfirmation},this.validatePasswordConfirm);
    }

    validatePasswordConfirm = () => {
        const{passwordConfirmation,password} = this.state;
        let passwordConfirmationValid = true;
        let error = {...this.state.error}

        if (password !== passwordConfirmation){
            passwordConfirmationValid = false;
            error.passwordConfirmation = "Password Donot match"
        }

        this.setState({passwordConfirmationValid,error}, this.validateForm)
    }





    handleChangeUsername = (event) => {
        this.setState({username:event.target.value})
    }

    handleChangeEmail = (event) => {
        this.setState({email:event.target.value})
    }

    handleChangePassword = (event) => {
        this.setState({password:event.target.value})
    }

    handleChangepasswordConfirmation = (event) => {
        this.setState({passwordConfirmation:event.target.value})
    }

    
    
    handleContinue = () => {
        console.log(this.state)

        if (this.state.email !== "" && this.state.password !== "" && this.state.username !== "" && this.state.passwordConfirmation !== "" ){//if email and password is not enterd then don't allow to dashboard page
        this.props.history.push('/signin')
            }
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json' 
            },
            body:JSON.stringify(this.state)
        })
        
    }

    render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <br/>
                        <img src="../images/o2spa1.jpg" alt=""/>
                    </div>
                    <div class="col-md-4">
                        <center>
                            <h2>Create an O2SPA Account</h2>
                        </center>
                        <main role="main">
                        <form action="#" id='js-form'>
                            <br/>
                            <div className="form-group">
                                <ValidationMessage  valid={this.state.usernameValid} msg={this.state.error.username}/>
                                <label htmlFor="username">User Name</label>
                                <input type="text" className="form-control" placeholder="User Name" id="username" value={this.state.username} onChange={(e)=>this.updateUsername(e.target.value)} onChange1={this.handleChangeUsername} required></input>
                            </div>
                            <div className="form-group">
                                <ValidationMessage  valid={this.state.emailValid} msg={this.state.error.email}/>
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" placeholder="Email" id="email" value={this.state.email} onChange={(e)=>this.updateEmail(e.target.value)} onChange1={this.handleChangeEmail} required></input>
                            </div>
                            <div className="form-group">
                                <ValidationMessage  valid={this.state.passwordValid} msg={this.state.error.password}/>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" placeholder="Password" id="password" value={this.state.password} onChange={(e)=>this.updatePassword(e.target.value)} onChange1={this.handleChangePassword} required></input>
                            </div>
                            <div className="form-group">
                                <ValidationMessage  valid={this.state.passwordConfirmationValid} msg={this.state.error.passwordConfirmation}/>
                                <label htmlFor="password-confirmation">Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Confirm Password" id="password-confirmation" value={this.state.passwordConfirmation} onChange={(e)=>this.updatePasswordConfirm(e.target.value)} onChange1={this.handleChangepasswordConfirmation} required></input>
                            </div>
                            <div className="form-controls">
                            <button className="btn btn-warning btn-block" type="submit" disable={!this.state.formValid} onClick={this.handleContinue}>Continue</button>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                        </form>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;


