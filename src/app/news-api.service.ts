import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'abcb7691302d44818f9e994bc38c716a';

  constructor(private http:HttpClient) { }

 newsApi="https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=abcb7691302d44818f9e994bc38c716a";

top():Observable<any>{
  return this.http.get(this.newsApi);
}
}
