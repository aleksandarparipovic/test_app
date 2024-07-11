<template>
  <div class="container">
    <h1>You logged in</h1>
    <button @click="fetchApiData">Click to access API</button>
    <textarea v-model="apiResponse" readonly></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import _ from 'tmo-poptoken-builder'

const apiResponse = ref('')

const fetchApiData = async () => {
  try {
    // Replace 'https://api.example.com/data' with your actual API endpoint
    const response = await fetch('https://api.example.com/data')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    apiResponse.value = JSON.stringify(data, null, 2) // Format the JSON data
  } catch (error) {
    apiResponse.value = `Error: ${error.message}`
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

button {
  margin: 20px 0;
  padding: 10px 20px;
  font-size: 16px;
}

textarea {
  width: 80%;
  height: 300px;
  font-size: 14px;
  padding: 10px;
  border: 1px
}

</style>