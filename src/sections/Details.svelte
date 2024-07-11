<script>
	import SeePlansLink from "../components/See-Plans-Link.svelte";
</script>
<section class="bg-big-coral" id="details">
    <div class="container mx-auto py-20">
        <div class="uppercase text-center font-sans text-base md:text-lg">Intuitive, straightforward services perfectly suited to your business</div>
        <div class="text-3xl md:text-6xl font-serif mt-4 text-big-blue text-center">No more wrestling with tech or grappling with faceless, generic solutions. </div>
        <div class="mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 mt-10 md:mt-20">
            <div class="text-center flex flex-col gap-5">
                <i class="fa-solid fa-check-to-slot text-big-teal text-5xl"></i>
                <p class="text-lg">Subscribe and submit<br><em>unlimited requests</em>.</p>
            </div>
            <div class="text-center flex flex-col gap-5">
                <i class="fa-solid fa-paintbrush text-big-teal text-5xl"></i>
                <p class="text-lg">Requests are fulfilled within<br><em>2 business days on average</em>.</p>
            </div>
            <div class="text-center flex flex-col gap-5">
                <i class="fa-solid fa-moon text-big-teal text-5xl"></i>
               <p class="text-lg">Unlimited revisions until you're<br><em>100% satisfied</em>.</p>
            </div>
        </div>
        <SeePlansLink background="bg-big-teal" />
    </div>
</section>