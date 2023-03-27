import express from 'express'

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
  const url = 'https://api.vinimini.fdnd.nl/api/v1'
  const noteUrl = url + '/notities'

  fetchJson(noteUrl).then((data) => {
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

// app.get('/notities', (request, response) => {
//     response.render('form')
//   })

  app.post('/notities', (request, response) => {
    const url = 'https://api.vinimini.fdnd.nl/api/v1'
    const noteUrl = url + '/notities'

    request.body.afgerond = false
    request.body.persoonId = 'clemozv3c3eod0bunahh71sx7'
    request.body.datum = request.body.datum + ':00Z'
    request.body.herinnering = [request.body.herinnering + ':00Z']
    // request.body.aanmelddatum = (new Date()).toISOString();
    
    postJson(url + '/notities', request.body).then((data) => {
      let newNote = { ... request.body }
      console.log(newNote);



      if (data.success) {
        response.redirect('/') 
        console.log("werkt!")
        console.log(data);
        
        // TODO: squad meegeven, message meegeven
        // TODO: Toast meegeven aan de homepagina
      } 
      
      else {
        const errormessage = `${data.message}: Mogelijk komt dit door de slug die al bestaat.`
        const newdata = { error: errormessage, values: newNote }
        console.log(data)
        console.log(JSON.stringify(data))
        response.render('index', newdata)
      }
    })
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