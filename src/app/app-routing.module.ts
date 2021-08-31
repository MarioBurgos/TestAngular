import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/panel/home',
    pathMatch: 'full'
  },
  {
    path: 'panel',
    component: SkeletonComponent,
    children: [
      {
        path: 'user',
        loadChildren: ()=> import('@modules/user/user.module').then((m)=>m.UserModule)
      },
      {
        path: 'home',
        loadChildren: ()=> import('@modules/pages/pages.module').then((n)=>n.PagesModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/panel/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
