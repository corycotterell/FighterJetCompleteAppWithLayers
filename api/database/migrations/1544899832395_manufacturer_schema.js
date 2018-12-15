'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ManufacturerSchema extends Schema {
  up () {
    this.create('manufacturers', (table) => {
      table.increments()
      table.string('name')
      table.string('location')
      table.integer('fighter_jet_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('manufacturers')
  }
}

module.exports = ManufacturerSchema
