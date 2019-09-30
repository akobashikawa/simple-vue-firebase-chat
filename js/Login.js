const Login = Vue.component('login', {
    data() {
        return {

        };
    },
    methods: {
        login: function () {
            this.$router.push('/chat');
        }
    },
    template: `<div>
                <v-card>
                    <v-card-title>Login</v-card-title>
                    <v-card-text>
                        <v-text-field
                            label="Por favor ingresa tu nombre..."
                            outlined
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click="login">Ingresar al chat</v-btn>
                    </v-card-actions>
                </v-card>
            </div>`
});

export default Login;