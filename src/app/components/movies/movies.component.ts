import {Component, Input, OnInit,OnChanges,SimpleChanges, AfterViewInit, OnDestroy, DoCheck} from '@angular/core'
import { MovieType } from 'src/app/models/movie-type.enum';
import { Movie } from '../../models/movie.interface';

@Component({
    selector:"app-movies",
    templateUrl: "./movies.component.html",
    styleUrls: ["./movies.component.scss"],
})

export class MoviesComponent implements OnInit, OnChanges,AfterViewInit, OnDestroy {
    title = "Movie componeten works";
    
    public listOfMovies: Movie[] = [
        {
            name: "Captin America",
            mainChar: "steve rogers",
            rating: 7.5,
            releaseDate: new Date(),
            type: MovieType.Action
        },
        {
            name: "Spiderman",
            mainChar: "Peter Parker",
            rating: 8.5,
            releaseDate: new Date(2018,11,20),
            type: MovieType.Drama
        },
        {
            name: "Gurdians",
            mainChar: "Peter",
            rating: 6.5,
            releaseDate: new Date(2014,8,20),
            type: MovieType.Action
        }
    ]

    public deleteMovie(movieIndex:number):void{
        this.listOfMovies.splice(movieIndex, 1);
    }
    
    ngOnInit() {
        console.log("movies on init");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    ngAfterViewInit(){
        console.log("after view init")
    }

    ngOnDestroy() {
        console.log("On Destroy")
    }
    
}