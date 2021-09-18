<template>
    <form>
    <v-text-field
      v-model="data.email"
      prepend-icon="mdi-at"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
        v-model="data.password"
        label="Password"
        name="password"
        prepend-icon="mdi-lock"
        type="password"
    />
    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
  </form>
</template>
<script>

  export default {
    data: () => ({
      data: {
        email: '',
        password: '',
      }
    }),
    computed: {
      
    },
    methods: {
      submit () {
        fetch('http://localhost:3000/api' + '/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(this.data)
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(data => {
          // console.log(data)
           localStorage.setItem('token', data.accessToken)
          this.$store.state.user.token = data.accessToken
          localStorage.setItem('id', data.id)
          this.$store.state.user.id = data.id
          localStorage.setItem('email', data.email)
          this.$store.state.user.email = data.email
          this.$router.replace({ path: 'tasks' })
        })
      }
    },
  }
</script>