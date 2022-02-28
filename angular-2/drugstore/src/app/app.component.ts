import { Component } from '@angular/core';
import { DrugService } from './service/drug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drugstore';

  constructor (
    private service: DrugService
  ) {
    this.service.getAll().subscribe(
      drugs => console.log(drugs)
    )
  }


}
