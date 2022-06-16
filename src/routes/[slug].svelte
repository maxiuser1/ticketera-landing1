<script lang="ts" context="module">
import type { Load } from '@sveltejs/kit';
  type Params = { slug: string };

  export const load: Load<Params> = async ({ params }) => {
    const slug = params.slug;
    return {
      props: {
        slug
      }
    };
  };
</script>

<script lang="ts">
    
    export let slug: string;
  </script>

  <h1>hola {slug}</h1>