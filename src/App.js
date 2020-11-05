import React from 'react';
import './App.css';


class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {username: '', password:'' , isloggedin:false};
    }
   
    handleUsername = event => {
      this.setState( {
      username: event.target.value,
    })
    };
    handlePassword = event => {
      this.setState({
      password: event.target.value});
      }
    checkStatus =  ()=>{
        if(this.state.isloggedin) return <h1>Hello, {this.state.username}!</h1>;
        else  return <h4>Enter username and password!</h4>;
    }
     handleApiCall = () => {
          
          let username = this.state.username;
          let password = this.state.password;
          
          console.log('triggered during api call you entered ' + username + password)
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username:username,password:password})
        };
        fetch("/post", requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                   console.log("yoyo" + result)
                    this.setState({
                     isloggedin:true });
                },
                (error) => {
                    console.log("shit" + error);
                }
            )
        
    }

    render(){ 
       
    return (
        <div className="App">
            <div className="task_input">
                <h1>Login App</h1>
                {
                this.checkStatus()
                }
                <input type="text" id="username" name="username" onChange={this.handleUsername} value={this.username} placeholder="Username" />
                <br />
                <input type="password" id="password" name="password" onChange={this.handlePassword} placeholder="Password" />
                <div className="center">
                    <button type="button" className="btn btn-success" id="add-task-btn" onClick={this.handleApiCall}>Login</button>
                </div>
            </div>
        </div>
    );}

            }
export default App;
