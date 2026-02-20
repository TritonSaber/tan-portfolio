<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';

	const { children } = $props();
	let name = 'svelte';
</script>

<Navbar />

<div class="pt-4">
	{@render children()}
</div>

<Footer />

<!--+layout.svelte - for putting layout-specific content in
	all pages such as toolbar or navbars -->
