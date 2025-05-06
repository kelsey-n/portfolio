<script>
  import DataVizCarousel from "$lib/components/DataVizCarousel.svelte";

  export let data;
  let projects = data.projects;
</script>

<DataVizCarousel data={projects} />
