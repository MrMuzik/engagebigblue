<script>
    import { assets } from '$app/paths';
    import Perk from '../components/Perk.svelte';
    // Perk data
    const board = {
        title: "Project Board",
        icon: "fa-solid fa-clipboard-list",
        content: "Easily manage your projects with a Monday board. Simple design request submission & management."
    };
    const fast = {
        title: "Fast & Reliable",
        icon: "fa-solid fa-bolt-lightning",
        content: "Typically receive your request within a few days. Your requests are completed 1 at a time."
    };
    const monthly = {
        title: "Monthly Subscription",
        icon: "fa-solid fa-piggy-bank",
        content: "Pay a flat monthly fee for unlimited requests. No hidden fees or surprise charges."
    };
    const quality = {
        title: "Exceptional Quality",
        icon: "fa-solid fa-heart",
        content: "Superior quality honed over 20 years of experience, ready to elevate your brand."
    };
    const stressFree = {
        title: "Adjustable & Stress-Free",
        icon: "fa-solid fa-face-smile",
        content: "We handle the tech so you can focus on your business, no more tech headaches! Pause or cancel anytime your services anytime."
    };
    const personal = {
        title: "Personal Care",
        icon: "fa-solid fa-user",
        content: "We get to know you and your brand, ensuring your needs are met with precision and care."
    };
    const perks = [board, fast, personal, quality, stressFree, monthly];
</script>
<section class="snap-y scroll-mt-16" id="member-perks">
    <div class="container mx-auto pt-20">
        <h1 class="text-5xl md:text-6xl font-headline text-big-blue mb-10">Member Perks:</h1> 
    </div>
    <div class="container mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
            <img class="rounded-xl" src={`${assets}/images/Client.jpg`} alt="Client" />
        </div>
        <div class="font-sans bg-big-blue p-5 rounded-xl">
            <h2 class="font-bold text-big-coral mb-1">Simplify Your Workflow</h2>
            <p>Say goodbye to meetings! We prioritize efficient, uninterrupted work to keep your days productive and stress-free.</p>

            <h2 class="font-bold text-big-coral mb-1 mt-5">Manage with Monday.com</h2>
            <p>Manage your design projects effortlessly on Monday.com. Easily access and track tasks, whether they’re in progress, up next, or completed.</p>

            <h2 class="font-bold text-big-coral mb-1 mt-5">Streamline Your Requests</h2>
            <p>Submit and manage design requests with ease. Our system is designed for simplicity, ensuring you can quickly request updates or new projects without any hassle, keeping your business moving smoothly.</p>
        </div>
    </div>
    <div class="container mx-auto pb-20 pt-0 md:pt-20">
        <h3 class="font-serif text-big-blue text-5xl md:text-6xl text-center">Everything you require, all in one place.</h3>
    </div>
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10">
        {#each perks as perk}
            <Perk {...perk} />
        {/each}
    </div>
</section>