import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  peliculas: Movie[] = []
  seachesId: string[] = [
    "tt12412888", // sonic 2
    "tt1877830",//the batman
    "tt9419884", //doctor strange
    "tt8097030", //red
    "tt5834426", //moonfall
    "tt5108870" // morbius
  ]

  constructor(private moviesService:MoviesService) {
    var indice = 0
    let timerId = setInterval(() => {
        this.moviesService.getMovie(this.seachesId[indice]).subscribe(
            (data) => {
                var nueva = new Movie(
                    data.id,
                    data.title,
                    data.image,
                    data.description.substring(0,200) + "...",
                    data.genres,
                    data.rating,
                    data.runtime
                )
                this.peliculas.push(nueva)
            }
        )
        indice++
        if(indice >= this.seachesId.length) clearInterval(timerId)
    }, 250);
  }


 

  ngOnInit(): void {
  }

}
