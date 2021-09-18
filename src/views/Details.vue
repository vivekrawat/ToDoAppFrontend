<template>
    <v-container>
        <editTaskDialog
        v-model="editTaskDialogBox"
        :value="Task"/>
        <v-card class="pa-4 blue-grey--text">
            <v-row class="my-4">
            <v-col lg="3" md="3">
                <v-btn  width="100%" class="primary" @click="changeEditTaskDialogBox">Edit Task</v-btn>
            </v-col>
            <v-col lg="3" md="3">
                <v-btn width="100%" class="warning" @click="deleteTask">Delete Task</v-btn>
            </v-col>
            </v-row>
            <p><span class="font-weight-medium">Title : </span>{{Task.title}}</p>
            <p><span class="font-weight-medium">Description : </span>{{Task.description}}</p>
            <p><span class="font-weight-medium">Status : </span>
            <span v-if="Task.status===true">Completed</span>
            <span v-if="Task.status===false">Active</span>
            </p>
            <p><span class="font-weight-medium">Added At : </span>{{Task.createdAt.slice(0,10)}}</p>
        </v-card>
    </v-container>
</template>
<script>
import editTaskDialog from '../components/AddTaskDialog'
export default {
    data() {
        return {
            editTaskDialogBox: false,
        }
    },
    computed: {
        Task() {
            return this.$store.state.task
        }
    },
    components: {
        editTaskDialog
    },
    methods : {
        deleteTask () {
            this.$store.dispatch('deleteItem',this.Task.id)
        },
        changeEditTaskDialogBox () {
            this.editTaskDialogBox = true
        }
    }
}
</script>