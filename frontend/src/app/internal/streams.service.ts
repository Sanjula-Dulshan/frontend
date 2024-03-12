import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StreamsService {
  constructor(private http: HttpClient) {}

  url: string = 'https://localhost:7148/api/Stream';

  getStreams() {
    return this.http.get(this.url);
  }
}
