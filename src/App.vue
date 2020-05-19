<template>
  <div id="app">
    <div id="menu-wrap">
      <input type="checkbox" class="toggler" v-model="myBoolean" />
      <div class="hamburger">
        <div></div>
      </div>
      <div class="menu">
        <div>
          <div>
            <ul>
              <li>
                <router-link to="/" @click.native="$store.commit('setBoolean', !myBoolean)">Start</router-link>
              </li>
              <li>
                <router-link
                  to="/tunes"
                  @click.native="$store.commit('setBoolean', !myBoolean)"
                >What I'm listening to</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {
    myBoolean: {
      get() {
        return this.$store.state.toggled;
      },
      set(myBoolean) {
        this.$store.commit("setBoolean", myBoolean);
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  background-color: black;
  color: white;
  margin: 0;
  padding: 0;
}
.emphasis {
  color: mediumspringgreen;
}

/* MENU */
#menu-wrap {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
}
#menu-wrap .toggler {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  cursor: pointer;
  width: 40px;
  height: 40px;
  opacity: 0;
}
#menu-wrap .hamburger {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 40px;
  height: 40px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* Hamburger lines */
#menu-wrap .hamburger > div {
  position: relative;
  width: 100%;
  height: 1px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}
#menu-wrap .hamburger > div::before,
#menu-wrap .hamburger > div::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 1px;
  background-color: white;
}
#menu-wrap .hamburger > div::after {
  top: 10px;
}
/* Toggler animate */
#menu-wrap .toggler:checked + .hamburger > div {
  transform: rotate(135deg);
}
/* Turn lines into X */
#menu-wrap .toggler:checked + .hamburger > div::before,
#menu-wrap .toggler:checked + .hamburger > div::after {
  top: 0;
  transform: rotate(90deg);
}
/* Rotate X on hover when checked */
#menu-wrap .toggler:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}
/* Show menu */
#menu-wrap .toggler:checked ~ .menu {
  visibility: visible;
}
#menu-wrap .toggler:checked ~ .menu > div {
  transform: scale(1);
  transition-duration: 1s;
}
#menu-wrap .toggler:checked ~ .menu > div > div {
  opacity: 1;
  transition: all 0.4s ease;
}
#menu-wrap .menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
#menu-wrap .menu > div {
  background: black;
  width: 200vw;
  height: 100vh;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: all 0.4s ease;
}
#menu-wrap .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: all 0.4s ease;
}
#menu-wrap .menu > div > div > ul > li {
  list-style: decimal-leading-zero;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-size: 0.8rem;
  padding: 1rem;
}
#menu-wrap .menu > div > div > ul > li > a {
  color: inherit;
  transition: color 0.4s ease;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  text-decoration-color: mediumspringgreen;
}
</style>
