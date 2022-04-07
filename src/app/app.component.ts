import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, VERSION, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild("alertContainer", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;
  constructor(private resolver: ComponentFactoryResolver) {}
  createComponent(type) {
    this.container.clear(); 
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
  }
  ngOnDestroy() {
    this.componentRef.destroy(); 
   }
}
