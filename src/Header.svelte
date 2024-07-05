<script>
    import { assets } from '$app/paths';
</script>

<header class="container mx-auto">
    <div class="grid grid-cols-3 my-2">
        <div class="flex items-center justify-start">
            <nav class="border-y border-solid border-gray-500 py-2">
                <!-- Placeholder for social icons -->
                <!-- <a class={`text-base font-headline hover:font-bold ${path === '/resume' ? 'active' : ''}`} href="/resume">Resume</a> -->
            </nav>
        </div>
        <div class="flex items-center justify-center">
            <a class="font-brandname text-2xl lg:text-3xl whitespace-nowrap hover:underline" href="/">
                <img class="w-80" src={`${assets}/images/Big-bLUE-tEXT-lOGO.png`} alt="Big Blue Media Logo" />
            </a>
        </div>
        <div class="flex items-center justify-end text-base font-headline">
            <nav class="">
                <!-- Placeholder for login link -->
                <!-- <a class="" href="https://www.instagram.com/muzik702/" target="_blank">
                    <img class="h-6 w-6" src={`${assets}/images/instagram.svg`} alt="Bryan Markham (@muzik702) - Instagram" />
                </a> -->
            </nav>
        </div>
    </div>
</header>