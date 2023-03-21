import { sveltekit } from '@sveltejs/kit/vite';
import * as path from 'path'
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimizeDeps: {
        include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
      },
    resolve:{
      alias:[{find: '@',replacement: path.resolve(__dirname,'src')}]
    }
};

export default config;
