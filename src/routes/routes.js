import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import StudentList from 'src/pages/Student/list'
import StudentAddEdit from 'src/pages/Student/add-edit'
import StudentAttribute from 'src/pages/StudentAttribute/list'
import StudentAttributeAddEdit from 'src/pages/Student/add-edit'
import Overview from "src/pages/Overview";


const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'students',
        name: 'Students',
        component: StudentList
      },
      {
        path: 'student',
        name: 'addStudent',
        component: StudentAddEdit
      },
      {
        path: 'student/:id',
        name: 'updateStudent',
        component: StudentAddEdit
      },
      {
        path: 'student-attribute',
        name: 'Students',
        component: StudentAttribute
      },
      {
        path: 'student-attribute/:id',
        name: 'Student Attribute',
        component: StudentAttributeAddEdit
      },
      {
        path: 'overview',
        name: 'Dashboard',
        component: Overview
      },

    ]
  },
  {path: '*', component: NotFound}
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
