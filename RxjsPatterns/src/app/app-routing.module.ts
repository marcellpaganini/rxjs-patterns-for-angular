import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MulticastingComponent } from './multicasting/multicasting.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [{ path: '', component: HomeComponent},
                        { path: 'new', component: NewRecipeComponent},
                        { path: 'multicasting', component: MulticastingComponent},
                        { path: 'recipes/details', component: RecipeDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
