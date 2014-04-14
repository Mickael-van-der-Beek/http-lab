var Socket = require('./socket')
  , print = require('../utils/print')
  , net = require('net')
  , is = require('../utils/is');

function Server (config) {

	config = config || {};

	this.setEnv(config.env);

	this.setPort(config.port);

	this.setHost(config.host);

	this.server = net.createServer(config.tcp);

	this.setErrorHandler();

	this.setConnectionHandler(config);

	this.setListeningHandler();

	this.setCloseHandler();

	this.listen();

}

Server.prototype.setEnv = function (env) {
	if(process.env.NODE_ENV) {
		this.env = process.env.NODE_ENV;
	}
	else {
		this.env = env || 'development';
	}
};

Server.prototype.setPort = function (port) {
	if(this.env === 'production') {
		this.port = 80;
	}
	else {
		this.port = is.Number(port) ? port : 8000;
	}
};

Server.prototype.setHost = function (host) {
	if(this.env === 'production') {
		this.host = undefined;
	}
	else {
		this.host = host || '127.0.0.1';
	}
};

Server.prototype.setErrorHandler = function () {
	var me = this;
	this.server.on('error', function (error) {
		if(error.code === 'EADDRINUSE') {
			print('red', '\n[Server:EADDRINUSE] Another service already listens on ' + me.port + '.');
		}
		else if(error.code === 'ECONNRESET') {
			print('red', '\n[Server:ECONNRESET] A client hung up or timed-out.');
		}
		else if(error.code === 'ECONNREFUSED') {
			print('red', '\n[Server:ECONNREFUSED] Node.js has not sufficient rights to run.');
		}
		else {
			print('red', '\n[Server:' + error.code + '] ' + error);
		}
		print('red', error.stack);
		me.server.close();
	});
};

Server.prototype.setConnectionHandler = function (config) {
	var me = this;
	this.server.on('connection', function (socket) {
		new Socket(config.socket, socket);
	});
};

Server.prototype.setListeningHandler = function () {
	var me = this;
	this.server.on('listening', function () {
		print('green', '\n[Server:listening] The server is listening on port ' + me.port);
	});
};

Server.prototype.setCloseHandler = function () {
	var me = this;
	this.server.on('close', function () {
		print('green', '\n[Server:close] The server closed.');
		me.listen();
	});
};

Server.prototype.listen = function () {
	this.server.listen(this.port, this.host);
};

module.exports = Server;