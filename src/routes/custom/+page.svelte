<script lang="ts">
	async function getEdgeData() {
		const response = await fetch('/location');

		const geoData = await response.json();
		return geoData;
	}
</script>

<main>
	<h1>Welcome to SvelteKit</h1>
	<h2>Netlify Edge Geolocation data:</h2>
	{#await getEdgeData()}
		<section>
			<p><strong>Location</strong>: ...</p>
		</section>
	{:then { city, country }}
		<section>
			<p><strong>Location</strong>: {city}, {country}</p>
		</section>
	{/await}
</main>