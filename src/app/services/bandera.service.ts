import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanderaService {

  private baseUrl = 'https://countryflagsapi.com/png';
  private baseUrl2 = 'https://restcountries.com/v3.1/all';
  private baseUrl3 = 'https://restcountries.com/v3.1/name';
  

  totalAngularPackages:any[]=[];

  constructor(private http: HttpClient) { }

  getbandera(pais:String){
    this.http.get<any>(`${this.baseUrl}/${pais}`).subscribe(data => {
      this.totalAngularPackages = data;
      console.log(this.totalAngularPackages);
  });
}

  public getcodigos(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl2}`);

  }

  public getinformacion(pais:String): Observable<any>{
    return this.http.get<any>(`${this.baseUrl3}/${pais}`);
  }



}
