<template>
  <div class="red">
    <h1>Dashboard</h1>
    <timeline ref="timeline" :items="items" :groups="groups" :options="options">
    </timeline>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({
    groups: [{
      	id: 0,
        content: 'Group 1'
      }],
    items: [{
      	id: 0,
        group: 0,
        start: new Date(),
        content: 'Item 1'
      }],
    options: {
      editable: true,
    },
  }),
};
</script>

 
