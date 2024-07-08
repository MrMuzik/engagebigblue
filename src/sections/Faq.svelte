<script>
    import Qa from "../components/Qa.svelte";

    const who = {
        title: "Who is behind the design and development at Big Blue?",
        answer: "It's my husband and I! We are a husband and wife team who have been working together for over 10 years. We have a combined 40 years of experience in design, development, and marketing. We are both passionate about helping small businesses grow and succeed. We love what we do and we are excited to work with you!",
        visible: false
    };
    const plans = {
        title: "What do your unlimited plans include?",
        answer: "Our unlimited plans include unlimited design requests, unlimited revisions, and unlimited support. We handle them one at a time, for unlimited brands. Requests are typically completed within 2 business days. We offer a 100% satisfaction guarantee. You can cancel or pause your subscription at any time.",
        visible: false
    };
    const refund = {
        title: "What is your refund policy?",
        answer: "We stand by the caliber of our work and do not offer refunds. We ensure each project meets your expectations with unlimited revisions.",
        visible: false
    };
    const membership = {
        title: "How do I receive my deliverables if my request spans multiple months?",
        answer: "You must maintain an active membership to receive deliverables. You can pause or cancel your subscription at any time.",
        visible: false
    };
    const pm = {
        title: "What project management tool does Big Blue use?",
        answer: "Big Blue use Monday.com to manage projects efficiently. Don’t worry about needing a subscription; you’ll have access to a private board to manage your requests seamlessly.",
        visible: false
    };
    const nogo = {
        title: "What types of requests are not included in the unlimited plans?",
        answer: "There are a few areas we don’t cover: 3D modeling, animated graphics, complex packaging, extensive print design like magazines and books, and specialized document design such as medical forms.",
        visible: false
    };
    const questions = [who, plans, refund, membership, pm, nogo];
</script>

<section class="snap-y scroll-mt-16" id="faq">
    <div class="container mx-auto py-20">
        <h1 class="text-5xl md:text-6xl font-headline text-big-blue mb-10">FAQ:</h1>
        {#each questions as question}
            <Qa {...question} />
        {/each}
    </div>
</section>