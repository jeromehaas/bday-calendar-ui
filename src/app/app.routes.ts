// IMPORTS
import {Routes} from '@angular/router';
import {OverviewComponent} from "./pages/overview/overview.component";

// EXPORTS
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
    },
    {
        path: 'overview',
        component: OverviewComponent,
    },
    {
        path: '**',
        redirectTo: '/overview',
    }
];
