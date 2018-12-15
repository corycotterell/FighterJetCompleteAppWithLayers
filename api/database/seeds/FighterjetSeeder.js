'use strict'

/*
|--------------------------------------------------------------------------
| FighterjetSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Jet = use('App/Models/Fighterjet')
class FighterjetSeeder {
  async run () {
    await Jet.create({model: 'F-111 Aardvark', top_speed: "500", primary_fire: "pew pew pew", manufacturer_id: 1})
    await Jet.create({model: 'F-11 knob goblin', top_speed: "503", primary_fire: "shooty gun", manufacturer_id: 3})
    await Jet.create({model: 'F-12 turkey gobbler', top_speed: "520", primary_fire: "pow pow pow", manufacturer_id: 2})
  }
}

module.exports = FighterjetSeeder
