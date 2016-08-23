<template>
  <div id="app">
    <div class="content">
    <comp-a></comp-a>
    <div v-for="item in [1,2,3,3,5,6]" class="wow bounceInUp">
      <img src="./assets/logo.png">
    </div>

    </div>
  </div>
</template>

<script>
    import CompA from './components/A.vue'
    // import headerComponent from './headerx.vue'
    export default {
        components: {
            CompA,
            // headerComponent
        },
        data() {
            return {
                msg: 'Hello Vue 2.0!!!!!'
            }
        },
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
    
    .content {
        margin: 0 auto;
        width: 990px;
    }
</style>