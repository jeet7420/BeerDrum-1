import { NgModule } from "@angular/core"
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children:[
            {
                path:'home',
                children: [
                    {
                    path:'',
                    loadChildren :'../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path:'dispense',
                children: [
                    {
                    path:'',
                    loadChildren :'../dispense/dispense.module#DispensePageModule'
                    }
                ]
            },
            {
                path:'profile',
                children: [
                    {
                    path:'',
                    loadChildren :'../profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path:'offers',
                children: [
                    {
                    path:'',
                    loadChildren :'../offers/offers.module#OffersPageModule'
                    }
                ]
            },
            {
                path:':partnerId',
                children: [
                    {
                    path:'',
                    loadChildren :'../partner-details/partner-details.module#PartnerDetailsPageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }