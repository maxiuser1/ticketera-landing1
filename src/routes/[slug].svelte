<script lang="ts" context="module">
import type { Load } from '@sveltejs/kit';
  type Params = { slug: string };

  export const load: Load<Params> = async ({ params,fetch }) => {
    const response = await fetch('/api/parametros/categorias');
    const data = await response.json();
    const slug = params.slug;

    return {
      props: {
        slug,
        categories: data[0].values
      }
    };
  };
</script>

<script lang="ts">
    
    export let slug: string;
    export let categories : string[];
  </script>

  <h1>hola {slug}</h1>
  <ul>
    {#each categories as category}
        <li>{category}</li>
    {/each}
</ul>