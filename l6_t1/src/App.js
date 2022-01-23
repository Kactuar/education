import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const users2 = [
  {
    name: 'Alex',
    email: 'alex@mail.ru'
  },
  {
    name: 'Bob',
    email: 'bob@mail.ru'
  },
  {
    name: 'Alice',
    email: 'alice@mail.ru'
  }
]

const UserList = (props) => <ul><UserElem users={props.users} /></ul>;

const UserElem = (props) => (
  console.log('props', props)
//   props.users.map(({ name, email }, ind) =>
//     <div key={ind}>
//       <li>{name}</li>
//       <li>{email}</li>
//       <br/>
//     </div>
// )
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users
    }
  }

  static getDerivedStateFromProps({ users }) {
    return {users}
  }

  componentDidMount() {
    console.log('mount')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        console.log('a', users);
        this.setState((prevState) => ({ users }));
      });
  }

  render () {
    console.log('this.state.users', this.state.users)
    return (
      <UserList users={this.state.users}/>
    );
  }
}

export default App;

