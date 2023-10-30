

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'}) // This is a decorator that allows us to inject this service in the root of the app
export class GifsService {

  public gifList: Gif[] = []

  private _tagsHistory: string[] = []
  private apiKey: string = 'wo2abMNVPoolcGpPoYczjFJK5E3E2PVU'
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs/search'

  constructor(private http: HttpClient ) {
    this.loadLocalStorage() // We need to load the local storage when the service is created
   }

  get tagsHistory(): string[] {
    return [...this._tagsHistory]
  }

  private organizeHistory(tag:string):void{
    tag = tag.trim().toLowerCase()
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0, 10)
    this.saveLocalStorage()

  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory)) // We need to save the history in the local storage as a string

  }

  private loadLocalStorage():void{
    localStorage.getItem('history') ? this._tagsHistory = JSON.parse(localStorage.getItem('history')!) : this._tagsHistory = [] // We need to parse the string to an array of strings to be able to use it. 'history' is the key of the local storage

    if(this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0]); // what does ._ mean? It means that we are accessing a property of an object. In this case, we are accessing the first element of the array

  }

  searchTag(tag: string):void{
    if (tag.trim().length === 0) return;
    this.organizeHistory(tag)

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('q', tag)
    .set('limit', '10')

    this.http.get<SearchResponse>(`${this.serviceUrl}`, {params})
    .subscribe((resp) => {

      this.gifList = resp.data

      // console.log(resp.data)
    }) // This is an observable, so we need to subscribe to it to get the data from the response of the request to the API of Giphy




  }


}
