import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sucursal } from '../Models/sucursal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceSucursalService {

  private url = environment.url + environment.apiSucursales

  constructor(private http: HttpClient) { }

  getSucursales(): Observable<Sucursal[]>{
    return this.http.get<Sucursal[]>(this.url);
  }

  getSucursal(codigo:number): Observable<Sucursal>{
    return this.http.get<Sucursal>(`${this.url}/${codigo}`)
  }

  createSucursal(sucursal: Sucursal): Observable<Sucursal>{
    return this.http.post<Sucursal>(this.url, sucursal)
  }

  updateSucursal(sucursal: Sucursal): Observable<void>{
    return this.http.put<void>(`${this.url}/${sucursal.codigo}`, sucursal)
  }

  deleteSucursal(codigo: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${codigo}`)
  }
}
