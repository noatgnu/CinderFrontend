import {Component, OnInit} from '@angular/core';
import {BannerComponent} from "../banner/banner.component";
import {FooterComponent} from "../footer/footer.component";
import {WebService} from "../web.service";
import {BreadcrumbComponent} from "../shared/breadcrumb/breadcrumb.component";

@Component({
    selector: 'app-home',
    imports: [
        BannerComponent,
        FooterComponent,
        BreadcrumbComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  frontEndData: {footer: string} | null = null

  constructor(private web: WebService) { }

  ngOnInit() {
    this.web.getFrontEndTemplateData().subscribe((data) => {
      this.frontEndData = data
    })
  }
}
