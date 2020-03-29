<template>
  <div class="home">
    <sidebar class="sidebar"></sidebar>
    <div class="home-div">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue";
export default {
  name: "Home",
  components: {
    Sidebar
  }
};
</script>

<style>
.sidebar {
  width: 290px;
  background: #ffffff;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(92, 99, 105, 0.15);
}

.home {
  height: auto;
}

.home-div {
  position: relative;
  width: auto;
  height: auto;
  top: 0px;
  margin-left: 290px;
}
</style>