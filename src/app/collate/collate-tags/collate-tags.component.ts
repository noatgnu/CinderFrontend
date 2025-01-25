import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Collate, CollateTag} from "../collate";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatChip, MatChipRemove, MatChipSet} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {AccountsService} from "../../accounts/accounts.service";

@Component({
    selector: 'app-collate-tags',
    imports: [
        CdkDropList,
        MatChipSet,
        MatChipRemove,
        MatIcon,
        MatChip,
        CdkDrag
    ],
    templateUrl: './collate-tags.component.html',
    styleUrl: './collate-tags.component.scss'
})
export class CollateTagsComponent {
  @Input() collageTags: CollateTag[] = []
  @Output() collageTagsChange: EventEmitter<CollateTag[]> = new EventEmitter<CollateTag[]>()

  constructor(public accounts: AccountsService) {

  }

  removeTag(tag: CollateTag) {
    this.collageTags = this.collageTags.filter(t => t !== tag)
    this.collageTagsChange.emit(this.collageTags)
  }

  drop(event: CdkDragDrop<CollateTag[]>) {
    moveItemInArray(this.collageTags, event.previousIndex, event.currentIndex);
    this.collageTagsChange.emit(this.collageTags)
  }


}
