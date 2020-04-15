import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "My Name";
  itembuah=[{
    nama : 'Kelengkeng',
    harga : 500000
  },{
    nama : 'Jeruk',
    harga : 125000
  }];
  itemArr=['aa','bb','cc','dd'];

  show: boolean = true;

}
