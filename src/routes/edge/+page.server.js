export async function load(event) {
	console.log(event.platform);
	return {
		edge: 'Living on the edge'
	};
}
