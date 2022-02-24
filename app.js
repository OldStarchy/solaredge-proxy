var proxy = require('express-http-proxy');
var app = require('express')();

if (process.env.LOGLEVEL == 'debug') {
	app.use((req, res, next) => {
		console.log(`Request to ${req.url}`);
		const result = next();

		console.log(res.statusCode);
		return result;
	});
}

app.use('/', proxy('https://monitoringapi.solaredge.com', {}));

const port = process.env.PORT || 80;
console.log(`Listening on port ${port}`);
app.listen(port);
