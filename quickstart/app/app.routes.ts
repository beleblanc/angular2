import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent} from './components/pages/home.component'
import { AboutComponent} from './components/pages/about.component'

const routes: RouterConfig = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];


export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];