<template>
  <div class="red">
    <h1>Dashboard</h1>
    <timeline ref="timeline" :items="items" :groups="groups" :options="options">
    </timeline>
    <img src="../assets/logo.png" />
  </div>
</template>

<script>
import axios from "axios";
import logo from "../assets/logo.png";
export default {
  name: "Dashboard",
  mounted() {
    this.getAllVideos();
  },
  data: () => ({
    groups: [
      {
        id: 0,
        content: `<h2>Video</h2`,
      },
    ],
    items: [
      {
        id: 1,
        group: 0,
        start: new Date(2021, 1, 10, 4, 5), // compulsory as YY/MM/DD, HH:MM
        end: new Date(2021, 1, 10, 8, 30),
        content: `<div>date</div><img src=${logo} style="width:32px; height:32px;">`,
      },
      {
        id: 1.1,
        group: 0,
        start: new Date(Date.now() + 100 * 60 * 60 * 24 * 6),
        end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 6),
        content: `<div>Conversation</div><img src=${logo} style="width:32px; height:32px;">`,
      },
    ],
    options: {
      editable: true,
    },
  }),
  methods:{
    // get all recorded videos
    async getAllVideos() {
      try {
        // get the stored timestamped image data here then fetch the images from the directory accordingly
        // temporary place holder
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts"); //http://localhost:7000/
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

 
