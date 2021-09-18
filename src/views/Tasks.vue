<template>
    <v-container fluid>
        <addTaskDialog
            v-model="addTaskDialogBox"
            :value='editTaskData'/>
        <v-card class="grey lighten-3 mt-3 pa-3">
            <v-row>
                <v-col lg="2" md="3">
                    <v-btn width="100%" @click="addingTaskDialog" class="primary mt-3">Add Task
                        <v-icon>
                        mdi-plus
                        </v-icon>
                    </v-btn>
                </v-col>
                <v-col lg="3" md="3">
                    <v-btn dark width="100%" color="teal" @click="removeAllCompleted" class=" mt-3">
                    Remove all completed
                    <v-icon>
                        mdi-delete
                    </v-icon>
                    </v-btn>
                </v-col>
                <v-col lg="2" md="3">
                    <v-select
                    v-model="sortBy"
                    label="SortBy"
                    inline
                    :items="items"/>
                </v-col>
                <v-col lg="3" md="3">
                    <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                    @change="getTasks"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-card>
        <v-container >
        <task-header/>
        <v-card v-for="(task,index) in getTasks"
        :key="index">
            <Task :task="task" />
        </v-card>
        </v-container>
    </v-container>
</template>
<script>
import addTaskDialog from '../components/AddTaskDialog.vue'
import taskHeader from '../components/TaskHeader.vue'
import Task from '../components/Task.vue'
export default {
    data() {
        return {
        sortBy: 'All',
        items: ['All','Completed','Active'],
        editTaskData: {
            userId: this.getUserId(),
            title: '',
            description: '',
            status: false
        },
        addTaskDialogBox : false,
        search: ''
        }
    },
    components: {
        addTaskDialog,
        taskHeader,
        Task
    },
    computed: {
        Tasks() {
            return this.$store.state.tasks
        },
        getTasks() {
            const tasks = this.Tasks 
            let result = []
            if(this.sortBy === 'Completed') {
                result = tasks.filter(task => {
                return task.status === true && (task.title.includes(this.search) || task.description.includes(this.search))
                })
            }
            if (this.sortBy === 'Active') {
                result = tasks.filter(task => {
                    return task.status === false && (task.title.includes(this.search) || task.description.includes(this.search))
                })
            }
            if (this.sortBy === 'All') {
                result = tasks.filter(task => {
                    return task.title.includes(this.search) || task.description.includes(this.search)
                })
            }
            
            return result
        }
    },
    methods: {
        removeAllCompleted () {
            this.$store.dispatch('deleteCompletedItems')
        },
        resetTaskDialog () {
            this.editTaskData.title = '',
            this.editTaskData.description = ''
        },
        addingTaskDialog () {
            this.resetTaskDialog()
            this.addTaskDialogBox=true
        },
        getUserId() {
            return this.$store.state.user.id
        }
    },
    mounted () {
        this.$store.dispatch('loadItems')
    }
}
</script>