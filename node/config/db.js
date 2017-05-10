var monk = require('monk');
var db = monk('mongodb://tori-team-admin:agfq$Rd_B_X7V5Y-@ds153719.mlab.com:53719/tori-team');

module.exports = db;