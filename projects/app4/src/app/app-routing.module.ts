import { Route } from '@angular/router';
import { EmptyComponent } from 'ngx-planet';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';

export const routers: Route[] = [
  {
    path: 'projects/app4',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'component-one',
        pathMatch: 'full'
      },
      {
        path: 'component-one',        
        component: ComponentOneComponent
      },
      {
        path: 'component-two',        
        loadChildren: () => import('./component-two/component-two.module').then(m => m.ComponentTwoModule)        
      }
    ]
  },
  {
    path: '**',
    component: EmptyComponent
  }
];
