var fs = require("fs");
var path = require("path");


function PloyStore(){
    var self = this;
    self.ploies = {};
}


PloyStore.prototype.add_ploy = function(ploy){
    if(typeof ploy === "object"){
        self.ploies[ploy] = ploy.ploies;
    }else{
        throw new Error("The ploy must be object");
    }
};


PloyStore.prototype.ploy = function(name){
    var self = this;
    if(!(name in self.ploies)){
        return null;
    }
    return self.ploies.name;
};


Plrototype.prototype.load_folder = function(folder){
    var self = this;
    var tt = fs.readdirSync(folder);
    tt.forEach(function(fname, index){
        var ss = fs.readFileSync(path.join(folder, fname), 'utf8');
        self.add_ploy(JSON.parse(ss));
   });
};

