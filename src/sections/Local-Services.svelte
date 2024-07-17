<script>
    import { assets } from '$app/paths';
</script>
<section id="local-services">
    <div class="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
        <div class="hidden md:flex justify-start">
            <div class="arch-container">
                <img class="rounded-full rounded-b-none" src={`${assets}/images/clothing-outfit.jpg`} alt="Clothing Outfit" />
            </div>
        </div>
        <div class="font-sans text-big-blue text-lg lg:col-span-2">
            <h1 class="text-5xl md:text-6xl font-headline text-left text-big-blue">Local Services in South Shore:</h1>   
            <p class="mt-5">If you're located in the South Shore of Massachusetts, we offer specialized local services, including:</p>
                <ul class="list-disc list-outside ml-8 mt-5">
                    <li>Merchandising</li>
                    <li>E-commerce Inventory Management</li>
                    <li>Social Media Content Creation</li>
                </ul>
            <p class="mt-5">Text Lezette at <a href="tel:9495478686">949.547.8686</a> to learn more</p>
        </div>
    </div>
</section>