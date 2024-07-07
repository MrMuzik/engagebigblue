<script>
    import Testimonial from "../components/Testimonial.svelte";
    import SeePlansLink from "../components/See-Plans-Link.svelte";
    // Testimonials data
    const susan = {
        name: "Susan",
        title: "Game Changer",
        business: "Susan Miller Fine Art",
        icon: "fa-solid fa-comments",
        quote: "As someone who's always shied away from tech, finding a service that handled all my digital design needs was a game-changer. I can focus on my business without the tech headaches!"
    };
    const karen = {
        name: "Karen",
        title: "Completely stress-free",
        business: "Karen Friedland Fine Art",
        icon: "fa-solid fa-comment",
        quote: "They made the process completely stress-free and designed a site that's not only beautiful but also easy to manage. I couldn't be happier with the results and the service!"
    };
    const heather = {
        name: "Heather",
        title: "Fast & Detailed",
        business: "Heather Chapplain Online",
        icon: "fa-solid fa-comments transform scale-x-[-1]",
        quote: "Their team really knows how to make social media work for small businesses. I can't believe how fast they turn around content."
    };
    const testimonials = [susan, karen, heather];
</script>

<section class="bg-big-teal" id="testimonials">
    <div class="container mx-auto py-20">
        <div class="text-4xl md:text-6xl font-headline mt-4 text-big-blue text-center">They said it best</div>
        <div class="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 mt-10">
            {#each testimonials as testimonial}
                <Testimonial {...testimonial} />
            {/each}
        </div>
        <SeePlansLink />
    </div>
</section>
