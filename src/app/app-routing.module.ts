import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [{
    path: '', component: MaincontainerComponent
},{
    path:'post/:id', component: SinglePostComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }