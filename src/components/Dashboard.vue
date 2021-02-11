<template>
  <div>
    <h1>Dashboard</h1>
    <timeline ref="timeline" :items="items" :groups="groups" :options="options">
    </timeline>
    <!-- <img
      src="https://user-images.githubusercontent.com/45931201/107581958-dd67b980-6c09-11eb-9f47-827ec4623236.png"
    /> -->

    <!-- Vuetify required -->
    <v-row class="mt-12">
      <v-col cols="12" sm="12" md="6" lg="6">
        <p>Start Time:</p>
        <v-col class="textfield-margin-start" cols="12" sm="12" md="6">
          <v-text-field
            label="Outlined"
            placeholder="Start Time"
            outlined
          ></v-text-field>
        </v-col>
        
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6">
        <p>End Time:</p>
         <v-col class="textfield-margin-end" cols="12" sm="12" md="6">
          <v-text-field
            label="Outlined"
            placeholder="End Time"
            outlined
          ></v-text-field>
        </v-col> 
      </v-col>

      <v-col class="center-btn" cols="12" sm="12" md="12" lg="12">
        <div class="container">
          <div class="row justify-content-center">
            <v-btn color="primary">
              <v-icon class="ma-2 mr-4"> mdi-content-cut</v-icon>
              Cut Selection
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import logo from "../assets/logo.png";
export default {
  name: "Dashboard",
  mounted() {
    // this.getAllVideos();
  },
  data: () => ({
    imager:
      "https://user-images.githubusercontent.com/45931201/107581958-dd67b980-6c09-11eb-9f47-827ec4623236.png",
    groups: [
      {
        id: 0,
        content: `<h2>Video</h2>`,
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
  methods: {
    // get all recorded videos
    async getAllVideos() {
      try {
        // get the stored timestamped image data here then fetch the images from the directory accordingly

        const response = await axios.get("http://localhost:7000/api/video/all"); //Backend :: http://localhost:7000/
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.center-btn {
  margin-left: 30%;
}
.textfield-margin-start{
  margin-left: 40%;
}
.textfield-margin-end{
  margin-left: 30%;
}
</style>
