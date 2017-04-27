/**
 * Created by olli on 15.04.2017.
 */

var functions = {};
var feedback ={};


exports.connector = function (funct, param){
    try {
        feedback = functions[funct] (param)
    }
    catch(err){
        console.log("Error"+ err)
    }
};

functions.textout= function(text){

    console.log(text)
    console.log(subscribers.callers.name["AZTest"].type);


};
