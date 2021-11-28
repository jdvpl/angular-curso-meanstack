# angular-curso-meanstack
este es un proyecto del curso de meanstack udemy  https://www.udemy.com/course/introduccion-a-angular/learn/lecture/23038394#overview


* Crear app
* `ng new appComentarioFront`
* add routing **No**
* add CSS
* Correr app `ng serve`

---
### Instalar bulma
* Framework de css
* `npm i bulma --save`

### Crear componente
* `ng g c nombreComponente`
* compoente navbar `ng g c components/navbar`

---

### Data Binding 
* Es la forma que tiene angular para permitirnos mostrar contenido dinamico en lugar de estatico
* Es la comunicacion entre html y el typeScript (.ts)
#### tipos
* mostrar la informacion en el html desde el typeScript (interpolacion)
* Reaccionar a eventos del usuario.
* Combinar a la vez ambas formas de comunicacion ( two way data binding) => interpolacion y eventos

#### Interpolacion
=> {{nombre_Variable}} =<< ejemplo>>
* Muestra contenido dinamico en el HTML del componente.
* Ese contenido dinamico se expresan en variables en el typeScript del componente.
##### Ejemplo:

`
nombre: String ="kakaroto";
<p>{{nombre}}</p>

`
#### Event Binding:

* Comunicacion cuando se quiere reaccionar a un evento del usuario.

##### Ejemplo
=>(evento) ="funcionejecutar();" <<sintaxis>>
`
<button (click)="eliminar(num)"></button>

eliminar(inidice: any){
  console.log(indice);
  this.comentarios.splice(indice,1);
  console.llog(this.comentarios);
}
`

### Two Way Data Binding

* Manra de combinar las 2 formas de comunicacion o enlaces vistos anteriormente ( interpolacion y event binding)
==> Sintaxis `[(ngModel)] ="propiead a vincular del codigo TS"` <=== sintaxis

###### Ejemplo
`
nombre: any;
<input [(ngModel)]="nombre" (ngModelChange)="nombre" = $event />
`
---

###  arreglos
* `numero: number =6;`
* `nombre: String= "kakaroto";`
* `numeros: number[]= [1,2,3,4,52,8];`
* `nombres: String[]= ["asdf","jiose","jire"];`

### recorrer arreglos
* `let numeros=[4,2,5,6,7]
 for (var i=0; i<numeros.length; i++){
   console.log(this.numeros[i] + ", ")
 }
`

