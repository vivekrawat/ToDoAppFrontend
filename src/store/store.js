import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: {
          name: localStorage.getItem('name'),
          email: localStorage.getItem('email'),
          token: localStorage.getItem('token'),
          id: localStorage.getItem('id')
        },
        backendUrl: 'http://localhost:3000/api',
        tasks: [],
        task : {}
    },
    actions: {
        loadItems () {
            fetch('http://localhost:3000/api/task/'+this.state.user.id, {
              headers: {
                'Access-Control-Allow-Origin': '*',
                Accept: '*/*',
                'content-Type': 'application/json'
              }
            })
              .then(response => response.json())
              .then(data => {
                console.log(data)
                this.state.tasks = data
              })
          },
          deleteCompletedItems () {
            fetch('http://localhost:3000/api/task/del/', {
              method: 'DELETE',
              headers: {
                'Access-Control-Allow-Origin': '*',
                Accept: '*/*',
                'content-Type': 'application/json'
              }
            })
            .then(res => res.text())
            .then((data)=> {
              console.log(data)
              router.go()
            })
          },
          deleteItem (action, taskid) {
            fetch('http://localhost:3000/api/task/deleteTask/'+ taskid, {
              method: 'DELETE',
              headers: {
                'Access-Control-Allow-Origin': '*',
                Accept: '*/*',
                'content-Type': 'application/json'
              }
            })
            .then(res => res.text())
            .then((data)=> {
              console.log(data)
              router.replace({ path: 'tasks' })
            })
          },
          toggleTaskStatus (action,obj) {
            // console.log(status)
            fetch('http://localhost:3000/api/task/toggle/' + obj.id + '/' + obj.status, {
              method: 'PUT',
              headers: {
                'Access-Control-Allow-Origin': '*',
                Accept: '*/*',
                'content-Type': 'application/json'
              }
            })
            .then(res => res.text())
            .then(data=>console.log(data))
          },
          editTask (action,data) {
            console.log(data)
            fetch('http://localhost:3000/api/task/editTask/'+ data.id + '/' + data.title+ '/' + data.description,{
              method: 'PUT',
              header: {
                'Access-Control-Allow-Origin': '*',
                Accept: '*/*',
                'content-Type': 'application/json'
              },
              // body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then((dat) => {
              console.log(dat)
              router.replace({ path: 'tasks' })
            })
          }
    }
})