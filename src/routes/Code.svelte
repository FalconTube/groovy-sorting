<script>
    import { beforeUpdate, tick, onMount, onDestroy } from "svelte";
    import Clipboard from "clipboard";
    export let code = "";

    let compiled;
    let clip;
    let button;
    let codeB;
    let id;

    onMount(async () => {
        if (button) {
            clip = new Clipboard(button, { text: (trigger) => codeB });
        }
    });
    codeB = code;
</script>

<pre id="mycode" contenteditable>{@html code}</pre>
