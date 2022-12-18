import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;
  @Input() barChartLabels: string[] = [];
  @Input() barChartDataSets: any = [];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x' // orientacion de las barras
  };
  
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [], 
    datasets: [],
  };

  constructor() { }

  ngOnInit(): void {
    
    if( this.horizontal ){
      this.barChartOptions!.indexAxis = 'y'; // cambiamos orientacion, si envian true desde el otro componente
    }

    // asignamos para graficar
    this.barChartData.labels = this.barChartLabels;
    this.barChartData.datasets = this.barChartDataSets;
  }

}
