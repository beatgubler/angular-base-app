import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit, OnDestroy {

  usersSubscription: any;
  users: any[] = [];

  constructor( public _usersService: UsersService ) { }

  ngOnInit(): void { 
    this.getUsers() 
  }

  getUsers = () => {
    this.usersSubscription = this._usersService.getUsers().subscribe((ss) => {
      this.users = ss;
    });
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
