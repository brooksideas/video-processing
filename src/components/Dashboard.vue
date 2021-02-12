<template>
  <div>
    <h1>Dashboard</h1>
    <timeline ref="timeline" :items="items" :groups="groups" :options="options">
    </timeline>

    <v-row class="mt-6">
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
import moment from "moment";
import axios from "axios";
import logo from "../assets/logo.png";
export default {
  name: "Dashboard",
  beforeMount() {
    this.getAllVideos();
  },
  data: () => ({
    Frames: [],
    imager:
      "https://user-images.githubusercontent.com/45931201/107581958-dd67b980-6c09-11eb-9f47-827ec4623236.png",
    groups: [
      {
        id: 0,
        content: `<h2>Video</h2>`,
      },
    ],
    // compulsory to have a Start Point for Vis-timeline component to mount
    items: [
      {
        id: 112312321,
        group: 0,
        start: "12-FEB-2021 12:05:17",
        end: "12-FEB-2021 12:05:18",
        content: `<div style="width:32px; height:32px;">Conversion Start Point</div>`,
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
        const { data } = response;
        const { frames } = data;
        this.Frames = frames;
        console.log(this.Frames);
        // Set the Start time for the Frames
        // Extract each frame and place in one Second Interval on vis-timeline
        var utc, frameStartTime, frameEndTime;
        var total_length = 0;

        this.Frames.map((frame) => {
          console.log(frame.timestamp);

          total_length = frame.total_length;

          for (let second = 0; second <= total_length; second++) {
            //set the Start and End time 1 second apart for correct Frame display
            frameStartTime = moment(frame.timestamp)
              .add(second, "seconds")
              .format("DD-MMM-YYYY hh:mm:ss");
            frameEndTime = moment(frame.timestamp)
              .add(second + 1, "seconds")
              .format("DD-MMM-YYYY hh:mm:ss");

            var item = {
              id: second,
              group: 0,
              start: frameStartTime,
              end: frameEndTime,
              content: `<img src=data:image/jpeg;base64,${frame.frames[second]} alt="frame${second}" width="300" height="200">`,
            };

            this.items.push(item);
          }
          console.log("Start items==>", this.items);
        });
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
.textfield-margin-start {
  margin-left: 40%;
}
.textfield-margin-end {
  margin-left: 30%;
}
</style>
