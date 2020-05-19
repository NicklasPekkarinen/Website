<template>
  <div class="home">
    <div id="header">
      <div id="title">NICKLAS PEKKARINEN</div>
    </div>
    <div id="about">
      <h6>–– About me</h6>
      <p>
        I'm a
        <span class="emphasis">30</span> year old programmer based in Gothenburg, Sweden.
        I'm currently studying app development at IT-Högskolan where I'm learning languages such as
        <span
          class="emphasis"
        >Java</span>,
        <span class="emphasis">Swift</span>,
        <span class="emphasis">Objective C</span>,
        <span class="emphasis">Javascript</span>, C# as well as frameworks such as
        <span class="emphasis">Vue.js</span>,
        <span class="emphasis">Xamarin</span> and
        <span class="emphasis">React Native</span>.
      </p>
    </div>
    <div id="interests">
      <h6>–– My interests</h6>
      <h1>
        <span class="emphasis">Music</span> is my passion.
      </h1>
      <p>
        <br />
        <br />I've been making music for more than half my life so it is without a doubt my number one interest. I'm also really into movies, books and the arts in general, as well as some gaming when time permits.
        <br />
        <br />I'm really keen on combining my interest in music with programming and as someone who has been using music production software for a really long time and really enjoys experimenting with it it's a field I can't wait to get into.
      </p>
    </div>
    <div id="portfolio">
      <h6>–– Portfolio</h6>
      <a href="https://www.github.com/nicklaspekkarinen">GitHub</a>
      <p>My portfolio mostly consists of school assignments right now but I will be working on my own projects slowly but surely so watch this space.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  background-image: url("../assets/hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  height: 300px;
  width: 100vw;
  position: relative;
}
#title {
  position: absolute;
  bottom: 16px;
  right: 32px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  font-weight: bold;
}
#about {
  max-width: 960px;
  padding: 100px;
}
#about p {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
}
#interests {
  background-color: rgb(46, 50, 53);
  padding: 100px;
}
#interests h1 {
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
}
#portfolio {
  padding: 100px;
}
#portfolio a {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  color: mediumspringgreen;
}
h6 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  margin-bottom: 16px;
}

/* Media Queries */

@media (min-width: 645px) {
  #header {
    height: 400px;
  }
}

@media (min-width: 900px) {
  #header {
    height: 600px;
  }
}

@media (min-width: 1400px) {
  #header {
    height: 700px;
  }
}
</style>
