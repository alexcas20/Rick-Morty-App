import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from '../app/pages/pages.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'pages', loadChildren: () => import('../app/pages/pages.module').then(m => PagesModule)},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
