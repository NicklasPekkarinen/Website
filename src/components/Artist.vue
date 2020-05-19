<template>
  <div>
    <div class="gradientOverlay">
      <img :src="getArtistImage(artistName)" :alt="artistName" />
    </div>
    <span>{{artistName}}</span>
    <p>{{artistPlaycount}} plays</p>
  </div>
</template>

<script>
export default {
  name: "Artist",
  props: {
    artistName: String,
    artistPlaycount: String
  },
  methods: {
    getArtistImage(artist) {
      return (
        "https://tse2.mm.bing.net/th?q=%27" +
        artist +
        "%27%20artist+spotify.com&w=300&h=300&c=7&rs=1&..."
      );
    }
  }
};
</script>

<style scoped>
.gradientOverlay {
  display: inline-block;
  position: relative;
}
.gradientOverlay:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
}
.artist img {
  display: block;
  height: 150px;
  width: 150px;
  object-fit: cover;
}
.artist span {
  padding: 8px;
  display: block;
  position: absolute;
  bottom: 14px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  max-width: 120px;
}
.artist p {
  padding: 8px;
  display: block;
  position: absolute;
  bottom: 0px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 0.8em;
  max-width: 120px;
  color: mediumspringgreen;
}
</style>