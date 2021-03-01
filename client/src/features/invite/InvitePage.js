import React, { useEffect, useState, Link } from 'react'
import axios from 'axios'
import addToGoing from './inviteSlice.js'

export default function InvitePage() {
    // refactor to use slice
const[person, setPerson] = useState({})

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
        .then(resp => {
            console.log(resp.data.results[0])
        setPerson(resp.data.results[0])
        })
    }, [])

    // two arrays, one for going and one for not going set some property on the object to change if they are going or not going based on the click.
    // then push that objec to the array
    return (
       
    <div>
    {/* <Link to={`./GoingPage`}>GoingPage</Link> */}
     <button>Not Going Page</button>
     <span><img src={person.picture ? person.picture.medium : 'n/a'} alt='profile pic'/></span>
     <span>{person.name ? person.name.first : 'n/a'} {person.name ? person.name.last : 'n/a'}</span>
     <span>{person.cell}</span>
     <span>{person.email}</span>
     <button onClick={() => addToGoing()} >Accept</button>
     <button>Reject</button>


    </div>
    )
}