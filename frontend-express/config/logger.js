
//const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;


// define the custom settings for each transport (file, console)
const options = {
  console: {
    level: 'debug',
    //format: winston.format.json(),
    format: combine(
      timestamp(),
      format.json()
    ),
    handleExceptions: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
//const logger = winston.createLogger({
const logger = createLogger({
  transports: [
    //new winston.transports.Console(options.console)
    new transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

module.exports = logger;