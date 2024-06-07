<template>
  <div class="logout-container">
    <div class="glass-background">
      <h1>Logout</h1>
      <p>You have been logged out.</p>
      <p>Redirecting to homepage in {{ countdown }} seconds...</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LogoutV',
  data() {
    return {
      countdown: 3
    };
  },
  mounted() {
    this.logout();
    this.startCountdown();
  },
  methods: {
    ...mapActions(['logout']),
    startCountdown() {
      const countdownInterval = setInterval(() => {
        if (this.countdown > 1) {
          this.countdown--;
        } else {
          clearInterval(countdownInterval);
          this.$router.push('/');
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.logout-container {
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

p {
  font-size: 1.2em;
  color: #ffffff;
  text-align: center;
}
</style>
