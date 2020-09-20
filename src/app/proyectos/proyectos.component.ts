import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.sass']
})
export class ProyectosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    //REQUEST
    this.http.get<any>('https://int-sendemail.herokuapp.com/init').subscribe(
      async (response) => {

      })

    //REQUEST
    this.http.get<any>('https://int-cloudproton.herokuapp.com/init').subscribe(
      async (response) => {

      })
    
  }

  

}
 