const app = new Vue({
    el: "#root",
    data: {
        emails: [],
    },
    methods: {
    },
    created() {
        for(let i = 0; i < 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                this.emails.push(response.data.response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
});