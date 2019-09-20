import ClassManage from "@/views/base/ClassManage.vue";
import ModifyPassword from '@/views/base/ModifyPassword.vue';
import StudentManage from '@/views/base/StudentManage.vue';
import TeacherManage from '@/views/base/TeacherManage.vue';

export default[
    //  {
    //     path: "/ClassManage",
    //     component: () =>
    //       import("@/views/base/ClassManage.vue"),
    //   },
    //   {
    //     path: "/ModifyPassword",
    //     component: () =>
    //       import("@/views/base/ModifyPassword.vue"),
    //   },
    //   {
    //     path: "/StudentManage",
    //     component: () =>
    //       import("@/views/base/StudentManage.vue"),
    //   },
    //   {
    //     path: "/TeacherManage",
    //     component: () =>
    //       import("@/views/base/TeacherManage.vue"),
    //   }
    {
        path:'/ClassManage',
        component:ClassManage
    },
    {
        path:'/ModifyPassword',
        component:ModifyPassword
    },
    {
        path:'/StudentManage',
        component:StudentManage
    },
    {
        path:'/TeacherManage',
        component:TeacherManage
    }
]
    
        
     
 
