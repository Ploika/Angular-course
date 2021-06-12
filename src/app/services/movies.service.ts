import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getMovie(index: number): Observable<any[]>{
    return this.httpClient.get<any[]>(`https://api.themoviedb.org/3/discover/movie?api_key=fd367116167a93ae0f01249874ae7c9b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${index}&with_watch_monetization_types=flatrate`, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDM2NzExNjE2N2E5M2FlMGYwMTI0OTg3NGFlN2M5YiIsInN1YiI6IjYwYzQ3MzFkYTc2YWM1MDA2ZDlkYWJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tkk18zoAJFQ3B1KaLbwGeUetNCFnSLjaDgshpE8Sy9M'
      })
    })
  }

}


