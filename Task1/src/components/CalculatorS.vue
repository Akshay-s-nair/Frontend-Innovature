<template>
  <div class="arithmetic-container">
    <div class="glass-background">
      <h1>Calculator</h1>
      <p>Welcome, {{ username }}. Enjoy Your Calculations :)</p>
      <div class="buttons">
        <router-link to="/logout" class="logout-button">Logout</router-link>
        <router-link to="/" class="home-button">Home</router-link>
      </div>
      <form @submit.prevent="performCalculation" class="calculator-form">
        <div class="form-group">
          <label for="num1">Number 1:</label>
          <input type="number" v-model="num1"  />
        </div>
        <div class="form-group">
          <label for="num2">Number 2:</label>
          <input type="number" v-model="num2"  />
        </div>
        <div class="form-group">
          <label for="operation">Select your Operation:</label>
          <select v-model="operation">
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </div>
        <button type="submit" class="calculate-button">Calculate</button>
      </form>
      <div v-if="result !== null" class="result">
        <h2>Result: {{ result }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      num1: '',
      num2: '',
      operation: 'add',
    };
  },
  computed: {
    ...mapGetters(['username', 'result']),
  },
  methods: {
    ...mapActions(['calculate']),
    async performCalculation() {
      try {
        await this.calculate({
          num1: parseFloat(this.num1),
          num2: parseFloat(this.num2),
          operation: this.operation
        });
      } catch (error) {
        console.log('Unexpected error: ' + error.message);
      }
    }
  }
};
</script>



<style scoped>
.arithmetic-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #ffffff;
  /* background: linear-gradient(135deg, #f0f4f8, #d9e4ea); */
}

.glass-background {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 400px;
  padding: 30px;
  background: rgba(10, 10, 10, 0.2); /* Semi-transparent white */
  border-radius: 15px;
  backdrop-filter: blur(10px); /* Frosted glass effect */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.buttons {
  display: flex;
  justify-content: space-between; /* Align buttons to the sides */
  width: 55%; /* Ensure buttons take full width */
  margin-bottom: 15px;
}

.logout-button,
.home-button {
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.logout-button:hover,
.home-button:hover {
  background-color: #0056b3;
}
h1 {
  font-size: 2em;
  color: #ffffff;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.logout-button {
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #0056b3;
}

.calculator-form {
  width: 100%;
  margin-bottom: 20px;
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

input,
select {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
}

.calculate-button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 1.2em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.calculate-button:hover {
  background-color: #0056b3;
}

.result {
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 10px;
  color: black;
  border-radius: 5px;
}

/* Media query for mobile view */
@media (max-width: 600px) {
  .glass-background {
    width: 90%; /* Reduce width for mobile view */
  }
  .buttons{
    width: 80%;
  }
  p{
    text-align: center;
  }
}

</style>
