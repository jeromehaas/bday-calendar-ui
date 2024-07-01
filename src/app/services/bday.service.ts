// IMPORTS
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

// INJECTABLE
@Injectable({
	providedIn: 'root'
})

// BDAY SERVICE
export class BdayService {

	// CONSTRUCTOR
	constructor(private http: HttpClient,) {
	};

	// FETCH BDAYS
	fetchBdays(): Observable<any> {

		// SEND REQUEST
		return this.http.get<any>('http://localhost:3000/api/bdays').pipe(
			catchError(error =>  throwError(() => new Error(error.message))),
		);

	};

}