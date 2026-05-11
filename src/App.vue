<!-- 

<script>
  export default {
    name: "App",
    data(){
      return {
        arr: [1,2,3,4,5],
      };
    },
  };

  
</script>

<template>
  <div>
    <div style="width: 90%;
    margin: 0 auto;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 0px 10px;">
      <router-link to="/" style="padding: 10px 15px; background-color: whitesmoke">
        Home</router-link>

      <router-link v-for="val in arr" 
      :to="`/about/${val}`" style="padding: 10px 15px; background-color: whitesmoke">
        about {{ val }}</router-link>
    </div>
    <router-view />
    
    <div style="background-color: gray;">
      <h1 style="font-size: 50px; text-align: center;">Footer</h1>
    </div>

  </div>
</template> -->


<script setup>
import { ref } from 'vue'
import { supabase } from './utils/supabase'

const newMessage = ref('')

async function saveToSupabase() {
  const { error } = await supabase
    .from('messages')
    .insert({ content: newMessage.value })

  if (error) alert(error.message)
  else {
    alert('Sent to the cloud!')
    newMessage.value = ''
  }
}
</script>

<template>
  <div>
    <input v-model="newMessage" placeholder="Type something..." />
    <button @click="saveToSupabase">Send to Supabase</button>
  </div>
</template>

