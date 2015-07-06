var fs = require("fs");
var path = require("path");
var PloyStore = require("./src/lib/ploy.js").PloyStore;
var BidEngine = require("./src/lib/bid.js").BidEngine;
var util = require("./src/lib/utils.js");
var basepath = process.cwd();
var strategy_dir = path.join(basepath, "resource/strategy");
var input_file = path.join(basepath, "resource/input/input.yaml");

var ploys = new PloyStore();
ploys.load_folder(strategy_dir);

var bidengine = new BidEngine(ploys);
var input = util.load_obj(input_file);

console.log(ploys.ploys.ipinyou[0].rules);
console.log(input);

var money = bidengine.inner_bid(input, ploys.ploys.ipinyou[0].rules);

console.log(money);

