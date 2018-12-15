'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Manufacturer extends Model {
  fighterjets(){
    return this.hasMany("App/Models/Fighterjet")
  }
}

module.exports = Manufacturer
