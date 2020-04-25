import Vue from 'vue'
import Router from 'vue-router'

import dashboard from './components/dashboard/overview/Home.vue'
import overview from './components/dashboard/overview/overview.vue'

import user from './components/dashboard/user/Home.vue'
import userlist from './components/dashboard/user/userlist.vue'
import profile from './components/dashboard/user/profile.vue'


let onlyAdmin = [1,2]
let allUser = [1,2,3, 4]
let onlyGuest = ['customer']

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [

        {
            path: '/home',
            name: 'home',
            component: dashboard,
            meta: {
                icon: 'dashboard',
                title: "Dashboard",
                type: allUser,
                status: true,
            },
            children: [
                {
                    path: 'overview',
                    name: 'overview',
                    component: overview,
                    meta: {
                        icon: 'dashboard',
                        title: "Overview",
                        type: allUser,
                        status: true,
        
                    }
                },
                {
                    path: 'today',
                    name: 'today',
                    component: overview,
                    meta: {
                        icon: 'dashboard',
                        title: "Today",
                        type: allUser,
                        status: true,
        
                    }
                },
            ]

        },
        {
            path: '/user',
            name: 'user',
            component: user,
            meta: {
                icon: 'face',
                title: "User",
                type: allUser,
                status: true,
            },
            children: [
                {
                    path: 'list',
                    name: 'userlist',
                    component: userlist,
                    meta: {
                        icon: 'dashboard',
                        title: "User List",
                        type: onlyAdmin,
                        status: true,
        
                    }
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: profile,
                    meta: {
                        icon: 'dashboard',
                        title: "Profile",
                        type: allUser,
                        status: true,
        
                    }
                },
            ]

        },
       




    ]
})