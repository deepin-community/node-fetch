import {builtinModules} from 'node:module';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import fs from 'fs';
const pkg = JSON.parse(fs.readFileSync(process.env.PWD+'/package.json').toString());
if(!pkg.dependencies) pkg.dependencies={};

const config = {
	input: process.env.PWD+'/src/index.js',
	output: [{
		format: 'cjs',
		dir: 'cjs',
		preferConst: true,
		interop: 'auto',
		freeze: false,
		strict: false
	}],
	external: [
		...builtinModules,
	],
	plugins: [
		commonjs(),
		nodeResolve({
			modulePaths: [process.env.PWD, '/usr/share/nodejs'],
		}),
	],
}

export default config;
