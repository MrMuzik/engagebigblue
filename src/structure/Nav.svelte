<script>
import { page } from '$app/stores';
$: path = $page.url.pathname;
</script>
<nav class="bg-big-teal sticky top-0 shadow main-nav">
    <div class="container mx-auto overflow-x-auto">
        <div class={`flex gap-5 ${path === '/' ? 'md:items-center md:justify-center' : 'items-center justify-center'}`}>
            {#if path === '/'}
                <div class="flex items-center justify-center">
                    <a class="hover:text-big-blue p-5 whitespace-nowrap" href="#how-it-works">How It Works</a>
                </div>
                <div class="flex items-center justify-center">
                    <a class="hover:text-big-blue p-5 whitespace-nowrap" href="#member-perks">Member Perks</a>
                </div>
                <div class="flex items-center justify-center">
                    <a class="hover:text-big-blue p-5 whitespace-nowrap" href="#services">Services</a>
                </div>
                <div class="flex items-center justify-center">
                    <a class="hover:text-big-blue p-5 whitespace-nowrap" href="#plans">Plans</a>
                </div>
                <div class="flex items-center justify-center">
                    <a class="hover:text-big-blue p-5 whitespace-nowrap" href="#faq">FAQ</a>
                </div>
            {:else}
                <div class="flex items-center justify-center">
                    <a class="hover:text-big-blue p-5 whitespace-nowrap" href="/">
                        <i class="fa-solid fa-left-long mr-2"></i> Back to Home
                    </a>
                </div>
            {/if}
        </div>
    </div>
</nav>
