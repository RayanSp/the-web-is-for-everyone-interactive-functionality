> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Vinimini product overzicht

<img width="1440" alt="Schermafbeelding 2023-04-05 om 11 49 18" src="https://user-images.githubusercontent.com/112861069/230044347-5cb46ce5-b079-495f-8a3e-c1b21e120c5f.png">




## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## 📝Beschrijving
Website gemaakt met Express, NODE en EJS. Op deze website kan je een notitie aanmaken voor jezelf, dit zouden je ervaringen kunnen zijn maar ook reminders. 


## ✅Kenmerken

🛠 Tools
 - VSC
 - Brave 


👷🏽 Technieken 
 - EJS

EJS is een template taal die HTML genereert. In dit project worden aparte EJS-bestanden omgezet HTML, dit wordt gedaan met een simpele regel code.
`<%- include('./partials/head') %>` en voor de footer `<%- include('./partials/footer') %>`

 - Node Js

Met node zorg je ervoor dat Javascript aan de server-side gebruikt wordt ipv de client-side. Met HTTP requests en responses worden API's opgehaald en aangetoond op je website. 

 - Express

Met express wordt de route van de data geregeld die wordt opgehaald. 

 - EJS
 - CSS


## 💻Installatie
 - Dit project kan geforked worden, dit doe je door rechtsboven op fork te drukken. 
 - .gitignore wordt gebruikt zodat niet alle packages gecommit worden. 
 - Met NPM install laadt je alle packages
 - Met NPM start open je dit project in een localhost door de startersscript die ik gebruik in package.json 

## 🔨Gebruik
De website heeft een formulier, waar je in een textarea een notitie voor jezelf kan opschrijven. Van deze notitie krijg je een reminder. Deze notities zou de gebruiker kunnen gebruiken om ervaringen te noteren. 

Live link naar de website: 
https://zealous-clam-scarf.cyclic.app/

## 📱Bronnen
 - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local
 - https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
 - https://caniuse.com/?search=datetime-local%20
 - https://www.npmjs.com/package/nodemon 


## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
