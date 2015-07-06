var yaml = require("js-yaml");
var util = require("./lib/utils.js");
var PloyStore = require("./ploys/ploystore.js").PloyStore;
var Engine = require("./engine/bid.js").Engine;
var input_file = "/home/tate/project/node/node_webkit/adex/res/input/input.yaml";
var input = util.load_obj(input_file);

var ps = new PloyStore();
var eng = new Engine(ps);

eng.init("/home/tate/project/node/node_webkit/adex/res/strategy");
var ipinyou = eng.ploystore.ploys;
var rules = ipinyou.rules;

console.log(eng.bid(input));
