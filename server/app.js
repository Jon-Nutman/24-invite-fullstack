const express = require("express")
const app = express()
const cors = require("cors")
const axios = require("axios")

const goingUsers = []
const notGoingUsers = []

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.get("/user", (req, res) => {
  axios.get("https://randomuser.me/api/").then((resp) => {
    const randomPerson = resp.data.results[0]
    const newPerson = {
      phone: randomPerson.phone,
      email: randomPerson.email,
      first: randomPerson.name.first,
      last: randomPerson.name.last,
      picture: randomPerson.picture.large,
    }
    console.log(resp.data.results)
    res.json({ user: newPerson })
  })
})

app.post("/mark-invitee", (req, res) => {
  const incomingUser = req.body
  const userGoing = incomingUser.going
  if (userGoing) {
    goingUsers.push(incomingUser)
  } else {
    notGoingUsers.push(incomingUser)
  }
  res.json({ message: "updated your guest list", user: incomingUser })
  console.log(goingUsers)
})


app.get("/going", (req, res) => {
  res.json(goingUsers)
})

app.get("/not-going", (req, res) => {
  res.json(notGoingUsers)
})

app.get("/testing", (req, res) => {
  res.json({ hello: true })
})
app.listen(3001, (req, res) => {
  console.log("listening on port 3001")
})
