const CompanyService = function () { }
const Company = require('../models/Company');

CompanyService.prototype.getCompanies =  async function () {
    return Company.findAll();
}

CompanyService.prototype.addCompany = async function (company) {
    return Company.create({
        name: company
    });
}

CompanyService.prototype.deleteCompany = async function (companyId) {
    return Company.destroy({
        where: {
            id: companyId
        }
    });
}

module.exports = CompanyService;