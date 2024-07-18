import { Routes } from '@angular/router';

export const routes: Routes = [

    // NOTA: Todos los componentes tienen que estar en 'export default' para que funcione esta forma del loadComponent
    // Se puede hacer de la forma tradicional tambien, usando el .then
    {
        path: 'dashboard',
        // loadComponent: () => import('./dashboard/dashboard.component').then( c=> c.DashboardComponent ), 
        loadComponent: () => import('./dashboard/dashboard.component'), // de esta forma dashboard.component tiene que ser 'export default'
        children: [
            {
                path: 'change-detection',
                title: 'Change detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
            },
            {
                path: 'control-flow',
                title: 'Control Flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
            },
            {
                path: 'defer-options',
                title: 'Defer Options',
                loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
            },
            {
                path: 'defer-views',
                title: 'Defer views',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
            },
            {
                path: 'user/:id',
                title: 'User',
                loadComponent: () => import('./dashboard/pages/user/user.component'),
            },
            {
                path: 'user-list',
                title: 'User List',
                loadComponent: () => import('./dashboard/pages/users/users.component'),
            },
            {
                path: 'view-transition-1',
                title: 'View Transition 1',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component'),
            },
            {
                path: 'view-transition-2',
                title: 'View Transition 2',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component'),
            },
            {
                path: '',
                redirectTo: 'control-flow',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
