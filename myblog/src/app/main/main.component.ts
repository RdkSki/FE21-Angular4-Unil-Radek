import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cards=[{
    img: "assets/IMG/ufo.jpg",
    date: "20/10/2020 12:20",
    place: "Kasanlak, Bulgaria",
    whencr: "11/10/2021",
    whocr: "Radek Slowinski",
   },{
    img: "assets/IMG/bunkart2.jpg",
    date: "22/09/2020 10:20",
    place: "Bunkart2, Albania",
    whencr: "13/10/2021",
    whocr: "Radek Slowinski",
   },{
    img: "assets/IMG/bunkart.jpg",
  date: "18/09/2020 17:25",
  place: "Bunkart, Albania",
  whencr: "12/20/2021",
  whocr: "Radek Slowinski",
   },{
    img: "assets/IMG/burgas.jpg",
    date: "20/08/2020 18:40",
    place: "Burgas, Bulgaria",
    whencr: "10/10/2021",
    whocr: "Radek Slowinski",
   }]
  constructor() { }

  ngOnInit(): void {
  }

}
