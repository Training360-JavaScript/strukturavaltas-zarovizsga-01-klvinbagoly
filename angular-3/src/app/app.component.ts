import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from './model/construction';
import { ConstructionService } from './service/construction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-3';

  construction$: Observable<Construction[]> = this.service.getAll();
  
  constructor (
    private service: ConstructionService
  ) {}

  onDelete(c: Construction) {
    this.service.delete(c).subscribe(
      () => this.construction$ = this.service.getAll()
    )
  }
}
