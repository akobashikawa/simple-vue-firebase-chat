const Login = {
    name: 'login',
    data() {
        return {
            errorText: null,
            name: null,
        };
    },
    methods: {
        login: function () {
            if (this.name) {
                this.$router.push({ name: 'chat', params: { name: this.name } });
            } else {
                this.errorText = 'Por favor ingresa tu nombre primero';
            }
        }
    },
    template: `<div>
                <v-card>
                    <v-card-title>Login</v-card-title>
                    
                    <v-card-text>
                        <v-text-field
                            v-model="name"
                            label="Por favor ingresa tu nombre..."
                            outlined
                        ></v-text-field>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="primary" @click="login">Ingresar al chat</v-btn>
                    </v-card-actions>
                </v-card>

                <v-dialog v-model="errorText">
                    <v-card>
                        <v-card-text>{{ errorText }}</v-card-text>

                        <v-card-actions>
                            <v-btn text color="error" @click="errorText = null">Cerrar</v-btn>
                        </v-card-actions>
                    </v-card>                
                </v-dialog>
            </div>`
};

export default Login;