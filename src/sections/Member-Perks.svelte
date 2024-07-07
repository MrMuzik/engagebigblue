<script>
    import { assets } from '$app/paths';
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
</section>