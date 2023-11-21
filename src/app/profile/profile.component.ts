import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public name:string='Mayooraraj O';
  details ={name:'Mayooraraj O',email:'mayooraraj@gmail.com',house:"Othayoth house",place:"Calicut",post:"Eramala (po)",state:"Kerala"}
  orders={product:'bag',date:'6567567'};
  public myorder="My Orders";
}
