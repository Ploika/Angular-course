import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private genres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=fd367116167a93ae0f01249874ae7c9b&language=en-US';
  constructor(private httpClient: HttpClient) { }
  getGenres(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.genres, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDM2NzExNjE2N2E5M2FlMGYwMTI0OTg3NGFlN2M5YiIsInN1YiI6IjYwYzQ3MzFkYTc2YWM1MDA2ZDlkYWJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tkk18zoAJFQ3B1KaLbwGeUetNCFnSLjaDgshpE8Sy9M'
      })
    })
  }
}
