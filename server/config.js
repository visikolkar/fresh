var cfg = {};

// HTTP port to run our server application
cfg.port = process.env.PORT || 3000;

// A random string that will hell generate secure one-time pasword and HTTP sessions
cfg.secret = process.env.APP_SECRET || 'keyboard cat';

//Twilio account details

cfg.accountSid = process.env.TWILIO_ACCOUNT_SID;
cfg.authToken = process.env.TWILIO_AUTH_TOKEN;
cfg.twilioNumber = process.env.TWILIO_NUMBER;

// AUTHY application details

cfg.authyKey = process.env.AUTHY_API_KEY;

//MongoDB connection string - MONGO_URL is for the local dev,
// MONOGLAB_URI is for the MongoLab addon for the Heroku dev
cfg.mongoUrl = process.env.MONOGLAB_URI || process.env.MONGO_URL;

//Export the configuration object
module.export = cfg;
