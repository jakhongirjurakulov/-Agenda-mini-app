<template>
  <div>
    <h2>Лист</h2>
      <router-link to="/" class="router-link">Домашняя страница</router-link>
    <AddToDo 
      @add-todo="addToDo"
    />
    <select v-model="filter">
      <option value="all">Все</option>
      <option value="completed">Законченные дела</option>
      <option value="not-completed">Не законченные дела</option>
    </select>
    <Loader v-if="loading"/>
    <ToDoList 
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeToDo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>

import ToDoList from '@/components/ToDoList';
import AddToDo from '@/components/AddToDo';
import Loader from '@/components/Loader';

export default {
  name: 'App',
  data() {
    return {
      todos: [
        // {id: 1, title: 'Buy a bread', completed: false},
        // {id: 2, title: 'Buy a toy', completed: false},
        // {id: 3, title: 'Buy a meat', completed: false}
      ],
      loading: true,
      filter: 'all'
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
        this.todos = json
        this.loading = false
      })
  },
  // watch: {
  //   filter(value) {
  //     console.log(value)
  //   }
  // },
  computed: {
    filteredTodos(filter) {
      if (this.filter === 'all') {
        return this.todos
      }

      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }

      if (this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)
      }
      return filter
    }
  },
  methods: {
    removeToDo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    addToDo(todo) {
      this.todos.push(todo);
    }
  },
  components: {
    ToDoList,
    AddToDo,
    Loader
  }
}
</script>

<style scoped>
  select {
    margin-bottom: 5em;
  }
</style>