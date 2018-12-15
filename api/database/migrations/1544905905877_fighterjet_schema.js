'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FighterjetSchema extends Schema {
  up () {
    this.create('fighterjets', (table) => {
      table.increments()
      table.string("model")
      table.string("top_speed")
      table.string("primary_fire")
      table.integer("manufacturer_id")
      table.timestamps()
    })
  }

  down () {
    this.drop('fighterjets')
  }
}

module.exports = FighterjetSchema
