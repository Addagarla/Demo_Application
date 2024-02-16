import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
 
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css'
})
export class StocksComponent {
  chartOptions = {
    animationEnabled: true,
    title:{
      text: "Energy Consumption"
    },
    axisX: {
      labelTextAlign: "center"
    },
    axisY: {
      title: "Energy Consumption (in USD)",
      prefix: "$",
      interval: 10
    },
    data: [{
      type: "boxAndWhisker",
      upperBoxColor: "#90CAF9",
      lowerBoxColor: "#FFAB91",
      color: "black",
      yValueFormatString: "$#,##0",
      dataPoints: [
        // { label: "HVAC", y: [43.43, 52.36, 62.62, 114.58, 152.08] },
        { label: "Dryer", y: [8.54, 9.69, 11.76, 14.47, 18.19] },
        { label: "Range", y: [3.56, 5.09, 6.01, 8.43, 11.44] },	
        { label: "Kitchen", y: [3.56, 4.24, 5.01, 7.18, 9.54] },
        { label: "BedRoom-1", y: [4.27, 5.09, 6.01, 8.91, 11.44] },
        { label: "Living Room", y: [3.20, 3.81, 4.51, 7.18, 8.58] },
        { label: "BedRoom-2", y: [3.92, 4.66, 5.51, 8.67, 10.49] }
      ]
    }]
  }
}                      