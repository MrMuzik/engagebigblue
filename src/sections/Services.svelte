<script>
    import Accordion from "../components/Accordion.svelte";
    const design = {
        title: "Design Requests",
        list: ["Graphic Design", "Social Media Graphics & Content", "Slide Decks", "Flyers", "Email Banners", "Business Cards", "Web Graphics & Icons", "Infographics", "YouTube and Vimeo Thumbnails", "Print & Digital Ads", "Short Form Video Editing", "Packaging + Print Materials"],
        visible: true
    };
    const marketing = {
        title: "Marketing Requests",
        list: ["Prompt Engineering", "Hashtag/Keyword Research", "Social Media Strategy", "Content Calendar", "Email Marketing", "Mailchimp Sequences", "Product Launches", "Facebook Management & Ads", "Instagram Management & Ads", "LinkedIn Ads", "Google Ads", "Pinterest Management & Ads", "Twitter Ads", "TikTok Management & Ads"],
        visible: false
    };
    const web = {
        title: "Web Development Requests",
        list: ["WordPress Development", "Shopify Development", "Squarespace Development", "Wix Development", "Custom HTML/CSS/JS Development", "Custom React/Vue/Svelte Development", "Landing Pages", "E-Commerce Development", "Membership Sites", "Website Maintenance & Management", "Website Hosting" ],
        visible: false
    }
    const va = {
        title: "Administrative Requests",
        list: ["Email & Lead Management", "Calendar Management", "Client Gifting", "CRM & Campaign Management", "Custom Process Design"],
        visible: false
    }
    const services = [design, marketing, web, va];
</script>
<section class="snap-y scroll-mt-16" id="services">
    <div class="container mx-auto py-20">
        <h1 class="text-5xl md:text-6xl font-headline text-big-blue mb-10">Services:</h1>
        {#each services as service}
            <Accordion {...service} />
        {/each}
    </div>
</section>