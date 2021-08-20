import React from 'react';
import About from "./About";
import Main from "./Main";
import { Route } from 'react-router-dom';
import Header from "./Header";
import Map from "./Map";
import Login from "./Login";

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
        <Header/>
            <Route path="/" component={Main} exact/>
            <Route path="/about" component={About} />
            <Route path="/map" component={Map} />
            <Route path="/login" component={Login} />
      </div>
  );
}

export default App;
