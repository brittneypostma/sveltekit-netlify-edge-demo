import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	console.log(event.platform.context)
	const geo = event.platform.context.geo
	return {
		city: geo.city,
		region: geo.subDivision.name
	};
};