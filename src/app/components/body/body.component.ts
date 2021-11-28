import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  nombre: any;
  comentario: any;

  comentarios: any[] =[
    {
    nombre:"Juan Daniel",
    alias:"@jdvpl",
    comentario:"Este es un comentario"
    },
    {
    nombre:"Juan kakaroto",
    alias:"@juanda554242",
    comentario:"Este es un comentario de juanda554242"
    },
    {
    nombre:"Juan Suarez",
    alias:"@juanda554243",
    comentario:"Este es un saitama kisamado"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  agregarComentario(){
    console.log(this.nombre);
    console.log(this.comentario);
  }

}
