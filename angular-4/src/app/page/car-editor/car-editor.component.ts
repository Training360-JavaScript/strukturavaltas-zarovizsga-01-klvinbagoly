import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  car$: Observable<Car> = this.service.get(44)

  constructor(
    private service: CarService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onUpdate(car: Car) {
    this.service.update(car).subscribe(
() => this.router.navigateByUrl('/car')
    )
  }
}
