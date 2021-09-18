<template>
    <v-dialog
    v-model = "edit"
    persistent
    max-width="700px"
    @click:outside="$emit('change', false)"
    >
    <v-container class="white">
        <h1 class="blue white--text pa-2 mb-4 headline" align="center">Add Task</h1>
        <form>
            <v-text-field
                v-model="value.title"
                label="Title"
                required
                class="grey lighten-3 my-3"
                elevation="2"
            ></v-text-field>
            <v-textarea
                v-model="value.description"
                label="Description"
                filles auto-grow
                class="grey lighten-3 my-3"
                name="description"
            />
            <v-btn
                class="mr-4 primary"
                @click="submit"
            >
            Save
            </v-btn>
        </form>
    </v-container>
    </v-dialog>
</template>
<script>
export default {
  props: ['edit', 'value'],
  model: {
    prop: 'edit',
    event: 'change'
  },
  methods: {
    editTask () {
      const data= {
        id: this.value.id,
        title: this.value.title,
        description: this.value.description
      }
      this.$store.dispatch('editTask',data)
    },
    addTask () {
      fetch('http://localhost:3000/api/task', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(this.value)
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(data => {
          console.log(data)
        })
        console.log(this.value)
        this.$emit('change',false)
        this.$router.go()
    },
    submit () {
        if(this.value.id == null)
        {
          this.addTask()
        } else {
          this.editTask()
        }
    }
  }
}
</script>
