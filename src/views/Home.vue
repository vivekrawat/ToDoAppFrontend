<template>
    <v-container  fluid>
        <v-row>
            <v-col md="6">
                <v-img
                contain
                width="100%"
                src="../assets/toDo.png"/>
            </v-col>
            <v-col>
                <v-sheet class="pa-4 white--text ma-4">
                    <v-tabs
                    v-model="tab"
                    dark
                    rounded
                    background-color="black"
                    slider-color="primary"
                    slider-size="6">
                    <v-tab rounded>
                        <v-icon>mdi-login</v-icon>
                            <span class="pa-2"> Login </span>
                    </v-tab>
                    <v-tab>
                        <v-icon>mdi-account-plus</v-icon>
                        <span class="pa-2"> Signup </span>
                    </v-tab>
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <login/>
                        </v-tab-item>
                        <v-tab-item>
                            <signup/>
                        </v-tab-item>
                    </v-tabs-items>
                    </v-tabs>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import login from '../components/Login.vue'
import signup from '../components/Signup.vue'
export default {
    data() {
        return {
            tab: null
        }
    },
    name: 'Home',
    components: {
        login,
        signup
    }
}
</script>