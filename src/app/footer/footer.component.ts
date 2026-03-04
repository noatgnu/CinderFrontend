import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'app-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() text: string | undefined = ''
}
