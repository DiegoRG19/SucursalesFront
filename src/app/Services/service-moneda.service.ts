import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Moneda } from '../Models/moneda';

@Injectable({
  providedIn: 'root'
})
export class ServiceMonedaService {

  private url = environment.url + environment.apiMoneda

  constructor(private http: HttpClient) { }

  getMonedas(): Observable<Moneda[]>{
    return this.http.get<Moneda[]>(this.url)
  }

  getMoneda(id: number): Observable<Moneda>{
    return this.http.get<Moneda>(`${this.url}/${id}`)
  }

  createMoneda(moneda: Moneda): Observable<Moneda>{
    return this.http.post<Moneda>(this.url, moneda)
  }

  updateMoneda(moneda: Moneda): Observable<void>{
    return this.http.put<void>(`${this.url}/${moneda.idMoneda}`, moneda)
  }

  deleteMoneda(id: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }

}
