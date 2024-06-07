<template>
  <div class="register-container">
    <div class="navigation-buttons">
      <router-link to="/login" class="navv-button">Login</router-link>
      <router-link to="/" class="navv-button">Home</router-link>
    </div>
    <div class="glass-background">
      <h1>Register</h1>
      <form @submit.prevent="registerUser" class="register-form">
        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit" class="submit-button">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    ...mapActions(['register']),
    async registerUser() {
      try {
        console.log('Registering with:', {
          username: this.username, 
          email: this.email, 
          password: this.password 
        });
        const response = await this.register({ 
          username: this.username, 
          email: this.email, 
          password: this.password 
        });
        this.successMessage = response.message;
        this.errorMessage = '';
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      } catch (error) {
        console.error('Registration error:', error);
        this.errorMessage = error.response ? error.response.data.error : error.message;
        this.successMessage = '';
      }
    }
  }
};
</script>

<style scoped>
.register-container {
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

.navv-button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 1em;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;
}

.navv-button:hover {
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

.register-form {
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

.success-message {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
}

.error-message {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
}

@media (max-width: 600px) {
  .register-container {
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
