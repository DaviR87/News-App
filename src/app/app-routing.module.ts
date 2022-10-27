import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProveComponent } from './pages/prove/prove.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'news', component: NewsComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'prove', component: ProveComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
