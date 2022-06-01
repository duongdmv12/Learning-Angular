import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, Plugin, registerables } from 'chart.js';

import { randomData } from '../functions/app.function';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {

  private chartInstance?: Chart;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const me = this;
    me.initChart();
  }

  private initChart(): void {
    const me = this;
    const interval = setInterval(() => {
      const chartEl = document.getElementById('chartId') as HTMLCanvasElement;
      if (!!chartEl) {
        const ctx = chartEl.getContext('2d');
        if (ctx) {
          const options = me.getConfigOptionsChart();
          const data = me.getDataChart();
          me.chartInstance = new Chart(ctx, {
            type: 'line',
            data,
            options
          });
          clearInterval(interval);
        }
      }
    }, 10);
  }

  private updateDatasetsChart(): void {

  }

  private getDataChart() {
    const me = this;
    const datasets = me.getDatasetsChart();
    const labels = me.getLabelsChart();
    return {
      labels,
      datasets
    }
  }

  private getDatasetsChart() {
    const fakeDatasets = [
      {
        label: 'New Patients ',
        data: [
          ...Array(20).fill(1).map(item => randomData(0, 10))
        ],
        backgroundColor: ['#8146FF'],
        borderColor: '#8146FF',
        tension: 0.5
      },
      {
        label: 'Old Patients',
        data: [
          ...Array(20).fill(1).map(item => randomData(0, 10))
        ],
        backgroundColor: ['#0075FF'],
        borderColor: '#0075FF',
        tension: 0.5
      }
    ];
    return fakeDatasets;
  }

  private getLabelsChart() {
    const labels: string[] = [];
    Array(12).fill(0).map((_, index: number) => {
      const monthName = new Date();
      monthName.setMonth(index);
      labels.push(monthName.toLocaleDateString('default', { month: 'short' }))
    });
    return labels;
  }

  private getConfigOptionsChart() {
    const me = this;
    const plugins = me.getConfigPluginsChart();
    return {
      responsive: true,
      plugins,
      scales: {
        x: {
        },
        y: {
          grid: {
            display: false
          }
        }
      }
    };
  }

  private getConfigPluginsChart() {
    return {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded'
        }
      }
    };
  }

}
