import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brinquedos } from './brinquedos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrinquedosService {

  constructor(private http: HttpClient) { }

  salvar(categoria: Brinquedos ): Observable<Brinquedos>{
    return this.http.post<Brinquedos>('http://localhost:3000/categorias', categoria);
  }

  obterTodas() : Observable<Brinquedos []>{
    return this.http.get<Brinquedos[]>('http://localhost:3000/categorias');
  }
}
