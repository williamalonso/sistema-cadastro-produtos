import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { ProductListComponent } from "./views/product-list/product-list.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list', component: ProductListComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}