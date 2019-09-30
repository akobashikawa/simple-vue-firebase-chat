const App = Vue.component('app', {
    data() {
        return {
            drawer: false,
        };
    },
    template: `<v-app>
        <v-navigation-drawer app v-model="drawer">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Firebase Chat
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Menu
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item router to="/">
                    <v-list-item-icon>
                        <v-icon>home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/login">
                    <v-list-item-icon>
                        <v-icon>person</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/chat">
                    <v-list-item-icon>
                        <v-icon>chat</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Chat</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/about">
                    <v-list-item-icon>
                        <v-icon>info</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>About</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>

        <v-app-bar app color="light-blue darken-1" dark>
            <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                Firebase Chat
                <v-icon large class="mx-3">forum</v-icon>
            </v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>

        <v-footer app>
            201909 - @rulokoba - Firebase Chat
        </v-footer>
    </v-app>`
});

export default App;