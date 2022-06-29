import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraductorComponent } from './components/traductor/traductor.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { MoviesComponent } from './components/movies/movies.component';
import { GeneratorComponent } from './components/generator/generator.component';
const routes: Routes = [{path:'traductor', component: TraductorComponent },
                        {path:'movies', component: MoviesComponent },
                        {path:'divisas', component: DivisasComponent },
                        {path:'generador-qr', component: GeneratorComponent },

                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
