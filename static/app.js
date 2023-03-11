var app = new Vue({
    el: '#app',
    data: {
        message: "hello vue"
    },
    methods: {
        loadData: async function (){
            const response = await fetch('data.json');
            const data = await response.json()
            console.log(response)
            console.log(data)
        }
    }
})