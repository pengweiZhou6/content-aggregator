const StreamParsingService = require('./StreamParsingService');
const MailService = require('./MailService');
const cron = require('node-cron');

class ScheduleService {
    async schedule() {
        try {

            // const spService = new StreamParsingService();
            // spService.parseStreams();
            // const mailService = new MailService();
            // mailService.sendMail(1);
            cron.schedule('0 * * * *', () => { // every hour
                const spService = new StreamParsingService();
                spService.parseStreams();
            });
            cron.schedule('0 9 * * 1', () => { // every Monday at 9 am
                const mailService = new MailService();
                mailService.sendMail(7);
            });
            cron.schedule('0 9 * * *', () => { // every day at 9 am
                const mailService = new MailService();
                mailService.sendMail(1);
            });

        } catch (e) {

            // handle errors here

        }
    }
}

module.exports = ScheduleService;

// Reference: https://crontab.guru/
