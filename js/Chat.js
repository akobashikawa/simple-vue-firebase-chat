const Chat = {
    name: 'chat',
    data() {
        return {

        };
    },
    template: `<div>
                <v-card>
                    <v-card-title>
                        <v-icon large class="mx-3">chat_bubble_outline</v-icon>
                        My username
                    </v-card-title>
                    <v-card-text>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>
                                    [username]: Hola 
                                </v-list-item-title>
                                <v-list-item-subtitle>12:05:55 AM</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <v-row class="mx-2">
                            <v-text-field
                                label="Ingresa el mensaje..."
                                outlined
                            ></v-text-field>
                            <v-btn class="mx-2" fab dark color="primary">
                                <v-icon dark>send</v-icon>
                            </v-btn>
                        </v-row>
                    </v-card-text>
                </v-card>
            </div>`
};

export default Chat;