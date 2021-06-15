import { Input, Output } from "@angular/core";
import { Component, OnChanges, SimpleChanges } from "@angular/core";
import { EventEmitter } from '@angular/core';

@Component({
selector:'pm-star',
templateUrl:'./star.component.html',
styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges
{
ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth=this.rating * 75/5;
}
@Input() rating:number=0;
cropWidth:number=75;
@Output() ratingClicked: EventEmitter <string>= new EventEmitter<string>();

onClick():void{
    this.ratingClicked.emit(`the rating ${this.rating} was clicked`)
}
}