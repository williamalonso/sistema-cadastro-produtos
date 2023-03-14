import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { ProductListComponent } from "./views/product-list/product-list.component";
import { ProductCreateComponent } from "./components/product/product-create/product-create.component";
import { ProductUpdateComponent } from "./components/product/product-update/product-update.component";
import { ProductReadComponent } from "./components/product/product-read/product-read.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list', component: ProductListComponent },
    { path: 'product/create', component: ProductCreateComponent },
    { path: 'product/update/:id', component: ProductUpdateComponent },
    { path: 'product/delete/:id', component: ProductReadComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}