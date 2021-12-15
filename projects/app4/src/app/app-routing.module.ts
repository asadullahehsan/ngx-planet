import { Route } from '@angular/router';
import { EmptyComponent } from 'ngx-planet';
import { AppComponent } from './app.component';

export const routers: Route[] = [
  // {
  //   path: 'projects/app4',
  //   component: AppComponent,    
  // },
  {
    path: '**',
    component: EmptyComponent
  }
];