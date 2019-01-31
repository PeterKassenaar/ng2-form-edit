import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
		<h1>Editing data in a form</h1>
		<!-- Static 'main menu'. Always visible-->
		<!-- Add routerLink directive. Angular replaces this with correct <a href="..."> -->
		<a routerLink="/home" class="btn btn-primary">List of cities</a>
		<a routerLink="/add" class="btn btn-primary">Add new city</a>
		<hr>
		<!-- Dynamically inject views here -->
		<router-outlet></router-outlet>
		<!-- Static footer here. Always visible-->
		<hr>
		<p class="text-center">Copyright (C) 2019 - info@kassenaar.com</p>
		`
})
export class MainComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
