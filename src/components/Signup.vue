<template>
    <form>
      <Success
      v-model="successDialogBox"
      />
    <v-text-field
      v-model="data.name"
      :counter="18"
      prepend-icon="mdi-account"
      label="Name"
      required
    ></v-text-field>
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

    <v-text-field
        v-model="confirmPassword"
        label="Confirm Password"
        name="confirmPassword"
        prepend-icon="mdi-lock"
        type="password"
    />
    <v-btn
      class="mr-4 primary"
      @click="submit"
      elevation="3"

    >
      submit
    </v-btn>
  </form>
</template>
<script>
import Success from './SignUpSuccess'
  export default {
    data: () => ({
      data: {
        name: '',
        email: '',
        password: ''
      },
    confirmPassword: '',
    successDialogBox: false
    }),

    computed: {
      
    },
    components: {
      Success
    },
    methods: {
      submit () {
        fetch('http://localhost:3000/api' + '/signup', {
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
              console.log('success')
              this.successDialogBox = true
          }
        })
      }
    },
  }
</script>