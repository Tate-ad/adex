/*
* Created: Tate_fan
*/

var PloyStore = require("../ploys/ploystore.js").PloyStore;
var tool = require("../lib/filter.js");
var _ = require("underscore");
var ploystroe = new PloyStore();


function  Engine(ploystroe){
    var self = this;
    self.ploystore = ploystroe;
}


Engine.prototype.init = function (folder) {
    var self = this;
    self.ploystore.load_folder(folder);
};


Engine.prototype.bid_cell = function (sence, rules){
    var bid_price = 0;
    rules.forEach(function(item, index){
        for(var key in item){
            if(sence[key] !== item[key]){
                if(item.required){
                    break;
                }
                continue;
            }else{
               bid_price += item.price;
            }
        }
    });
    return bid_price;
};


Engine.prototype.bid_cell_i = function (input, order){
    var self = this;
    var device = input.device; 
    var floor = device.property.floor;
    if(!tool.in_region(device.property.region, order.regions)){
        return floor; 
    }
    var final = self.bid_cell(input.sence, order.rules);
    return floor + final;
};


Engine.prototype.bid_inner = function(input, orders){
    var self = this;
    var arr = [];
    orders.forEach(function(item, index){
        var tmp = {};
        tmp.mid = item.mid;
        tmp.final_price = self.bid_cell_i(input, item);
        arr.push(tmp);
    });
    return _.max(arr, function(tt){
        return tt.final_price;
    });
};


Engine.prototype.bid = function(input){
    var self = this;    
    var tmp = [];
    for(var uid in self.ploystore.ploys){
        tmp.push(self.bid_inner(input, self.ploystore.ploys[uid]));
    }
    return _.max(tmp, function(tt){
        return tt.final_price;
    });
};


exports.Engine = Engine;
