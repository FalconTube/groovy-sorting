<script>
	import { fade, fly } from 'svelte/transition';
	export let objAttributes = {};
    export let delay = 0;
</script>
<li in:fly="{{ y: 50, duration: 300, delay:(delay*50)}}" out:fade="{{duration: 200}}" >
<pre>{objAttributes.name}</pre>
</li>

<style>
    li {
        font-family: 'monospace';
        font-size: 10pt;
        border: 1px solid #666;
        border-radius: 4px;
        background-color: #332f2f;
        color: white;
        list-style-type: none;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 4px;
    }
</style>