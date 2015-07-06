/*
* # The rules filter
*  
* # yongtao.fan@adleida.com
*/

exports.between_range = function (number, array_obj){

    if((typeof number != "number") || !(Array.isArray(array_obj))){
        return false;
    }

    if((typeof array_obj[0] != "number") || (typeof array_obj[1] != "number")){
        return false;
    }

    if((array_obj[0] > array_obj[1]) || (array_obj.length != 2)){
        return false;
    }

    return (number >= array_obj[0]) && (number <= array_obj[1]);
};


exports.in_region = function (reg, array_regions) {
    if((typeof reg != "string") || !(Array.isArray(array_regions))){
        return false;
    }
    for(var tt=0;tt<array_regions.length;tt++){
        if(array_regions[tt] === reg){
            return true;
        }
    }
    return false;
};
