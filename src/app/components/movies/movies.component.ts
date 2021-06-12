import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[]
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {


      this.movieService.getMovie(1).subscribe(value => {
        const arr =[]
        for(let key in value){
          // console.log(value[key])
          arr.push(value[key])
        }
        this.movies = arr[1]
        console.log(this.movies)
      })

  }

}
