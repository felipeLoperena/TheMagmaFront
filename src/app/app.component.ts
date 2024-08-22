import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
template: ` 
  <main>
    <header class="brand-name">
      <!-- <img class="brand-logo" src="/assets/logo.jpg"
      alt="logo" aria-hidden="true">-->
    </header>
    <section>
      <app-home></app-home>
    </section>
  </main>`,
  styleUrl: './app.component.css',
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'TheMagmaProject';
}