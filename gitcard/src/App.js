import React, { Component } from 'react';


import './App.css';

class App extends Component {
  state = {
    users: {},
    follow: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/docoleman36")
      .then(res => res.json())
      .then(res => this.setState({ users: res }))
      .catch(err => console.log(err));

    fetch("https://api.github.com/users/docoleman36/followers")

      .then(res => res.json())
      .then(res => this.setState({ follow: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="top">
          <h2>{this.state.users.name}</h2>
          <img width="150" alt="avatar" src={this.state.users.avatar_url} />
          <p>{this.state.users.login}</p>
          <p>{this.state.users.location}</p>
          <p>{this.state.users.followers}</p>
          <p>{this.state.users.following}</p>
          <p>{this.state.users.bio}</p>
        </div>

        <div className="card-container">
          {this.state.follow.map(x => {
            return (
              <div className="card">
                <h2>{x.login}</h2>
                <img width="150" src={x.avatar_url} key={x} alt={x} />
              </div>
            )
          }
          )}
        </div>
      </div>
    );
  }
}

export default App;
