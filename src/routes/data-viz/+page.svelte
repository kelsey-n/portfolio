<script>
  import DataVizPage from "$lib/components/DataViz_HScrollContainer.svelte";

  export let data;
  let projects = data.projects;
</script>

<DataVizPage data={projects} />
