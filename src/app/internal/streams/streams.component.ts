import { Component, OnInit } from '@angular/core';
import { StreamsService } from '../streams.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss'],
})
export class StreamsComponent implements OnInit {
  streams: any[] = [];

  constructor(private streamService: StreamsService) {}

  ngOnInit(): void {
    this.streamService.getStreams().subscribe((data) => {
      this.streams = data;
    });
  }
}
