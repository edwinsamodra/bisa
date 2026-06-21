/**
 * Welcome to Cloudflare Workers! This is your BISA worker.
 *
 * - Run `npm run dev:worker` in your terminal to start a local development server
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		return new Response("Hello from BISA Worker!");
	},
};
