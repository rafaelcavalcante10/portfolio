import { AboutSkillsComponent } from './components/about/about-skills/about-skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "Home", component: HomeComponent},
  { path: "Sobre", redirectTo: "About/skills"},
  { path: "About", component: AboutComponent,
    children:[
      {path:"skills", component:AboutSkillsComponent}
    ]},
  { path: "Resume", component: ResumeComponent},
  { path: "Contact", component: ContactComponent},
  { path: "", redirectTo: "Home", pathMatch: "full"},
  { path: "**", redirectTo: "Home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
