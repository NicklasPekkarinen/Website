<template>
  <div class="tunes">
    <div id="tunes-container">
      <h1>
        These are some of the
        <span class="emphasis">artists</span> I've been listening to for the past
        <span class="emphasis">30</span> days...
      </h1>
      <div id="artists-container">
        <div class="artist" v-for="artist in artists.artist" :key="artist.mbid">
          <Artist :artist-name="artist.name" :artist-playcount="artist.playcount"></Artist>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Artist from "../components/Artist.vue";

export default {
  name: "Tunes",
  components: {
    Artist
  },
  props: {
    msg: String
  },
  created() {
    fetch(
      "https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=tenniscoat&period=1month&limit=12&api_key=b906a1c9e5955e0c3502f72c8ae35561&format=json"
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.artists = result.topartists;
      });
  },
  data() {
    return {
      artists: {}
    };
  }
};
</script>

<style scoped>
#tunes-container {
  max-width: 960px;
  height: auto;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
  padding: 16px;
}
#artists-container {
  display: grid;
  grid-gap: 0.4em;
  grid-template-columns: 50% 50%;
  grid-template-rows: 16.6%;
  height: auto;
}
.artist {
  position: relative;
}
.artist img {
  height: 150px;
  width: 150px;
  object-fit: cover;
  z-index: -1;
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
@media (min-width: 645px) {
  #artists-container {
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 33%;
  }
  #tunes-container {
    height: 100vh;
  }
}
@media (min-width: 1020px) {
  #tunes-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
</style>