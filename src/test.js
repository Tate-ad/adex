var PloyStore = require("./lib/ploy.js").PloyStore;

var addon = require("./lib/cpp/build/Release/addon");

var ploystore = new PloyStore();


ploystore.load_folder("/home/tate/project/node/node_webkit/adex/strategy");

console.log(ploystore);
console.log(addon.hello());
