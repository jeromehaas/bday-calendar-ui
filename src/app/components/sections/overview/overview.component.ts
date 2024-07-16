// IMPORTS
import {Component, OnInit} from '@angular/core';
import {BdayService} from "../../../services/bday.service";
import {DatePipe} from "@angular/common";
import {CommonModule} from "@angular/common";

// COMPONENT
@Component({
	selector: 'app-overview',
	standalone: true,
	imports: [DatePipe, CommonModule],
	templateUrl: './overview.component.html',
	styleUrl: './overview.component.scss'
})

// OVERVIEW COMPONENT
export class OverviewComponent implements OnInit {

	// CONSTRUCTOR
	constructor(
		private bdayService: BdayService,
	) {}


	// STATE
	bdays: any = [];

	// ON INIT
	ngOnInit(): void {

		// FETCH BDAYS
		this.bdayService.fetchBdays().subscribe({

			// HANDLE DATA
			next: ({data}) => {

				// UPDATE STATE
				this.bdays = data.bdays;

			},

		});

	};

}
