// Import the required packages
require("dotenv").config();
const EpnsSDK = require("@epnsproject/backend-sdk-staging").default;

// Define the parameters we would need in order to initialize the SDK
// eslint-disable-next-line turbo/no-undeclared-env-vars
const CHANNEL_PK = process.env.METAMASK_PRIV_KEY;

console.log({ CHANNEL_PK });

// Initialise the SDK
const epnsSdk = new EpnsSDK(CHANNEL_PK);

// const recipients = "0x15900c698ee356E6976e5645394F027F0704c8Eb";
const pushNotificationTitle = "Mail from axit.eth";
const pushNotificationBody = "This should work";
const notificationTitle = "notificationTitle";
const notificationBody = "notificationBody";
const notificationType = 3;
// const link = "http://localhost:3000";

const sendEpnsNotif = async (body) => {
  const response = await epnsSdk.sendNotification(
    body.recipient, //the recipients of the notification
    pushNotificationTitle, // push notification title
    pushNotificationBody, //push notification body
    notificationTitle, //the title of the notification
    notificationBody, //the body of the notification
    notificationType, //1 - for broadcast, 3 - for direct message, 4 - for subset.
    body.link //the CTA of the notification, the link which should be redirected to when they click on the notification
  );

  console.log({ response });
  return response;
};

module.exports = sendEpnsNotif;
