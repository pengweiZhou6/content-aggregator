const express = require('express');
const CompanyService = require('../services/CompanyService');
const { body, validationResult } = require('express-validator');
const { validateRole } = require('../utils/ValidateRole');
const role = require('../constants/role');
const router = express.Router();
const passport = require('passport');
require('../passport')();

router.get('/', passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const companyService = new CompanyService();
        try {
            return res.send({ companies: await companyService.getCompanies() });
        } catch (e) {
            return next(e);
        }
    }
);

router.post('/', [
        body('company').exists().isString(),
        body('company').trim().isLength({ min: 1 }).withMessage('Company name is required.')
    ], passport.authenticate('jwt', { session: false }),
    validateRole([role.ADMIN]),
    async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

        const companyService = new CompanyService();
        try {
            await companyService.addCompany(req.body.company);
            return res.send();
        } catch (e) {
            res.status(400).send('Company exists.');
            return next(e);
        }
    }
);

router.delete('/:id', passport.authenticate('jwt', { session: false }),
    validateRole([role.ADMIN]),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const companyService = new CompanyService();
        try {
            const companyDeleted = await companyService.deleteCompany(req.params.id);
            if (companyDeleted < 1) return res.status(404).send('Company not found.');
            return res.send();
        } catch (e) {
            return next(e);
        }
    }
);

module.exports = router;
