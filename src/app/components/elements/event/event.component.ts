// IMPORTS
import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";

// COMPNENT
@Component({
  selector: 'app-event',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})

// EVENT COMPNENT
export class EventComponent {

	@Input() data: any = null;

}
