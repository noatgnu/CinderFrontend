import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {BannerComponent} from "../banner/banner.component";
import {FooterComponent} from "../footer/footer.component";
import {WebService} from "../web.service";
import {BreadcrumbComponent} from "../shared/breadcrumb/breadcrumb.component";
import {Subject, takeUntil} from "rxjs";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
    selector: 'app-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        BannerComponent,
        FooterComponent,
        BreadcrumbComponent,
        MatProgressSpinner
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  frontEndData: { footer: string } | null = null;
  isLoading = true;

  constructor(private web: WebService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.web.getFrontEndTemplateData().pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.frontEndData = data;
      this.isLoading = false;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
