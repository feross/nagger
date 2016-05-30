#!/usr/bin/env node

'use strict';

const boxen = require('boxen');
const colors = require('colors');
const http = require('http');

const url = 'http://nodejs.org/dist/latest/SHASUMS256.txt';
const currentVersion = process.versions.node;

http.get(url, res => {
	let body = '';
	res.on('data', chunk => {
		body += chunk;
	});

	res.on('end', () => {
		let latestVersion = /node-v(\d+\.\d+\.\d+)/.exec(body);
		latestVersion = latestVersion && latestVersion[1];

		const currentMessage = colors.green.bold(` Current : ${currentVersion}`);
		const latestMessage = colors.cyan.bold(` Latest : ${latestVersion}`);

		if (latestVersion) {
			if (latestVersion !== currentVersion) {
				console.log(colors.red.bold(boxen(colors.red.bold(` WARNING: Installed Node version is out-of-date \n\n${currentMessage}                ${latestMessage}`))));
			}
			if (latestVersion === currentVersion) {
				console.log(colors.green(colors.cyan.bold(`\n Congrats! You are using the latest version of nodejs. \n`)));
			}
		} else {
			console.log('rishi');
		}
	});
}).on('error', err => {
	console.log(colors.red.bold('\n Nagger couldn\'t connect to nodejs.org to get the latest version.\n'));
	process.exit(1);
	console.error(err);
});
