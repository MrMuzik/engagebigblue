<script>
    import "../app.scss";
    import Header from '../Header.svelte';
    import Footer from '../Footer.svelte';
    import Nav from "../Nav.svelte";
</script>
<Header />
<Nav />
<main class="flex-1">
    <slot />
</main>
<Footer />