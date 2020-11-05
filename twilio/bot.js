const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const authPhone = process.env.TWILIO_PHONE_NUMBER;
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);
const { getTwilioReminder } = require('../controllers/events');;

function processDataToPost(events) {
  console.log('events:', events)
  // Promise.all(
    return events.map((event) => {
      const { phone_number, name, event_date, username } = event;
      const datetime = String(event_date).split(' ');
      const time = datetime[4].split(':');
      const date = `${datetime[0]}, ${datetime[1]} ${datetime[2]} ${datetime[3]}`;
      const appointment_time = `${time[0]}:${time[1]}`;
      const message = `${username}, you have an ${name} at ${appointment_time}`;      
      return client.messages.create({
        body: message,
        from: `${authPhone}`,
        to: phone_number
      })
    })//)
      .then((msg) => {
        console.log(msg.sid)
      })
      .catch((err) => {
        console.error(err)
      })
}


const minute = 240 / 60;

const sendReminderToEmp = () => {
  setInterval(() => {
    getTwilioReminder()
      .then((data) => {
        data && processDataToPost(data);
      })
      .catch((e) => console.log('error', e));
  }, minute * 60000);
};

module.exports = {
  sendReminderToEmp,
}