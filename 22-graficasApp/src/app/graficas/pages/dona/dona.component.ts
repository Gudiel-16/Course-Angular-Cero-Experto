import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'others' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { label: 'dataset 1',
        data: [ 350, 450, 100, 98 ], 
        backgroundColor: [ // asignando colores
          '#0075ED',
          '#00BAF7',
          '#00E0DB',
          '#00F7AD',
          '#00ED63',
        ] 
      },
      { label: 'dataset 2', 
        data: [ 50, 150, 120, 70 ],
        backgroundColor: [
          '#0075ED',
          '#00BAF7',
          '#00E0DB',
          '#00F7AD',
          '#00ED63',
        ] 
      },
      { label: 'dataset 3',
        data: [ 250, 130, 70, 80 ],
        backgroundColor: [ // asignando colores
          '#0075ED',
          '#00BAF7',
          '#00E0DB',
          '#00F7AD',
          '#00ED63',
        ] 
      }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

}
