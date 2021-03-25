const SettingService = function () { }
const Setting = require('../models/Setting');

SettingService.prototype.getSetting =  async function () {
    return Setting.findAll();
}

SettingService.prototype.addSetting = async function (settingName, settingValue) {
    return Setting.create({
        name: settingName,
        value: settingValue
    });
}

SettingService.prototype.deleteSetting = async function (settingName) {
    return Setting.destroy({
        where: {
            name: settingName
        }
    });
}

SettingService.prototype.updateSetting = async function (settingName, settingValue) {
    return Setting.update({
        value: settingValue
    },{
        where: {
            name: settingName
        }
    });
}

module.exports = SettingService;