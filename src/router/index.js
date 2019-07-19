import VueRouter from 'vue-router'
import BoardList from '@/components/BoardList'
import ShowBoard from '@/components/ShowBoard'
import AddBoard from '@/components/AddBoard'
import EditBoard from '@/components/EditBoard'

export default new VueRouter({
    routes: [
        {
            path : '/',
            name : 'BoardList',
            component : BoardList
        },
        {
            path : '/',
            name : 'ShowBoard',
            component : ShowBoard
        },
        {
            path : '/',
            name : 'AddBoard',      
            component : AddBoard
        },
        {
            path : '/',
            name : 'EditBoard',
            component : EditBoard
        }
    ]
})
