// IMPORTS
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";

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
		return this.http.get<any>(`${environment.server.baseUrl}/api/bdays`).pipe(
			catchError(error =>  throwError(() => new Error(error.message))),
		);

	};

}