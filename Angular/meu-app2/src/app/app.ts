import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './produtos/produtos.html',
  styleUrl: './produtos/produtos.css'
})
export class App {
  protected readonly title = signal('meu-app2');
}
