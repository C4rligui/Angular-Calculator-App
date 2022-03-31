import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalculatorComponent } from "./calculator/calculator.component";

const routes: Routes = [
    {path: '', redirectTo: 'calculator', pathMatch: 'full'},
    {path: 'calculator', component: CalculatorComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})

export class AppRoutingModule {}