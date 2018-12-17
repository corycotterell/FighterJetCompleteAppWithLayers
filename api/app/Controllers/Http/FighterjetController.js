'use strict'

const Jet = use('App/Models/Fighterjet')
const Manufacturer = use('App/Models/Manufacturer')

class FighterjetController {

  // async getJetsByManufacturer({request, response, params:{id}}){
  //   const manufacturer = await Manufacturer.find(id)
  //   return manufacturer
  //   const fighterjets = await manufacturer.fighterjets().fetch()
  //   console.log(fighterjets)
  //   response.json({
  //     make:manufacturer.name, 
  //     jets: fighterjets,

      
  //   })
  // }
    async getFighterJets ({request, response}) {
      const fighterJet = await Jet.all()
      response.json({
        data:fighterJet

      })
    }
    async createFighterJet({request,response}){
      const {model, top_speed, primary_fire, manufacturer_id} = request.post()
      const addedJet = await Jet.create({model, top_speed, primary_fire, manufacturer_id})
      response.json({
        message: `${addedJet.model} was added to the database`
      })
    }
    async updateFighterJet({request,response,params}){
      const {id} = params
      const jets = await Jet.find(id)
      const {model, top_speed, primary_fire, manufacturer_id} = request.post()
      jets.model=model
      jets.top_speed=top_speed
      jets.primary_fire=primary_fire
      jets.manufacturer_id=manufacturer_id
      await jets.save()
      response.json({
        message:'Jet was updated to : ', 
        jet: jets
      })
    }

    async deleteFighterJetById({request, response, params}){
      const {id} = request.all()
      const jets = await Jet.find(id)
      jets.delete()
      response.json({
        message:'Fighter Jet was deleted'
      })

    }
   
}

module.exports = FighterjetController
