import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  average: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getBooks().subscribe((series) => {
      this.series = series;

      let sum = 0;
      series.map(s => {sum += s.seasons});
      this.average = sum / series.length;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
