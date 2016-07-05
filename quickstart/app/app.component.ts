import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, ROUTER_DIRECTIVES} from '@angular/router'
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';


@Component({
    directives: [NavbarComponent, JumbotronComponent, HomeComponent, AboutComponent, ROUTER_DIRECTIVES, RouterOutlet, RouterLink],
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <jumbotron></jumbotron>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        `
})

export class AppComponent { }