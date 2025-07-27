import { RouterModule , Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
    {   path:'',
        component:CardsComponent,
        canActivate: [AuthGuard]
    },
    {   path:'login', 
        component:LoginComponent, 
        canActivate: [LoginGuard]
    }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
