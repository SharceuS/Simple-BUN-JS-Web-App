// index.ts

export default {
	port: 3000,
	fetch(request: Request) {
		return new Response("Hello World! :)");
	},
};

// bun ./index.ts
