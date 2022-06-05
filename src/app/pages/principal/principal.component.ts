import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import {FormControl,FormGroup,FormBuilder,Validators,FormArray} from '@angular/forms'
import {BanderaService } from 'src/app/services/bandera.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  myForm: FormGroup= this.fb.group({
    name: ['Sammy', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(15)]],
  });

  data: any[]=[];
  users = new Array<any>();
  informacion = new Array<any>();


  constructor(private http: HttpClient,private fb: FormBuilder,private serviciobandera:BanderaService) { 
  }

    

  ngOnInit(): void {

    //this.obtenerbandera("france");
    this.obtenercodigos();
    this.obtenerinformacion("chile");


    this.myForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  
  

       let headers = new HttpHeaders({
      'x-rapidapi-host': 'just-translated.p.rapidapi.com',
      'x-rapidapi-key': '1bee20adc6msh82708dfc53f2be9p174f4ejsn7e93b36ee609'
    });

    let params=new HttpParams()
      .set('lang','es-en') 
      .set('text','plomo');


  /*this.http
	.get<any>('https://just-translated.p.rapidapi.com/', {
		headers: headers,
    params:params
	})
	.subscribe(data => {
		console.log(data);
	});*/

  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }

  obtenerbandera(pais:String)
  {
    this.serviciobandera.getbandera(pais);
  }

  obtenercodigos()
  {
    this.serviciobandera.getcodigos().subscribe(response => {
    this.users= response;
  });
  }

  obtenerinformacion(pais:String)
  {
    this.serviciobandera.getinformacion(pais).subscribe(response => {
    this.informacion= response;
  });
  }

}
