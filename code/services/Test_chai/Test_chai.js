function Test_chai(req, resp){
    
    if(typeof chai === 'object'){
        if(Object.getOwnPropertyNames(chai).length === 0){
            log("False");
            resp.error("False");
        } else{
            log("True");
            resp.success("True");
        }

    } else if(typeof chai === 'function'){
        var tempPropObj = Object.getOwnPropertyNames(chai);
        if (chai.prototype && typeof chai.prototype.constructor  === 'function'){
            log("True");
            resp.success("True");
        } else {
            log("False");
            resp.error("False");
        }
    }

}
