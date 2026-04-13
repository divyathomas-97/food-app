import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'https://mocki.io/v1/e7ca1135-b9bc-4be1-abe3-f43aaccbc1be';

  constructor(private http: HttpClient) {}

  getMenu(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(categories =>
        categories.map(category => ({
          ...category,
          dishes: category.dishes.map((d: any) => ({ ...d, count: 0 }))
        }))
      )
    );
  }
}