<script>
    export let name, title, business, icon, quote;
</script>

<div class="testimonial text-center flex flex-col gap-5">
    <div class="testimonial-content flex-1">
        <p class="testimonial-title text-3xl lg:text-2xl xl:text-3xl lg:whitespace-nowrap text-big-blue bg-big-coral rounded-xl p-5">
            <i class="{icon} text-5xl text-shadow block text-big-cream mb-5"></i>
            {title}
        </p>
        <p class="testimonial-quote text-lg">{quote}</p>
    </div>
    <p class="testimonial-name text-sm">{name}<br><span class="testimonial-business">{business}</span></p>
</div>