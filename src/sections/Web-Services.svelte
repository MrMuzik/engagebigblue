<script>
    import { assets } from '$app/paths';
</script>
<section class="bg-big-blue" id="local-services">
    <div class="container mx-auto py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-5">
        <div class="hidden md:flex justify-start">
            <div class="arch-container">
                <img class="rounded-full rounded-b-none" src={`${assets}/images/clothing-on-rack.jpg`} alt="Clothing Outfit" />
            </div>
        </div>
        <div class="font-sans text-big-blue text-lg md:col-span-2 lg:col-span-3">
            <h1 class="text-5xl md:text-6xl font-headline text-left text-big-coral">Website Solutions:</h1>   
            <p class="mt-5 text-big-cream">Achieve stunning, high-converting results with our custom-built websites</p>
                <ul class="list-disc list-outside ml-8 mt-5 text-big-cream">
                    <li>Static Informational Sites starting at $1,500</li>
                    <li>Shopify - E-commerce Sites starting at $5,000</li>
                </ul>
            <p class="mt-5 text-big-cream">Text Lezette at <a href="tel:9495478686">949.547.8686</a> to begin a custom quote</p>
        </div>
    </div>
</section>