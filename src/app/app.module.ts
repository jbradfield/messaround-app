import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShapeManagerComponent } from './shape-manager/shape-manager.component';
import { StorageService } from './services/storage.service';
import { ShapeComponent } from './shape/shape.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    ShapeManagerComponent,
    ShapeComponent,
  ],
  providers: [
    StorageService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
