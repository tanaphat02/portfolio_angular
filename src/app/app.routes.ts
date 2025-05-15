import { Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ExperienceComponent } from './component/experience/experience.component';

export const routes: Routes = [
    {
        path: "",
        component: HomepageComponent
    },
    {
        path: "profile",
        component: ProfileComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "experience",
        component: ExperienceComponent
    }
];
