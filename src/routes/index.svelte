<script lang="ts">
    import axios from "axios"
    import { onMount } from "svelte"
    let resu =""
    let error = null
    onMount(async () => {
        try {
            const res = await axios.get(`/api/HttpExample?name=jose`)
            console.log('res', res)
            resu = res.data
        } catch (e) {
            error = e;
        }
    });
</script>
<h1>Bienvenido to SvelteKit {resu}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
