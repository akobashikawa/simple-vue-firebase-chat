const Login = Vue.component('login', {
    data() {
        return {

        };
    },
    template: `<div>
                <v-card>
                    <v-card-title>Login</v-card-title>
                    <v-card-text>
                    <p>{{ new Date() }}</p>
                    </v-card-text>
                </v-card>
            </div>`
});

export default Login;