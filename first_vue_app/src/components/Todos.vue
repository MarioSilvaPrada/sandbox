<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <h3>{{todo.title}}</h3>
        </div>
        
    </div>
</template>

<script>

import TodoItems from './TodoItems'
export default {
    name:"Todos",
    props: ["todos"]
}
</script>

<style scoped>

</style>


