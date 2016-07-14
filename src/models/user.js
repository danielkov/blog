var BaseModel = require('./userbase');

module.exports = BaseModel.extend({
   urlRoot: 'api/user',

   props: {
      username: ['string', true, ''],
      profile_pic: ['string', true, ''],
      email: ['string', true, ''],
      access_level: ['number', true, 0],
   },

   session:{
      logged_in: ['boolean', true, false],
      token: ['string']
   },

   
});
