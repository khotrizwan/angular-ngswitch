import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Test ngSwitch <br />
    <div [ngSwitch]="example">  
    <span *ngSwitchCase="'ngIf'">Angular-ngIf Exmple</span>  
    <span *ngSwitchCase="'ngSwitch'">Angular-ngSwitch Exmple</span>  
    <span *ngSwitchCase="'ngFor'">Angular-ngFor Example</span>  
    <span *ngSwitchDefault>Unknown Example</span>  
    </div>   
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngswitch';
  example = 'ngSwitch';
}
