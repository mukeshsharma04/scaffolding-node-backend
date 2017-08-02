const baseModel = require("./../models/base");

let baseController = {
    test : function () {
        let get_mode = baseModel.testMod();
        return `I am from controller and i got Model : ${get_mode}`;
    }
};

module.exports = baseController;


