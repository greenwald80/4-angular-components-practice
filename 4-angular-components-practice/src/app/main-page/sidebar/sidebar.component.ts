import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from 'src/app/interfaces/post-interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() posts!: IPost[];
  @Output() onDeleteFromFavorites = new EventEmitter<IPost>();

  emitDeleteFromFavorites(post: IPost): void {
    console.log('onDeleteFromFavorites', post);
    this.onDeleteFromFavorites.emit(post);
  }
}
