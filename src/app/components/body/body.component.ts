import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  nombre: any;
  comentario: any;

  constructor() { }

  ngOnInit(): void {
  }

  agregarComentario(){
    console.log(this.nombre);
    console.log(this.comentario);
  }

}
