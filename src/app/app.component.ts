import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newtodoproject';
  userData:any=[
    {name:"Soja",email:"soja200@gmail.com",address:"Kerala",position:"Angular devoloper"},
    {name:"Sriya",email:"sriyaa101@gmail.com",address:"Hydrabad",position:"Python devoloper"},
    {name:"Athira",email:"athira345@gmail.com",address:"Pune",position:"Odoo devoloper"},
    {name:"Nandhini",email:"nandhu2897@gmail.com",address:"Mumbai",position:"Django devoloper"},
    {name:"Drishya",email:"drishya645@gmail.com",address:"Madhya pradesh",position:"React devoloper"},
    {name:"Biju",email:"kichu148@gmail.com",address:"Karnataka",position:"Data Analyst"},
    {name:"Sudheesh",email:"sudhi904@gmail.com",address:"Tamilnadu",position:"Software engineer"},
    {name:"Kavya",email:"kavi324@gmail.com",address:"Chennai",position:"Software Tester"},
    {name:"Neelima",email:"neeli086@gmail.com",address:"Mysore",position:"Sql devoloper"},
    {name:"Fasal",email:"gerrad370@gmail.com",address:"Goa",position:"System Analyst"},
  ];
  getCurrentUser(user:any):void{
    console.log(user);

}
constructor(){
  console.log(this.userData);
}
}
