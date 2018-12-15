'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Fighterjet extends Model {
  manufacturer(){
    return this.belongsTo('App/Models/Manufacturer')
  }
}

module.exports = Fighterjet
