const Login = Vue.component('login', {
    data() {
        return {

        };
    },
    template: `<div>
                <v-card>
                    <v-card-title>Login</v-card-title>
                    <v-card-text>
                        <v-text-field
                            label="Por favor ingresa tu nombre..."
                            outlined
                        ></v-text-field>
                        <v-btn color="primary">Ingresar al chat</v-btn>
                    </v-card-text>
                </v-card>
            </div>`
});

export default Login;