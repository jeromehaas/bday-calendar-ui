// IMPORTS
import {Component} from '@angular/core';
import {SiteComponent} from "../../components/layouts/site/site.component";
import {OverviewComponent} from "../../components/sections/overview/overview.component";

// COMPONENT
@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [SiteComponent, OverviewComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})

// DASHBOARD COMPONENT
export class DashboardComponent {}
