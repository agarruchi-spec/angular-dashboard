import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetConfig } from '../../models/widget';

@Component({
  selector: 'app-chart-widget',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas></canvas>`
})
export class ChartWidgetComponent implements OnInit {
  @Input() config!: WidgetConfig;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    // super-minimal chart without external libs: draw bars on canvas
    const canvas: HTMLCanvasElement = this.el.nativeElement.querySelector('canvas');
    canvas.width = canvas.parentElement?.clientWidth || 400;
    canvas.height = (this.config.rows || 4) * 80 - 40;
    const ctx = canvas.getContext('2d')!;
    const data: number[] = this.config.inputs?.['series'] ?? [5,10,7,12,9,14];
    const max = Math.max(...data) || 1;
    const barWidth = canvas.width / data.length - 10;
    data.forEach((v, i) => {
      const h = (v / max) * (canvas.height - 20);
      ctx.fillStyle = '#4f46e5';
      ctx.fillRect(i*(barWidth+10)+5, canvas.height - h - 10, barWidth, h);
    });
  }
}
