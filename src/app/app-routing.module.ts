import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'authorize', loadChildren: () => import('./authorize/authorize.module').then(m => m.AuthorizeModule)},
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule), canActivate: [AuthGuard] },
  { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule), canActivate: [AuthGuard] },
  { path: 'denunciation-form', loadChildren: () => import('./request-form/request-form.module').then(m => m.RequestFormModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: 'authorize', pathMatch: 'full' },
  { path: '**', redirectTo: 'authorize' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
