import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function ValidationMessage(props) {
    if(!props.valid){
        return(<div className="error-msg">{props.msg}</div>)
    }else {
        return null;
    }
}

const url="http://localhost:8900/signin"
class Signin extends Component {
    constructor(){
        super()
        this.state={
            email:"",
            password: "",
            formValid:"",
            error:{}
        }
    }

    ValidateForm = () => {
        const {emailValid,passwordValid} = this.state;
        this.setState({
            formValid: emailValid && passwordValid 
        })
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

    /*updatePassword = (password) => {
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
        } 
        this.setState({passwordValid, error}, this.validateForm)
    }*/



    handleChangeEmail = (event) => {
        this.setState({email:event.target.value})
    }

    handleChangePassword = (event) => {
        this.setState({password:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)

        if (this.state.email !== "" && this.state.password !== ""){
            this.props.history.push('/dashboard')
        }
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                    <div className="col-lg-4">
    
                    </div>
                    <div className="col-md-4">
                        <h2>Sign In</h2>
                        <br/>
                        <div className="form-group">
                        <ValidationMessage  valid={this.state.emailValid} msg={this.state.error.email}/>
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" placeholder="Email" id="email"  value={this.state.email} onChange={(e)=>this.updateEmail(e.target.value)} onChange1={this.handleChangeEmail} required></input>
                           
                        </div>
                        <div className="form-group">
                        
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="Password" id="password" value={this.state.password} onChange={this.handleChangePassword} required></input>
                            <div className="invalid-feedback">Please fill out this field</div>
                        </div>
                        <br/>
                        <div className="form-group">
                            <button className="btn btn-success btn-block" onClick={this.handleSubmit} >Continue</button>
                        </div>
                        <p>----------------DON'T HAVE AN ACCOUNT-----------------------</p>
                        <Link to = "/register"><button type="button" className="btn btn-primary btn-block">SIGN UP</button></Link>
                        <br/>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                    </div>
                    <div className="col-lg-4">
    
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Signin;




/*
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const url="http://localhost:8900/signin"
class Signin extends Component {
    constructor(){
        super()
        this.state={
            email:"",
            password: "",
        }
    }

    handleChangeEmail = (event) => {
        this.setState({email:event.target.value})
    }

    handleChangePassword = (event) => {
        this.setState({password:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/dashboard'))
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                    <div className="col-lg-4">
    
                    </div>
                    <div className="col-md-4">
                        <h2>Sign In</h2>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" placeholder="Email" id="email"  value={this.state.email} onChange={this.handleChangeEmail}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="Password" id="password" value={this.state.password} onChange={this.handleChangePassword} ></input>
                        </div>
                        <br/>
                        <div className="form-group">
                            <button className="btn btn-success btn-block" onClick={this.handleSubmit} >Continue</button>
                        </div>
                        <p>----------------DON'T HAVE AN ACCOUNT-----------------------</p>
                        <Link to = "/register"><button type="button" className="btn btn-primary btn-block">SIGN UP</button></Link>
                        <br/>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                        <div class="invisible bg-warning">I am invisible</div>
                    </div>
                    <div className="col-lg-4">
    
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Signin;


                    */