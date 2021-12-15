import { Component, ElementRef, ViewChild } from '@angular/core';
import { GlobalEventDispatcher, PlanetComponentLoader, PlanetComponentRef, PlanetPortalApplication } from 'ngx-planet';

@Component({
  selector: 'app4-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('container', { static: true }) containerElementRef: ElementRef<HTMLDivElement>;
  private componentRef: PlanetComponentRef;
  title = 'app4';

  constructor(
    private globalEventDispatcher: GlobalEventDispatcher,
    private planetComponentLoader: PlanetComponentLoader,
    private portalApp: PlanetPortalApplication
    ) {}
  
  openDetail1() {
    this.globalEventDispatcher.dispatch('openUserDetail', 2);
  }

  openDetail2() {
    this.planetComponentLoader
            .load('app2', 'project1', {
                container: this.containerElementRef,
                initialState: {}
            })
            .subscribe(componentRef => {
                this.componentRef = componentRef;
            });
  }

  compOne() {
    this.portalApp.navigateByUrl("/component-one");
  }
}
