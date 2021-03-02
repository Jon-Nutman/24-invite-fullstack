import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import axios from "axios"
import { FaCheck, FaTimes } from "react-icons/fa"
// import addToGoing from './inviteSlice.js'
// // import dispatch from '../app/store'

export default function InvitePage() {
  // refactor to use slice
  const [person, setPerson] = useState({})

  useEffect(() => {
    fetchUser()
  }, [])

  function fetchUser() {
    axios.get("/user").then((resp) => {
      console.log(resp.data)
      setPerson(resp.data.user)
      console.log(person)
    })
  }
  console.log(person)

  function addToGoing() {
    console.log(person)
    const newUser = {...person, going: true }
    axios.post("/mark-invitee", newUser).then((resp) => {
      console.log(newUser)
      fetchUser()
    })
  }

  function addToNotGoing() {
    console.log(person)
    const newUser = {...person, going: false }
    axios.post("/mark-invitee", newUser).then((resp) => {
      console.log(newUser)
      fetchUser()
    })
  }

  // two arrays, one for going and one for not going set some property on the object to change if they are going or not going based on the click.
  // then push that objec to the array
  return (
    <div className='dumb-container-name'>
    <div className="card-container">
      <div className='card-links'>
      <Link to={`/going`}><button>Going Page</button></Link>
      <Link to={`/going`}><button>Not Going Page</button></Link>
      </div>
      <div className='card-img-container'>
        <img
          className="card-thumbnail"
          src={person.picture}
          alt="profile pic"
        />
      </div>
      <span className='card-name'>
        Name:{" "}
        {person.first}{" "}
        {person.last}
      </span>
      <span className='card-phone'>Phone: {person.phone}</span>
      <span className='card-email'>Email: {person.email}</span>
      <div className="checkAndTimes">
        <button onClick={() => addToGoing()}>
          <FaCheck />
        </button>
        <button onClick={() => addToNotGoing()}>
          <FaTimes />
        </button>
      </div>
    </div>
    </div>
  )
}
