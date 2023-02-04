import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MulticastingComponent } from './multicasting/multicasting.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';

const routes: Routes = [{ path: '', component: HomeComponent},
                        { path: 'new', component: NewRecipeComponent},
                        { path: 'multicasting', component: MulticastingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
