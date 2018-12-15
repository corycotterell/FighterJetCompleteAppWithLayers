'use strict'

/*
|--------------------------------------------------------------------------
| ManufacturerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Manufacturer = use('App/Models/Manufacturer')
class ManufacturerSeeder {
  async run () {
    await Manufacturer.create({name: "General Dynamics", location: "Falls Church, VA", fighter_jet_id:1}) 
    await Manufacturer.create({name: "Boeing", location: "Seattle, WA", fighter_jet_id:2})
    await Manufacturer.create({name: "McDonnell Douglas", location: "St. Louis, MO", fighter_jet_id:3}) 
 
  }
}

module.exports = ManufacturerSeeder
