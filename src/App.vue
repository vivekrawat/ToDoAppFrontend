<template>
  <v-app>
    <v-card>
    <v-app-bar
    app
    elevation="0"
    class="blue mt-0 pa-0"
    clipped-left
    >
      <v-toolbar-title class="headline font-weight-medium white--text">To-Do-Application</v-toolbar-title>
      <v-chip absolute class="black my-2"></v-chip>
      <v-spacer/>
      <v-btn @click="logout" v-show="$store.state.user.id !== ''" class="body-1" dark outlined> Log Out</v-btn>
    </v-app-bar>
    </v-card>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
  methods: {
    logout() {
      this.$store.state.user.id = ''
      localStorage.setItem('id', '')
      localStorage.setItem('token', '')
      localStorage.setItem('email', '')
      this.$router.replace({path: '/'})
    }
  },
  data: () => ({
    //
  }),
};
</script>
