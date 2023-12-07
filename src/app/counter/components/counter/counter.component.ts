import { Component } from "@angular/core";

@Component({
 selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
 public counter: number = 10;

  incrementar(): void{
    this.counter+=1;
  }

  decrementar(): void {
    this.counter -= 1;
  }

  resetear(){
    this.counter = 10;
  }
}