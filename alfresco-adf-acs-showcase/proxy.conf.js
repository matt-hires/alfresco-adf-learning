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
        changeOrigin: true,
        bypass: function (req, res, proxyOptions) {
            req.headers["origin"] = proxyOptions.target;
        },
        logLevel: 'debug',
        logProvider: logProvider
    },
};
