<template>
  <div id="app">

    <!--<Add/>-->
    <InsertList/>
    <List/>
  </div>
</template>

<script>
import InsertList from './components/InsertList'
import List from './components/List'
import Add from './components/Add'

export default {
  name: 'App',
  components: {
    List,
    Add,
    InsertList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
