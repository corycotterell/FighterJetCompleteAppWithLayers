'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/test', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.get('/findManufacturer/:id', 'FighterjetController.getJetsByManufacturer')
Route.get('/jets', 'FighterjetController.getFighterJets')
Route.post('/create', 'FighterjetController.createFighterJet')
Route.put('/update/:id', "FighterjetController.updateFighterJet")
Route.delete('/delete/:id', 'FighterJetController.deleteFighterJetById')