import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  ngOnInit() {
  }
  
  @Input() isFavorite = false;
  @Output() change = new EventEmitter;
  changeState(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newState:this.isFavorite});
    console.log(this.isFavorite);
}


}
