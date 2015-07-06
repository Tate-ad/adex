var fs = require("fs");


function BidEngine(ploystore){
    var self = this;
    self.ploy_bid = ploystore.ploys;
}


BidEngine.prototype.inner_bid = function(input, rules){

    var floor = input.device.floor;
    var sence = input.sence;

    if(!(rules instanceof Array)){
        throw new Error("The rules must bu array");
    }

    rules.forEach(function(item, index){
        if(item.required){
            if(sence[item.match] == item.value){
                floor += item.price;
            }
        }
    });
    
    return floor;
};


exports.BidEngine = BidEngine;
