import React, { useEffect, useState } from 'react'
import {auth, firestore} from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth'




import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

export default function Dashboard() {

  const[user, setUser] = useState("")
  const[name, setName] = useState("")
  const[sub, setSub] = useState("")
  const[editIndex, setEditIndex] = useState("")


const[record, setRecord] = useState(null)
useEffect(()=>{
  let unsubscribe = onAuthStateChanged (auth, (currentUser)=>{
    if(currentUser){
      setUser(currentUser)
    } else {
      setUser("guest")
    }
  })
},[])

useEffect(()=>{
  fetchData ()
},[])
 
const fetchData = async()=>{
  let querySnapshot = await getDocs(collection(firestore, "students"))
  console.log(querySnapshot)
  let allData = querySnapshot.docs.map((doc)=>({docId: doc.id, ...doc.data ()}))
  setRecord(allData)
}

const handleSubmit = async()=>{
  console.log(editIndex);
  if(!editIndex || editIndex <0){
    await addDoc(collection(firestore,"students"),{
       name, sub
  })
  } else{
    await updateDoc (doc(firestore, "students", record [editIndex].docId), {
    name : name,
    sub : sub
    })
  }
  setName("")
  setSub("")
  fetchData();
  setEditIndex (null)
}


const handleDelete = async (index) => {
  try {
    await deleteDoc(doc(firestore, "students", record[index].docId)); // Correct docId usage
    let remainingData = record.filter((e, i) => i !== index); // Filter out deleted data
    console.log(remainingData);
    setRecord(remainingData); // Update the state with the remaining records
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};
const handleEdit = (index) => {
  let singleData = record[index]
  setName(singleData.name)
  setSub(singleData.sub)
  setEditIndex(index)
} 


  return (
    <div className='cc' >
       <div>
          <div className='a'>
 <h1 className='a1'>Welcome</h1>
 <input className='a2' type="text" placeholder='enter name' onChange={(e)=> setName(e.target.value)} value={name} />      
 <input className='a2' type="text" placeholder='enter sub' onChange={(e)=> setSub(e.target.value)} value={sub} />      
<button className='a3' onClick={handleSubmit}>Submit</button>

<table className='a4' border='1' width="60%">
  <thead className='a5'>
   
    <th>name</th>
    <th>subject</th>
    <th colSpan={2}> action</th>
  </thead>
  <tbody>
    {
      record ?
       record.map((e,i)=>{
        return <tr key={i}>
         
          <td>{e.name}</td>
          <td>{e.sub}</td>
          <td><button className='b1' onClick={() => handleEdit(i)}>Edit</button></td>
          <td><button className="b2" onClick={() => handleDelete(i)}>Delete</button></td>
        </tr>
       })
       :<p>Loading</p>
    }
  </tbody>
</table>
      
    </div>
    </div>
      
    </div>
    
  
  )
}