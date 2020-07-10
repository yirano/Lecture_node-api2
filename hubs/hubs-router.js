const express = require('express')

const Hubs = require('./hubs-model.js') // udpated path and 

const router = express.Router()

//! by the time this code runs, the URL begins with /api/hubs
//! we need only define what comes after that

router.get('/', (req, res) => {
  Hubs.find(req.query)
    .then(hubs => {
      res.status(200).json({ query: req.query, data: hubs })
    })
    .catch(error => {
      // log error to database
      console.log(error)
      res.status(500).json({
        message: 'Error retrieving the hubs',
      })
    })
})


//! handles requests to /api/hubs/:id
router.get('/:id', (req, res) => {
  Hubs.findById(req.params.id)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub)
      } else {
        res.status(404).json({ message: 'Hub not found' })
      }
    })
    .catch(error => {
      // log error to database
      console.log(error)
      res.status(500).json({
        message: 'Error retrieving the hub',
      })
    })
})

router.post('/', (req, res) => {
  Hubs.add(req.body)
    .then(hub => {
      res.status(201).json(hub)
    })
    .catch(error => {
      // log error to database
      console.log(error)
      res.status(500).json({
        message: 'Error adding the hub',
      })
    })
})

router.delete('/:id', (req, res) => {
  Hubs.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The hub has been nuked' })
      } else {
        res.status(404).json({ message: 'The hub could not be found' })
      }
    })
    .catch(error => {
      // log error to database
      console.log(error)
      res.status(500).json({
        message: 'Error removing the hub',
      })
    })
})

router.put('/:id', (req, res) => {
  const changes = req.body
  Hubs.update(req.params.id, changes)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub)
      } else {
        res.status(404).json({ message: 'The hub could not be found' })
      }
    })
    .catch(error => {
      // log error to database
      console.log(error)
      res.status(500).json({
        message: 'Error updating the hub',
      })
    })
})

router.get('/:id/messages', (req, res) => {
  const { id } = req.params

  Hubs.findHubMessages(id)
    .then(messages => {
      res.status(200).json({ data: messages })
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ errorMessage: 'We could not get the hubs data' })
    })
})

// add an endpoint that returns all the messages for a hub
// /messages?hub:id=1
// /hubs/1/messages

// add an endpoint for adding new message to a hub

router.post('/:id/messages', (req, res) => {
  Hubs.addMessage(req.body)
    .then(res => {
      res.status(201).json({ data: res })
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({ errorMessage: 'Message could not be posted' })
    })
})

// /api/2/messages
router.post('/:id/messages', (req, res) => {
  // const messageInfo = { ...req.body, hub_id: req.params.id }
  const messageInfo = req.body
  const { id } = req.params

  Hubs.addMessage(messageInfo)
    .then(message => {
      res.status(201).json({ data: message })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ errorMessage: "We could not add the message" })
    })

})


// export default router 
module.exports = router

