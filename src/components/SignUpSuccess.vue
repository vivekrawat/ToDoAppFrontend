<template>
  <div>
    <v-dialog
      v-model = "edit"
      persistent
      max-width="300px"
      @click:outside="$emit('change', false)"
    >
      <v-card class="rounded-xl py-4">
        <v-card-text >
            <p align="center">
                <v-icon x-large color="green darken-2">mdi-check-circle</v-icon>
            </p>
            <span class="body-1 green--text">
            Your account was created successfully
            </span>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['edit'],
  model: {
    prop: 'edit',
    event: 'change'
  }
}
</script>