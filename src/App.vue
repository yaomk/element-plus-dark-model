<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <br>
    <el-button>tst</el-button>
    <el-table :data="list" stripe>
      <el-table-column label="tset" prop="test"></el-table-column>
      <el-table-column label="tset" prop="test"></el-table-column>
      <el-table-column label="tset" prop="test"></el-table-column>
      <el-table-column label="tset" prop="test"></el-table-column>
    </el-table>
  </nav>
  <router-view/>
</template>
<script setup>
import { ref } from 'vue'
const list = ref([
  {
    test: '1'
  },
  {
    test: '1'
  },
  {
    test: '1'
  },
  {
    test: '1'
  },
  {
    test: '1'
  }
])
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
