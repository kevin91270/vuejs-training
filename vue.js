var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue !'
    }
  })

let date = new Date().toLocaleTimeString()
var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Vous avez affiché cette page à ' + date
    }
  })

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    },
    methods: {
        messageHidden: function () {  
            if(this.seen==false){
                this.seen=true
            }
            else (
                this.seen = false
            )
            console.log(this.seen)
            
        }
      }
  })

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Apprendre JavaScript' },
        { text: 'Apprendre Vue' },
        { text: 'Créer quelque chose de génial' }
      ]
    }
  })

  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js !'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue !'
    }
  })