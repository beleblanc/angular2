import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ProfileComponent } from './components/profile.component'
import { GithubService } from './services/github.service'


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    directives: [ProfileComponent],
    providers: [GithubService, HTTP_PROVIDERS]
})
export class AppComponent { }
