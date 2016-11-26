import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
		<h1>Editing data in a form</h1>
		<!-- Static 'main menu'. Always visible-->
		<!-- Add routerLink directive. Angular replaces this with correct <a href="..."> -->
		<a routerLink="/home" class="btn btn-primary">List of cities</a>
		<hr>
		<!-- Dynamically inject views here -->
		<router-outlet></router-outlet>
		<!-- Static footer here. Always visible-->
		<hr>
		<p class="text-center">Copyright (C) 2016 - info@kassenaar.com</p>
		`
})
export class MainComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
