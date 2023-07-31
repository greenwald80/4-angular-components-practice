import { Component } from '@angular/core';
import { IPost } from '../interfaces/post-interface';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {

    // post: IPost = {
    //     id: 1,
    //     title: 'title',
    //     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime iure magni voluptatem atque nostrum magnam quas iusto vel repellat minima fugit dolore quod, a repellendus perspiciatis ipsum enim laudantium.'
    // }

    favoritesPosts: IPost[] = [];

    recommendedPosts: IPost[] = [
        {
            id: 1,
            title: 'title 1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime iure magni voluptatem atque nostrum magnam quas iusto vel repellat minima fugit dolore quod, a repellendus perspiciatis ipsum enim laudantium.'
        },
        {
            id: 2,
            title: 'title 2',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime iure magni voluptatem atque nostrum magnam quas iusto vel repellat minima fugit dolore quod, a repellendus perspiciatis ipsum enim laudantium.'
        },
        {
            id: 3,
            title: 'title 3',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime iure magni voluptatem atque nostrum magnam quas iusto vel repellat minima fugit dolore quod, a repellendus perspiciatis ipsum enim laudantium.'
        }

    ];


    onAddToFavoritesHandler(post: IPost): void {
        this.deleteFromRecommended(post);
        this.addPostToFavorites(post);
        //console.log('favoritesPosts', this.favoritesPosts);
        //console.log('recommendedPosts', this.recommendedPosts);
    }

    deleteFromRecommended(post: IPost): void {
        this.recommendedPosts = this.recommendedPosts.filter(postItem => postItem.id !== post.id)
    }

    addPostToFavorites(post: IPost) {
        this.favoritesPosts.push(post);
    }

    onDeleteFromFavoritesHandler(post: IPost): void {
        this.deletePostFromFavorites(post);
        this.addPostToRecommended(post);
    }

    private deletePostFromFavorites(post: IPost): void {
        this.favoritesPosts = this.favoritesPosts.filter(postItem => postItem.id !== post.id);
    }

    private addPostToRecommended(post: IPost): void {
        this.recommendedPosts.push(post);
    }

}