import {Component} from '@angular/core'
import {RouterOutlet, RouterLink} from "@angular/router"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: ` 
    <main>
      <header class="brand-name">
        <a [routerLink]="['/']">
          <img class="brand-logo" src="/public/logo.svg" alt="logo" aria-hidden="true" />
        </a>
        <span class="app-title">{{title}}</span>
      </header>
      <section class="content">
        <router-outlet />
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Hello by Angular';
}
