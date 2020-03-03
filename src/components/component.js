Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Légumes' },
            { id: 1, text: 'Fromage' },
            { id: 2, text: 'Tout ce que les humains sont supposés manger' }
        ]
    }
})

Vue.component('counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">Vous m\'avez cliqué {{ count }} fois.</button>'
})

new Vue({ el: '#components-count' })