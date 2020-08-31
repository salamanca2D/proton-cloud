import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import Swal from 'sweetalert2'
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})


export class ContactComponent implements OnInit {
  
  //siteKey: string;
  public formModel: FormModel = {};

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {

  }

  ButtonSendD = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(3), 
    Validators.maxLength(50)
  ]);

  NameControl = new FormControl('', [
    Validators.required, 
    Validators.minLength(3), 
    Validators.maxLength(50)
  ]);
 
  AsuntoControl = new FormControl('', [
    Validators.required, 
    Validators.minLength(7), 
    Validators.maxLength(800)
  ]);

  resolved(e)
  {

  }

  SEND()
  {
    
    this.ButtonSendD = true;

    //DATA
    const body = {
      name: this.NameControl.value,
      email: this.emailFormControl.value,
      msg: this.AsuntoControl.value,
    };

    //VALIDATION
    if (this.VALIDATION())
    {

    //REQUEST
    this.http.post<any>('https://int-sendemail.herokuapp.com/send', body ).subscribe(
      (response) => {
        //console.log('body',body);  
        //console.log('respuesta',response.res);
        if (response.res == "OK")
        {

          this.NameControl.reset();
          this.emailFormControl.reset();
          this.AsuntoControl.reset();
          this.formModel.captcha = ""; 

          //ENVIAR
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mensaje Enviado!',
            text: 'su correo será respondido lo más pronto posible.',
            showConfirmButton: false,
            timer: 0
          }).then((result) => {
          if (result.isDismissed) {
            this.ButtonSendD = false;
            }
          })
        
        }
        else
        {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error!',
            text: 'datos inválidos.',
            showConfirmButton: false,
            timer: 0
          }).then((result) => {
           if (result.isDismissed) {
            this.ButtonSendD = false;
            }
          });
        }
      },
      (error) => {

      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Mantenimiento!',
        html: '<div>contacte con el siguiente correo: <div><b>salamanca.int@gmail.com</b></div></div>',
        showConfirmButton: false,
        timer: 0
      }).then((result) => {
       if (result.isDismissed) {
        this.ButtonSendD = false;
        }
      })
    //throw error;   //You can also throw the error to a global error handler
  });

    }
    else
    {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Campos Obligatorios!',
        showConfirmButton: false,
        timer: 0
      }).then((result) => {
       if (result.isDismissed) {
        this.ButtonSendD = false;
        }
      });
      
    }
  }

  //VALIDACION DE FORMATO DE DATOS
  VALIDATION()
  {

    //TRIM
    if (this.NameControl.value) {this.NameControl.setValue(this.NameControl.value.trim());}
    if (this.emailFormControl.value) {this.emailFormControl.setValue(this.emailFormControl.value.trim());}
    if (this.AsuntoControl.value) {this.AsuntoControl.setValue(this.AsuntoControl.value.trim());}

    if ((this.NameControl.value) && (this.emailFormControl.value) && (this.AsuntoControl.value) && (this.formModel.captcha)
    && this.NameControl.status == "VALID" && this.emailFormControl.status == "VALID" && this.AsuntoControl.status == "VALID")
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}
export interface FormModel {
  captcha?: string;
}
