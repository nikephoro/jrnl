import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [RouterLink], 
  templateUrl: './home.html',
  styleUrls: ['./home.css'] 
})
export class Home {
  userInput: string = '';

  onUserInput(event: Event) {
    this.userInput = (<HTMLInputElement>event.target).value;
  }
}
