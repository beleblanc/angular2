import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent {
    private heading: string;
    private text: string;
    private buttonText: string;
    private btnUrl: string;

    constructor() {
        this.heading= 'Hello World!';
        this.text = 'This is a template for a simple marketing or information block';
        this.buttonText = 'Read More';
        this.btnUrl = 'http://test.com';
    }

}