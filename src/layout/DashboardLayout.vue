<template>
  <div class="wrapper">
    <side-bar>
      <sidebar-link to="/">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/students">
        <i class="nc-icon nc-circle-09"></i>
        <p>Student</p>
      </sidebar-link>
      <sidebar-link to="/admin/student-attribute">
        <i class="nc-icon nc-circle-09"></i>
        <p>Student Attribute</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click="toggleSidebar"/>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>

import DashboardContent from './Content.vue'
import TopNavbar from "./TopNavbar";

export default {
  components: {
    DashboardContent,
    TopNavbar
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}

</script>
