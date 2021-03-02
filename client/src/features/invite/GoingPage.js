import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
// import goingUsers from '../src/app.js'

export default function GoingPage() {
const [goingList, setGoingList] = useState([])
   
useEffect(() => {
axios.get("/going")
    .then(function (response){
        console.log(response.data)
        setGoingList(response.data)
    })
}, [])    
    return (
        <div className="card-container">
            {goingList.map((user) => (
               <div key={user.phone}>
        <span>
        <img
          className="card-thumbnail"
          src={user.picture}
          alt="profile pic"
        />
      </span>
      <span>
        { user.first}{" "}
        {user.last}
      </span>
      <span>{user.phone}</span>
      <span>{user.email}</span>
               </div> 
            ))}
        </div>
    )
}