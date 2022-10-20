<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
</script>

<h1>Hello from {data.city}, {data.region}!</h1>