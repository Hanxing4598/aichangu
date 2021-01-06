require("../less/common/common.less");
require("../less/position.less");
require("../lib/less/kkpager/orange.less");

var angular = require("angular");
var jquery = require("jquery");
var webapp = require('../js/webapp.js')(angular,jquery);

require('../js/services/closePosition.service.js')(webapp);
require('../js/controllers/closePosition.controller.js')(webapp , jquery);
require('../lib/js/kkpager/kkpager.js')(webapp);