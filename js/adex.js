var fs = require("fs");
var path = require("path");
var PloyStore = require("./src/lib/ploy.js").PloyStore;
var BidEngine = require("./src/lib/bid.js").BidEngine;
var util = require("./src/lib/utils.js");
var filter = require("./src/lib/filter.js");
var basepath = process.cwd();
var strategy_dir = path.join(basepath, "resource/strategy");
var input_file = path.join(basepath, "resource/input/input.yaml");

var ploys = new PloyStore();

