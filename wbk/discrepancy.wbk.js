require("../less/common/common.less");
require("../less/discrepancy.less");
require("../lib/less/kkpager/orange.less");

var angular = require("angular");
var jquery = require("jquery");
var webapp = require('../js/webapp.js')(angular,jquery);

require('../js/services/discrepancy.service.js')(webapp);
require('../js/controllers/discrepancy.controller.js')(webapp , jquery);