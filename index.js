import express from 'express'

const url = 'https://api.vinimini.fdnd.nl/api/v1'

// Maak een nieuwe express app
const app = express()

// stel de public map in
app.use(express.static('public'))

// Stel de view engine in
app.set('view engine', 'ejs')
app.set('views', './views')

// Stel de afhandeling van formulieren in
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Maak een route voor de index
app.get('/', (request, response) => {
  let semesterUrl = url + '/producten'

  fetchJson(url).then((data) => {
    console.log(data)
    response.render('index', data)
  })
})

app.get('/over-ons', (request, response) => {
  response.render('over')
})

app.get('/nieuws', (request, response) => {
  response.render('nieuws')
})

app.get('/contact', (request, response) => {
  response.render('contact')
})

app.get('/new', (request, response) => {
    response.render('form')
  })

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => error)
  }

export async function postJson(url, body) {
    return await fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .catch((error) => error)
  }