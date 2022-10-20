import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	console.log(event.platform.context)
	const geo = event.platform.context.geo
	return {
		city: geo.city,
		region: geo.subdivision.name
	};
};
/* 
context: {
  cookies: {
    delete: [Function: bound delete],
    get: [Function: bound get],
    set: [Function: bound set]
  },
  geo: {
    city: "Holland",
    country: { code: "US", name: "United States" },
    subdivision: { code: "MI", name: "Michigan" }
  },
  ip: "2600:6c4a:747f:a7c4:507c:6160:872d:7f77",
  json: [Function: bound json],
  log: [Function],
  next: [Function: next],
  requestId: "01GFTMAZHAHD5NJ26KT4H81HDF",
  rewrite: [Function: bound rewrite],
  site: {
    id: "79fa37a2-7da8-4383-952b-bb5e1aadcf9d",
    name: "statuesque-pika-5232b3",
    url: "http://statuesque-pika-5232b3.netlify.app"
  },
  account: { id: "5d260577f54c73a4f797c5e1" }
}
*/