const Login = Vue.component('login', {
    data() {
        return {
            errorText: null,
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

                        <v-card v-if="errorText">
                            <div class="headline px-2 error white--text">Error</div>
                            
                            <v-card-text>{{ errorText }}</v-card-text>

                            <v-card-actions>
                                <v-btn text color="error">Cerrar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="primary" @click="login">Ingresar al chat</v-btn>
                    </v-card-actions>
                </v-card>
            </div>`
});

export default Login;