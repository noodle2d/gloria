import { Injectable } from '@angular/core';
import {News} from "../model/news";
import {NEWS} from "../mocks/NEWS";

@Injectable()
export class NewsService {

  constructor() { }

  getNews() : Promise<News[]> {
    return Promise.resolve(NEWS);
  }

}
