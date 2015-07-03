var path = require("path");
var fs = require("fs");
var yaml = require("js-yaml");


exports.load_obj = function(fname) {
    ext = path.extname(fname);
    if((ext ===".yaml") || (ext === ".yml")){
        return yaml.safeLoad(fs.readFileSync(fname, "utf8"));
    }else if(ext === ".json"){
        return JSON.parse(fs.readFileSync(fname, "utf8"));
    }
    throw new Error("unkown file format");
};
