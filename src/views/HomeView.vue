<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    {{ blah }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
import { simplePay } from '@/main';

const blah = ref('' as any);

(async () => {
  await simplePay.updateConfig()
  const reqeust = await simplePay.createPaymentRequest(.001)

  setInterval(async () => {
    const checking = await simplePay.checkForPayment(reqeust)
    console.log(checking)
    blah.value = checking
  }, 10000)
})()

</script>
