import { defaultMaxListeners } from "koa";

require('dotenv').config();

const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = process.env;

const apiKey = MAILGUN_API_KEY;
const domain = MAILGUN_DOMAIN;

let mailgun: any;

if (apiKey && domain) {
  mailgun = require('mailgun-js')({ apiKey, domain });
}

const mailer = {
  send: (data: any) => {
    if (!mailgun) {
      return;
    }
    mailgun.messages().send(data, function (error: Error, body: any) {});
  }
}

export default mailer;
