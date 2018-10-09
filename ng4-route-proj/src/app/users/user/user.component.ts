import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], // use to fetch data from route parameters
      name: this.route.snapshot.params['name']
    }
     //params is an observable - subscribe to an event
    this.route.params
      .subscribe( // can take 3 arguments
        (params: Params)=> { // functions
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

}
