import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Collate} from "../collate";

@Component({
    selector: 'app-collate-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './collate-header.component.html',
    styleUrl: './collate-header.component.scss'
})
export class CollateHeaderComponent {
  @Input() collate: Collate | null = null;
}
