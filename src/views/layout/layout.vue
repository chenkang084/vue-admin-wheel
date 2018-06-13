<template>
    <div class="app-container">
        <div class="sidebar-container">sidebar</div>
        <div class="content-container"><router-view/></div>
        <!-- <a href="javascript:void(0)" @click="logout">logout</a> -->
        <div>
        </div>
    </div>
</template>

<script>
import { removeToken } from '../../util/auth';
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout').then((response) => {
        console.log(response);
        removeToken();
        this.$router.push({ path: '/login' });
      });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
.app-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.sidebar-container {
  flex-basis: 256px;
  background: red;
}
.content-container {
  background: green;
  flex: 1 1 auto;
  overflow-y: scroll;
}
</style>
