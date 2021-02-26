import React, { useEffect, useState } from 'react'
import axios from 'axios'

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

    return (
       
    <div>
     <span><img src={person.picture ? person.picture.medium : 'n/a'} alt='profile pic'/></span>
     <span>{person.name ? person.name.first : 'n/a'} {person.name ? person.name.last : 'n/a'}</span>
     <span>{person.cell}</span>
     <span>{person.email}</span>
    </div>
    )
}