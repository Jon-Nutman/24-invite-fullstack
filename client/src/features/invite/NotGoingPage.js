import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

export default function NotGoingPage() {
    const [notGoingList, setNotGoingList] = useState([])
   
    useEffect(() => {
    axios.get("/not-going")
        .then(function (response){
            console.log(response.data)
            setNotGoingList(response.data)
        })
    }, [])    
        return (
            <div className="card-container">
                {notGoingList.map((user) => (
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