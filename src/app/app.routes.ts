import { Routes } from '@angular/router';
import { LoginpageComponent } from '../components/loginpage/loginpage.component';
import { HomepageComponent } from '../components/homepage/homepage.component';

export const routes: Routes = [
    {
        path: 'login',
        component:LoginpageComponent
    },
    {
        path: '',
        component: HomepageComponent
    }
];
