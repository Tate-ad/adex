var yaml = require("js-yaml");
var util = require("./src/lib/utils.js");
var PloyStore = require("./src/ploys/ploystore.js").PloyStore;
var Engine = require("./src/engine/bid.js").Engine;
var input_file = "res/input/input.yaml";
var strategy_folder = "res/strategy";
var input = util.load_obj(input_file);
var $ = require("jquery");


var ps = new PloyStore();
var eng = new Engine(ps);
eng.init(strategy_folder);
var bid_result = eng.bid(input);

$(document).ready(function(){
    $("#sts").attr("src", bid_result.mid);
    $("textarea").val("mid:"+bid_result.mid+"\n"+"price:"+bid_result.final_price);
});
