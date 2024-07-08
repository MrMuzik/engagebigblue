<script>
    export let title, answer, visible = false;
    const qa = (/** @type {{ target: { classList: { contains: (arg0: string) => any; }; closest: (arg0: string) => any; }; }} */ e) => {
        const button = e.target.classList.contains('js-accordion-button') ? e.target : e.target.closest('.js-accordion-button');
        const filterSection = button.nextElementSibling.classList.contains('js-services-list') ? button.nextElementSibling : null;
        const expandIcon = button.querySelector('svg:first-child');
        const collapseIcon = button.querySelector('svg:last-child');
        
        if (!filterSection) return;
        button.classList.toggle('rounded-b-none');
        filterSection.classList.toggle('hidden');
        expandIcon.classList.toggle('hidden');
        collapseIcon.classList.toggle('hidden');
    };
</script>

<!-- Expand/collapse section button -->
<button type="button" class="js-accordion-button flex w-full items-center justify-between px-10 py-3 font-sans text-big-cream bg-big-blue rounded-xl hover:text-big-coral mt-10 first-of-type:mt-0 {visible && 'rounded-b-none'}" on:click={qa}>
    <span class="font-lg font-bold">{title}</span>
    <span class="ml-6 flex items-center">
        <!-- Expand icon, show/hide based on section open state. -->
        <svg class="h-5 w-5 {visible && 'hidden'}" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
        </svg>
        <!-- Collapse icon, show/hide based on section open state. -->
        <svg class="h-5 w-5 {!visible && 'hidden'}" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
        </svg>
    </span>
</button>
<!-- Filter section, show/hide based on section state. -->
<div class="px-10 py-5 js-services-list rounded-b-xl bg-big-blue transition-all {!visible && 'hidden'}">
    <p>{answer}</p>
</div>