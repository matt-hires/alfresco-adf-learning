const { env } = require('process');
var winston = require('winston');

function logProvider() {
    return winston.createLogger({
        level: 'debug',
        format: winston.format.combine(
            winston.format.splat(),
            winston.format.simple()
        ),
        transports: [new winston.transports.Console()],
    });
}

module.exports = {
    "/alfresco": {
        target: env.HOST_NAME,
        secure: false,
        changeOrigin: false,
        logLevel: 'debug',
        logProvider: logProvider,
        headers: {
            "Origin": env.HOST_NAME
        }
    },
};
