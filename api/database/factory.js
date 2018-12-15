'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Fighterjet', (faker, data) => {
  return {
    model: data.model,
    top_speed: data.top_speed,
    primary_fire: data.primary_fire,
    manufacturer_id: data.manufacturer_id
  }
})

Factory.blueprint('App/Models/Manufacturer', (faker, data) => {
  return {
    name: data.name,
    location: data.location
  }
})
