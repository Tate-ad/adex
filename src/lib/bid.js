var fs = require("fs");
var filter = require("./filter.js");

function BidEngine(ploystore, folder){
    var self = this;
    self.ploy_bid = ploystore;
    self.init(folder);
}


BidEngine.prototype.init = function(folder){
    var self = this;
    self.ploy_bid.load_folder(folder);
};


BidEngine.prototype.filter = function(input, rules){
    var self = this;
    rules.forEach(function(item, index){

    });
};
