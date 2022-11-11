import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';
import { AppService } from './app.service';
import { ViewChildren } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pseudoBool: boolean = false;
  @ViewChild('child') child: ChildComponent;
  @ViewChildren('children') children: Array<ChildComponent>;

  constructor(private _appService: AppService) {}

  objects: any[] = [{ price: 33 }, { price: 86 }, { price: 11 }, { price: 45 }];

  IncrementPrice() {
    this.objects.forEach(function (val) {
      val.price++;
    });
  }

  TriggerViaService() {
    this._appService.InitiateDetection();
  }

  TriggerViaReference() {
    this.child.TriggerChange();
    this.children.forEach((child) => child.TriggerChange());
  }

  TriggerViaPseudoProp() {
    this.pseudoBool = !this.pseudoBool;
  }
}
