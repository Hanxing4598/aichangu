require("../less/common/common.less");
require("../less/editPwd.less");
require("../lib/less/kkpager/orange.less");

var angular = require("angular");
var jquery = require("jquery");
var webapp = require('../js/webapp.js')(angular,jquery);

require('../js/services/editPwd.service.js')(webapp);
require('../js/controllers/editPwd.controller.js')(webapp , jquery);