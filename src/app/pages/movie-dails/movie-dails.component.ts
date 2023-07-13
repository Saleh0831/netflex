import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-movie-dails',
  templateUrl: './movie-dails.component.html',
  styleUrls: ['./movie-dails.component.scss']
})
export class MovieDailsComponent implements OnInit {

  constructor(private service:MovieApiService,private router:Router,private route:ActivatedRoute){}
  getMovieDatailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  ngOnInit(): void {
    let getParamId = this.route.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result:any)=>{
      console.log(result);
      
      this.getMovieDatailResult = result;
      
    })
  }

  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,'getMovieVideo#');
      result.results.forEach((element:any) => {
          if(element.type=="Trailer")
          {
            this.getMovieVideoResult = element.key;
          }
      });

  });
  }

  getMovieCast(id:any)
  {
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }

}

