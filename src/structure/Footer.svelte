<script>
    import { page } from '$app/stores';
    const currentYear = new Date().getFullYear();
    $: path = $page.url.pathname;
</script>
<footer class="bg-big-teal">
    <div class="container mx-auto p-4 text-center">
        <div class="flex items-center justify-center gap-5">
            <div class="flex items-center justify-center">
                <a href="/privacy-policy" class="text-sm text-primary hover:text-big-cream">Privacy Policy</a>
            </div>
            <div class="flex items-center justify-center">
                <a href="/terms-conditions" class="text-sm text-primary hover:text-big-cream">Terms and Conditions</a>
            </div>
        </div>
        <small class="text-sm text-primary">&copy; {currentYear} Park Properties, LLC. <span class="uppercase">All Rights Reserved.</span></small>
    </div>
</footer>