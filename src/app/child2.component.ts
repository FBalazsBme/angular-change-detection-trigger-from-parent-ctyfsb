import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'child2',
  templateUrl: './child2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent2 {
  privateBool: boolean;
  @Input() data: any;
  @Input()
  set pseudoBool(val: boolean) {
    this._cdr.detectChanges();
  }

  constructor(
    private _cdr: ChangeDetectorRef,
    private _appService: AppService
  ) {}

  ngOnInit() {
    this._appService.dummyTriggerObservable.subscribe(() => {
      this._cdr.markForCheck();
    });
  }

  TriggerChange() {
    this._cdr.detectChanges();
  }
}
