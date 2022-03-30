const http = require('http')

const app = require('./app')

const { getAllPlanets } = require('./models/planets.model')

const PORT = process.env.PORT || 8000;


const server = http.createServer(app);


app.get('/', (req, res) => {
  res.send('<h1>Root</h1>');
})

async function startServer() {
  await getAllPlanets()
}
startServer()
server.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
})