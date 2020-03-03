let date = new Date().toLocaleTimeString()

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Vous avez affiché cette page à ' + date
  }
})