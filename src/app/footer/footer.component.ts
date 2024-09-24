import {Component, Input} from '@angular/core';
import {WebService} from "../web.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() text: string|undefined = ''

  constructor() {
  }

}
