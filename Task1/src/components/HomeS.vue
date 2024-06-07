<template>
  <div class="home-container">
    <div class="glass-background">
      <h1>Welcome to the Arithmetic App</h1>
      <div class="links">
        <router-link to="/register" class="link">Register</router-link>
        <router-link to="/login" class="link">Login</router-link>
        <router-link to="/calculator" class="link">Calculator</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeS'
};
</script>

<style scoped>
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background: linear-gradient(135deg, #f0f4f8, #d9e4ea); Fallback background */
  background-size: cover;
  background-position: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-sizing: border-box;
}

.glass-background {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 800px;
  padding: 50px;
  background: rgba(0, 0, 0, 0.2); /* Semi-transparent white */
  border-radius: 15px;
  backdrop-filter: blur(5px); /* Frosted glass effect */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 2.5em;
  color: #ffffff;
  /* background-color: #7474746d; */
  margin-bottom: 20px;
  text-align: center;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.link {
  display: inline-block;
  padding: 10px 20px;
  width: 200px; /* Fixed width for consistency on mobile */
  text-align: center; /* Center text */
  font-size: 1.2em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 90px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.link:hover {
  background-color: #0056b3;
}

@media (min-width: 600px) {
  .links {
    flex-direction: row;
    gap: 20px;
  }
}

@media (min-width: 768px) {
  h1 {
    font-size: 3em;
  }

  .link {
    padding: 15px 25px;
    width: auto; /* Adjust to content on larger screens */
    font-size: 1.2em;
  }
}
</style>
