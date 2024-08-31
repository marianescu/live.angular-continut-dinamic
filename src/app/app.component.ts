import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdusComponent } from './components/produs/produs.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProdusComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  produse=[
    {
      nume:"Tastatura",
      pret:198.99,
      pretOferta:null,
      poza:"tastatura.jpg",
      stoc:10
    },
    {
      nume:"Mouse",
      pret:468,
      pretOferta:388.99,
      poza:"mouse.jpg",
      stoc:2
    },
    {
      nume:"Random",
      pret:1231,
      pretOferta:321.99,
      poza:"default.png",
      stoc:7
    },
    {
      nume:"Tastatura",
      pret:198.99,
      pretOferta:null,
      poza:"tastatura.jpg",
      stoc:1012
    },
    {
      nume:"Mouse",
      pret:468,
      pretOferta:388.99,
      poza:"mouse.jpg",
      stoc:10
    },
    {
      nume:"Random",
      pret:1231,
      pretOferta:321.99,
      poza:"default.png",
      stoc:11
    }
  ]
}
