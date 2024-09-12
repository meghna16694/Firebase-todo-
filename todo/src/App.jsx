// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { db } from './firebaseConfig';
// import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';

// function App() {
//   const [input, setInput] = useState('');
//   const [todos, setTodos] = useState([]); 

//   useEffect(() => {
//     // Fetch the todo items from Firestore when the component mounts
//     const fetchTodos = async () => {
//       const querySnapshot = await getDocs(collection(db, 'todos'));
//       const todosArray = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         todo: doc.data().todo,
//         timestamp: doc.data().timestamp,
//       }));
//       setTodos(todosArray);
//     };
//     fetchTodos();
//   }, []);

//   const addTodo = async (e) => {
//     e.preventDefault();
//     if (input) {
//       try {
//         await addDoc(collection(db, 'todos'), {
//           todo: input,
//           timestamp: serverTimestamp(),
//         });
//         setInput('');
       
//         const querySnapshot = await getDocs(collection(db, 'todos'));
//         const todosArray = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           todo: doc.data().todo,
//           timestamp: doc.data().timestamp,
//         }));
//         setTodos(todosArray);
//       } catch (error) {
//         console.error("Error adding document: ", error);
//       }
//     }
//   };

//   return (
//     <div className='App'>
//       <div className='card'>
//         <h1>TODO LIST</h1>
//         <form className='input-group mb-3' onSubmit={addTodo}>
//           <input
//             type='text'
//             className='form-control'
//             onChange={e => setInput(e.target.value)}
//             value={input}
//           />
//           <button type='submit' className='btn btn-primary'>
//             ADD TO DO
//           </button>
//         </form>
//       </div>

//       <div className='card'>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th scope='col'>ID</th>
//               <th scope='col'>TODO</th>
//               <th scope='col'></th>
//               <th scope='col'></th>
//             </tr>
//           </thead>
//           <tbody>
//             {todos.map(todo => (
//               <tr key={todo.id}>
//                 <th>{todo.id}</th>
//                 <th>{todo.todo}</th>
//                 <th>
//                   <button className='btn btn-success'>Update</button>
//                 </th>
//                 <th>
//                   <button className='btn btn-danger'>Delete</button>
//                 </th>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react'


import './App.css'
import Dashboard from './Component/Dashboard'
import Appps from './Component/Appps'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Dashboard/> */}
      <Appps/>
    </>
  )
}

export default App

