import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';
import { prettyDOM } from '@testing-library/react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Countries from './components/Countries/Countries';


// বেসিক component vs props এর ব্যবহার

// function App() {
//   return (
//     <div className="App"> 

//                {/* person */}
//       <Person name="rubel"nayika="moushumi" ></Person>
//       <Person name="BappaRaz" nayika="cakh"></Person>
//       <Person name="kuber" nayika="kopila"></Person>
      
//          {/* friend */}

//       <Friend movie="shingam" phone="01777"></Friend>
//     </div>
//   );
// }
//   // person function

// function Person(props){
 
//   return (
//     <div className='person'>
// <h1>{props.name}</h1>
// <p>{props.nayika}</p>
// </div>
//   );
// };

// // Friends function

// function Friend(props){
  
//   return (
//     <div className='friend'>
// <h3>{props.phone}</h3>
// <p>{props.movie}</p>
// </div>
//   );
// }


// Fetch এর ব্যবহার API কি ভাবি ডিক্লিয়ার কারতে হয় ।


// function App() { 
//   return (
//     <div className="App">
//       <External></External>
//     </div>
//   );
// }

//   function External() {
//     const [users, setUser] = useState([]);
//     useEffect( () =>{
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res=>res.json())
//       .then(data=>setUser(data))
//     }, []);
//   return (
//     <div>
//      <h1>ExternalUsers</h1> 
//       {
//         users.map(user => <User name={user.name} email={user.email}></User>)
//       }
//     </div>
//   );
// }
// function User (props){
//   return(
//     <div style={{border:'2px solid red', margin:'20px',borderRadius:'20px',backgroundColor:'orange'}}>
//       <h3>Name: {props.name}</h3>
//       <p>Email: {props.email}</p>
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
     <Countries></Countries>
    </div>
  );
}

export default App;
