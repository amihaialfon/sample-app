import { Component, EventEmitter, Input, Output} from '@angular/core';
import { MovieType } from 'src/app/models/movie-type.enum';
import { Movie } from '../../models/movie.interface';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  constructor() { }

  get movieTypeEnum(){
    return MovieType
  }

  @Input() movie: Movie;
  @Input() borderWidth: number;
  @Input() movieIndex: number;

  @Output() onDeleteMovie: EventEmitter<number> = new EventEmitter();

  public deleteMovie(){
    this.onDeleteMovie.emit(this.movieIndex);
  }

}
