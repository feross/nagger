import childProcess from 'child_process';
import test from 'ava';

test.cb(t => {
	childProcess.execFile('./index.js', {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout.trim().length >= 0);
		t.end();
	});
});
