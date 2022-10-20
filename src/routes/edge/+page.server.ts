import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	console.log(event.platform.context)
	return {
		edge: event.platform.context.geo.city
	};
};