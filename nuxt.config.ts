// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: [
					// automatically imports `defineStore`
					'defineStore', // import { defineStore } from 'pinia'
					// automatically imports `defineStore` as `definePiniaStore`
					['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
				],
			},
		],
	],
	css: [
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css',
	],
	build: {
		transpile: ['vuetify'],
	},
});
