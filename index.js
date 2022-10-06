const express = require("express")
const cors = require("cors")
const app = express()
const { mostBlockedStates, statesCount } = require("./routes/mostblocked.js")




app.use(cors())


app.get('/mostblocked', (request, response) => {
    response.json(mostBlockedStates)
  })

app.get('/allstates', (request, response) => {
    const blockedUsersState = statesCount
    response.json(blockedUsersState)
  })


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

