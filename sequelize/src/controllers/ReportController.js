const { Op } = require('sequelize')
const User = require('../models/User')
module.exports={


  async show(request, response){
// Encontrar todos usuarios que tenham o email final @Rocketseat
// Desse Usuario eu quero buscar todos que moram na rua tal
// Desses Usuarios quero lista todos que trabalham com techs que começa com 'React'
  
    const user = await User.findAll({
      attributes: [ 'name', 'email'],
      where:{
        email: { 
          [Op.iLike]: '%rocketseat.com.br',
        },
      },
      include: [ 
        { association: 'addresses', where:{ street: 'rua begamoto'}},
        { association: 'techs',
        required: false,
          where: {
            name:{
              [Op.iLike]: 'react%',

            }
          },
      }
      ]
    })
        return response.json(user)
  }



}