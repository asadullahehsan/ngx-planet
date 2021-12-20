import { Route } from '@angular/router';
import { EmptyComponent } from 'ngx-planet';
import { InitializedDataResolver } from './services/initialized-data.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppActualRootComponent } from './root/root.component';
import { ProjectsComponent } from './projects/projects.component';

export const routers: Route[] = [
    {
        path: 'app1',
        component: AppActualRootComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'users',
                loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
            },
            {
                path: 'projects',
                resolve: {
                    data: InitializedDataResolver
                },
                component: ProjectsComponent
            }
            // {
            //     path: 'users',
            //     component: UserListComponent,
            //     children: [
            //         {
            //             path: ':id',
            //             component: UserDetailComponent
            //         }
            //     ]
            // }
        ]
    },
    {
        path: '**',
        component: EmptyComponent
    }
];
