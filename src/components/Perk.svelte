<script>
    export let title, icon, content;
</script>

<div class="text-center flex flex-col">
    <div class="flex flex-col flex-1">
        <p class="text-3xl lg:text-2xl xl:text-3xl lg:whitespace-nowrap text-big-blue">
            <i class="{icon} text-5xl block text-big-blue mb-5"></i>
            {title}
        </p>
        <p class="text-lg bg-big-coral rounded-xl p-5 flex-1">{content}</p>
    </div>
</div>