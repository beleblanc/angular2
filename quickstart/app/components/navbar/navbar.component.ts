import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router'

@Component({
    selector: 'navbar',
    template: `
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                {{projectName}}
              </a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li><a [routerLink]="['/home']">Home</a></li>
                <li><a [routerLink]="['/about']">About</a></li>
              </ul>
                </div>
          </div>
        </nav>
    `,
    directives: [ RouterLink, RouterOutlet, ROUTER_DIRECTIVES ]
})

export class NavbarComponent {
    private projectName: string;

    constructor() {
        this.projectName = 'My website';
    }

}