import { Routes } from '@angular/router';
import { LoginpageComponent } from '../components/loginpage/loginpage.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { loginGuard } from '../utils/guards/login.guard';

export const routes: Routes = [
    {
        path: 'login',
        component:LoginpageComponent,
        canActivate:[loginGuard]
    },
    {
        path: '',
        component: HomepageComponent
    }
];
