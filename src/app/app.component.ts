import { AsyncPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-demo';

  private readonly http = inject(HttpClient);

  image$: any;
  isButtonClicked = false;

  getDog() {
    this.image$ = this.http.get('https://dog.ceo/api/breeds/image/random').pipe(map((x: any) => x.message))
    this.isButtonClicked = true
  }

}
