<template>
  <div class="login-container">
    <div class="navigation-buttons">
      <router-link to="/register" class="nav-button">Register</router-link>
      <router-link to="/" class="nav-button">Home</router-link>
    </div>
    <div class="glass-background">
      <h1>Login</h1>
      <form @submit.prevent="loginUser" class="login-form">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit" class="submit-button">Login</button>
      </form>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="loginError" class="error-message">{{ loginError }}</div> <!-- Display login error -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters(['error', 'loginError', 'backendMessage']),
  },
  methods: {
    ...mapActions(['login']),
    async loginUser() {
      try {
        await this.login({ email: this.email, password: this.password });
        this.$router.push('/calculator');
      } catch (error) {
        console.error('Login error:', error.message);
      }
    },
  },
};
</script>


<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-sizing: border-box;
}

.navigation-buttons {
  margin-bottom: 20px;
}

.error-message{
  padding: 10px;
  color: #fff;
}
.nav-button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 1em;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #0056b3;
}

.glass-background {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 30px;
  background: rgba(0, 0, 0, 0.2); /* Semi-transparent white */
  border-radius: 15px;
  backdrop-filter: blur(10px); /* Frosted glass effect */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 2em;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
}

.login-form {
  width: 100%;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 1em;
  color: #ffffff;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
}

.submit-button {
  display: block;
  width: 100%;
  margin-top: 25px;
  padding: 10px; /* Increased padding for better appearance */
  font-size: 1.2em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

@media (max-width: 600px) {
  .login-container {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5em;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .glass-background {
    width: 300px;
  }
}
</style>
