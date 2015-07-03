var fs = require("fs");

var PloyStore = require("./src/lib/ploy.js").PloyStore;

var ploys = new PloyStore();

ploys.load_folder("/home/tate/project/node/node_webkit/adex/strategy");

console.log(ploys.ploys);
