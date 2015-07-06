var fs = require("fs");
var path = require("path");
var util = require("./utils.js");


function PloyStore(){
    var self = this;
    self.ploys = {};
}


PloyStore.prototype.add_ploy = function(ploy){

    var self = this;
    if(typeof ploy === "object"){
        self.ploys[ploy.uid] = ploy.orders;
    }else{
        throw new Error("The ploy must be object");
    }
};


PloyStore.prototype.ploy = function(name){
    var self = this;
    if(!(name in self.ploys)){
        return null;
    }
    return self.ploys.name;
};


PloyStore.prototype.load_folder = function(folder){
    var self = this;
    var tt = fs.readdirSync(folder);
    tt.forEach(function(fname, index){
        var ss = path.join(folder, fname);
        self.add_ploy(util.load_obj(ss));
   });
};

exports.PloyStore = PloyStore;
