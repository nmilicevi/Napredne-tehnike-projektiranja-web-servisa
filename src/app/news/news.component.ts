import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {



  constructor(private newsapi:NewsApiService,
    private route: ActivatedRoute){
        
  }

  topDisplay:any = [];

  ngOnInit() {
    this.newsapi.top().subscribe((result)=>{
      console.log(result);
      this.topDisplay=result.articles;
    })
    }

}
