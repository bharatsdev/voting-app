import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vote } from '../_models/vote';
import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class VoterRestService{


  votingUrl: string = `http://${environment.VOTE_HOST}:${environment.VOTE_PROT}/vote`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
    console.log(this.votingUrl)

  }

  addVote(vote:Vote):Observable<Vote> {
    return this.http.post<Vote>(this.votingUrl,JSON.stringify(vote),this.httpOptions).pipe(catchError(this.errorHandler));
  }

  getAllWeather():Observable<Vote[]> {
    return this.http.get<Vote[]>(this.votingUrl).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
