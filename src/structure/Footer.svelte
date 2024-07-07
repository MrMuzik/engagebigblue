<script>
    import { page } from '$app/stores';
    const currentYear = new Date().getFullYear();
    $: path = $page.url.pathname;
</script>
<footer class="bg-gray-200">
    <div class="container mx-auto p-4 text-center">
        <small class="text-sm">&copy; {currentYear} Park Properties, LLC</small>
    </div>
</footer>