var fs = require("fs");
var util = require("./utils.js");
var input = util.load_obj("/home/tate/project/node/node_webkit/adex/strategy/input.yaml");


function BidEngine(ploystore){
    var self = this;
    self.ploy_bid = ploystore;
}


BidEngine.prototype.algo_sample = function(input){
    for(var item in input){
        console.log(x);
    }
};
