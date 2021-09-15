import React from 'react';
import About from "./About";
import Main from "./Main";
import {Route, Switch} from 'react-router-dom';
import Map from "./Map";
import Login from "./Login";
import Plan from "./Plan";
import Calendar from "./Calendar";
import SignUp from "./SignUp";
import Search from "./Search";
import Board from "./Board/Board";
import BoardWrite from "./Board/BoardWrite";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username:null
//     };
//   }
//
//
//   componentDidMount() {
//     fetch('http://localhost:3001/api/member')
//         .then(res=>res.json())
//         .then(data=>this.setState({username:data[0].id}));
//   }
//
//   // render() {
//   //   const {username} = this.state;
//   //   return (
//   //     <div className="App">
//   //       <header className="App-header">
//   //         {username ? `Hello ${username}` : 'Hello World'}
//   //       </header>
//   //     </div>
//   //   );
//   //}
//   render() {
//     const {username} = this.state;
//     return (
//       <div className="App">
//         <Route path="/main" componet={Main} />
//         <Route path="/about" component={About} />
//       </div>
//     );
//   }
// }

function App() {
  return (
      <div>
          <Route path="/" component={Main} exact/>
          <Route path="/about" component={About} />
          <Route path="/map" component={Map} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp}/>
          <Route path="/search" component={Search}/>
          <Route path="/plan" component={Plan} />
          <Route path="/cal" component={Calendar}/>
          <Route path="/board" component={Board}/>
          <Route path="/boardWrite" component={BoardWrite}/>
      </div>
  );
}

export default App;
