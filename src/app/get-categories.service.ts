import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Category } from './commontypes';

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {

  constructor(private client: HttpClient) { }

  async getCategories(): Promise<Category[]> {
    return await this.client.get<Category[]>('/assets/categories.json').toPromise<Category[]>();
  }
}
