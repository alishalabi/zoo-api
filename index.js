// Initialize
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Creating Mock Array
zooAnimals = {
  "001" : {
    name: "Lion",
    color: "Yellow"
  },
  "002" : {
    name: "Elephant",
    color: "Gray",
  }
}

// Action: Index
app.get(`/animals`, (req, res) => {
  res.status(200).send(zooAnimals)
})

// Action: Create
app.post(`/animals`, (req, res) => {
  animalID = req.body.id
  animal = {
    name: req.body.name,
    color: req.body.color
  }
  zooAnimals[animalID] = animal
  res.status(200).send(zooAnimals[animalID])
})

// Action: Show One
app.get(`/animals/:id`, (req, res) => {
  animalID = req.params.id
  res.status(200).send(zooAnimals[animalID])
})

// Action: Update
app.put(`/animals/:id`, (req, res) => {
  animalID = req.params.id
  animal = {
    name: req.body.name,
    color: req.body.color
  }
  zooAnimals[animalID] = animal
  res.status(200).send(zooAnimals[animalID])
})

// Action: Destroy
app.delete(`/animals/:id`, (req, res) => {
  animalID = req.params.id
  removedAnimal = zooAnimals[animalID]
  delete zooAnimals[animalID]
  res.status(200).send(removedAnimal)
})

app.listen(3000, () => {
  console.log("API Working on port 3000")
})
