import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StreamsService {
  constructor(private http: HttpClient) {}

  url: string = 'https://localhost:7177/api/stream';

  getStreams(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
