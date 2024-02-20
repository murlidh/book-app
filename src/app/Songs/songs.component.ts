import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SongsService } from '../Songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  data: any;
  songs: any;
  playlist: any;
  filteredSongs: any[] = [];
  songList$: Observable<any[]> | undefined;
  linksByPlatform$: Observable<any> | undefined;
Object: any;

  constructor(private SongsService: SongsService, private http: HttpClient) {}
  ngOnInit(): void {
    this.songList$ = this.SongsService.getSongList();
    this.SongsService.getSongList().subscribe((Response) => {
      this.data = Response;
      console.log(this.data);
    });

    this.SongsService.getGet().subscribe((Response) => {
      this.data = Response;
      console.log(this.data);
      this.songs = this.data.entitiesByUniqueId;
      console.log(this.songs);
      this.playlist = this.data.linksByPlatform;
      console.log(this.playlist);
    });
    this.SongsService.getGet().subscribe(response => {
      this.songList$ = response.songList;
      this.linksByPlatform$ = response.linksByPlatform;
      console.log(this.linksByPlatform$)
    });
  }
  }

