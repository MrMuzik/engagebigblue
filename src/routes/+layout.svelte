<script>
    import "../app.scss";
    import Header from '../structure/Header.svelte';
    import Footer from '../structure/Footer.svelte';
    import Nav from "../structure/Nav.svelte";
</script>
<Header />
<Nav />
<main class="flex-1">
    <slot />
</main>
<Footer />