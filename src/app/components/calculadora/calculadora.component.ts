import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  total:number = 30;
  nicotina:number = 3;
  aroma:number = 10;
  vg:number = 50;
  pg:number = 50;
  nicokit:number = 20;
  nicokit_vg:number = 50;
  nicokit_pg:number = 50;

  cant_total = this.total;
  cant_aroma = this.aroma * this.total / 100;
  cant_nicokit = this.nicotina*this.cant_total/this.nicokit;
  cant_pg = this.pg * this.total / 100 - this.cant_aroma - this.cant_nicokit * this.nicokit_pg / 100;
  cant_vg = this.vg * this.total / 100 - this.cant_nicokit * this.nicokit_vg / 100;
  
  constructor() { }

  ngOnInit() {
  }

  public doughnutChartLabels:string[] = [
    'VG',
    'PG',
    'Aroma',
    'Nicotina'
  ];

  public doughnutChartData:number[] = [
    this.cant_vg,
    this.cant_pg,
    this.cant_aroma,
    this.cant_nicokit
  ];
  
  public doughnutChartType:string = 'doughnut';


  actualizarGrafica(){

    this.cant_total = this.total;
    this.cant_aroma = this.aroma * this.total / 100;
    this.cant_nicokit = this.nicotina*this.cant_total/this.nicokit;
    this.cant_pg = this.pg * this.total / 100 - this.cant_aroma - this.cant_nicokit * this.nicokit_pg / 100;
    this.cant_vg = this.vg * this.total / 100 - this.cant_nicokit * this.nicokit_vg / 100;

    this.doughnutChartData = [
      this.cant_vg,
      this.cant_pg,
      this.cant_aroma,
      this.cant_nicokit
    ];
    
 }

}
