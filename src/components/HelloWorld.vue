<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{count}}</h2>
    <button @click="handleClick">+</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  mounted() {},
  methods: {
    handleClick() {
      // console.log(this.$store);
      this.$store.commit('increment');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
