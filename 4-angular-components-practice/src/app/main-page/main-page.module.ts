import { NgModule } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostComponent } from './post/post.component';
import { RecommendationsListComponent } from './recommendations-list/recommendations-list.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [MainPageComponent, SidebarComponent, PostComponent, RecommendationsListComponent],
    exports: [MainPageComponent],
    imports: [CommonModule]
})

export  class MainPageModule {

}