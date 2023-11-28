import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../post/home/home.component';
import { ActivePostsComponent } from '../post/active-posts/active-posts.component';
import { InactivePostsComponent } from '../post/inactive-posts/inactive-posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'active-posts', component: ActivePostsComponent },
  { path: 'inactive-posts', component: InactivePostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
