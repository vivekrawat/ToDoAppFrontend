<template>
    <v-row elevation="1" class="ma-1">
        <v-col cols="7" class=" blue body-1 lighten-4">
            <v-btn height="100%" @click="taskDetails" class="blue lighten-4" width="100%" elevation='0'>{{task.title}}</v-btn>
        </v-col>
        <v-col cols="1">
            <v-checkbox
            class="my-0 pa-0"
            hide-details
            v-model="task.status"
            @change="onToggle"
            >
            </v-checkbox>
        </v-col>
        <v-col cols="4">
            <v-chip class="green" v-if="task.status === false">Active</v-chip>
            <v-chip class="warning" v-if="task.status === true">Completed</v-chip>
        </v-col>
    </v-row>

</template>
<script>
export default {
    props: ['task'],
    mounted () {
        console.log(this.task)
    },
    data () {
        return {

        }
    },
    methods: {
        taskDetails() {
            this.$store.state.task = this.task
            this.$router.replace({ path: 'details' })
            console.log(this.$store.state.task)
        },
        onToggle() {
            console.log(this.task.status)
            let obj = { id: this.task.id,status: this.task.status }
            this.$store.dispatch('toggleTaskStatus',obj)
        }
    }
}
</script>