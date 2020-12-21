<template>
  <div id="app">
    <h1>Приложение Повестка</h1>
    <hr>
    <router-view /> <!-- any page could be rendered here-->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      todos: [
        // {id: 1, title: 'Buy a bread', completed: false},
        // {id: 2, title: 'Buy a toy', completed: false},
        // {id: 3, title: 'Buy a meat', completed: false}
      ]
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
        this.todos = json
      })
  },
  methods: {
    removeToDo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    addToDo(todo) {
      this.todos.push(todo);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
