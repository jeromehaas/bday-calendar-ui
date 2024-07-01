// IMPORTS
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// COMPONENT
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

// EXPORTS
export class AppComponent {
  title = 'bday-calendar-ui';
}
