const Adress = require('../models/Address')
const User = require('../models/User')
module.exports = {

async index(request, response){
    const { user_id} = request.params

  const user = await User.findByPk(user_id, { 
    include: {  association: 'addresses'}
  })


    return response.json(user)
    //return response.json(user.addresses) apenas os addresses
},

  async store(request, response){
    const { user_id } =request.params
    const { zipcode, street, number } = request.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return response.status(400).json({ error: 'User not Found'})
    }

    const address = await Adress.create({
      zipcode,
      street,
      number,
      user_id,
    })
return response.json(address)

  }


}