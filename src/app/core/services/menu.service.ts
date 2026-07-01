import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // private apiUrl = 'https://mocki.io/v1/5f76de08-1d86-4eef-a094-dc998454005c';

  constructor(private http: HttpClient) {}

  getMenu(): Observable<any> {
    return this.http.get<any[]>('assets/menu.json').pipe(
      map(categories =>
        
        categories.map(category => ({
          ...category,

          dishes: category.dishes.map((d: any) => ({ ...d, count: 0 }))
          
        }))
      )
    );
  }
}