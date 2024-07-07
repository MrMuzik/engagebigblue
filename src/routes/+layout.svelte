<script>
    import "../app.scss";
    import Header from '../structure/Header.svelte';
    import Footer from '../structure/Footer.svelte';
</script>
<Header />
<main class="flex-1">
    <slot />
</main>
<Footer />