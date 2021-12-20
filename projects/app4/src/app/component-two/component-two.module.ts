import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "examples/app1/src/app/shared.module";
import { ComponentTwoComponent } from "./component-two.component";

@NgModule({
    declarations: [ComponentTwoComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: ComponentTwoComponent
            }
        ])
    ],
    exports: [ComponentTwoComponent],
    entryComponents: [ComponentTwoComponent],
    providers: []
})
export class ComponentTwoModule {}