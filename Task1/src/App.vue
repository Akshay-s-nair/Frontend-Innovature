<template>
  <div id="app">
    <video autoplay muted loop id="background-video">
      <source src="/Background.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

#background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1; /* Ensure video is behind other content */
}

#content {
  position: relative;
  z-index: 1; /* Ensure content is above the video */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
  color: white; /* Ensure text is readable over video */
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
