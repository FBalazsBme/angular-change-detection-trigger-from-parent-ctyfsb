import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';

import { AppService } from './app.service';
import { ChildComponent2 } from './child2.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ChildComponent, ChildComponent2],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
