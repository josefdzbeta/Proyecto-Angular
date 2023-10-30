import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Buscar:
    <input type="text" class="form-control" placeholder="Buscar gifs..." (keyup.enter)="searchTag()" #txtTagInput>

  </h5>`
})

export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>; // !: not null assertion operator // ViewChild is a decorator that allows us to get a reference to a DOM element
  constructor(private gifsService: GifsService) { }

  searchTag (){
    const newTag = this.tagInput.nativeElement.value

    this.gifsService.searchTag(newTag)
    console.log({newTag})


  }

}
