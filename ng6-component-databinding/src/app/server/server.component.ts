import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerComponent implements OnInit {
  @Input('svrElement') element:{type:string, name:string, content:string};
  
  constructor() {
    console.log('constructor called');
   }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log('changes');
  }
  ngOnInit() {
    console.log('ngOnInit called!');
  }

}
