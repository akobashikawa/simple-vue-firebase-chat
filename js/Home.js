const Home = {
    name: 'home',
    data() {
        return {

        };
    },
    template: `<div>
                <v-card>
                    <v-card-title>Home</v-card-title>
                    <v-card-text>
                    <p>{{ new Date() }}</p>
                    </v-card-text>
                </v-card>
            </div>`
};

export default Home;