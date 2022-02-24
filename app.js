const proxy = require('express-http-proxy');
let app = require('express')();

if (process.env.LOGLEVEL == 'debug') {
	app.use((req, res, next) => {
		console.log(`Request to ${req.url}`);
		return next();
	});
}

app.use('/', proxy('https://monitoringapi.solaredge.com'));

const port = process.env.PORT || 80;
console.log(
	`Listening on port ${port} (this may be different depending on your docker port bindings)`
);

const server = app.listen(port);

const exitNicely = () => {
	console.info('Interrupted');
	server.close();
	process.exit(0);
};

process.on('SIGINT', exitNicely);
process.on('SIGTERM', exitNicely);
