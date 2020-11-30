
<template>
  <body>
    <span id="spaceBackground"></span>
  </body>
</template>


<script>
export default {
  data() {
    return {
      spaceImage: "",
    };
  },

  mounted() {
    // Get nasa's space image of the day, because we can
    // https://blog.jakelee.co.uk/an-introduction-to-the-nasa-apod-api/
    // https://api.nasa.gov/

    var d = new Date();
    var today = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();

    const apiData = {
      url: "https://api.nasa.gov/planetary/apod",
      key: "rDwFcjwwdmxeqnq0aOFJmIRwzUbd0PgSSokdcf5v",
      // date: "2020-10-30",
      date: today,
    };

    const { url, key, date } = apiData;
    const apiUrl = `${url}?api_key=${key}&date=${date}`;

    fetch(apiUrl)
      .then((data) => data.json())
      .then((spaceData) => generateImage(spaceData));

    console.log("Spaceimage:");
    console.log(apiUrl);

    const generateImage = (data) => {
      const spaceImageHD = `${data.hdurl}`;
      const spaceImage = `${data.url}`;
      const mediaType = `${data.media_type}`;

      this.spaceImageHD = spaceImageHD;
      this.spaceImage = spaceImage;
      this.mediaType = mediaType;

      // Sometimes the api returns a video, if this is the case we want to use
      // an asset image as background
      if (mediaType == "video") {
        document.getElementById("spaceBackground").style.backgroundImage =
          "url('https://picsum.photos/1920/1080?blur=1')";
      } else {
        document.getElementById("spaceBackground").style.backgroundImage =
          "url('" + spaceImage + "')";
      }
    };
  },
};
</script>

<style>
#spaceBackground {
  background-position: 50% 0;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-size: cover;
  z-index: -1;
}
</style>
