import { Component } from '@angular/core';
import { TourService } from 'ngx-ui-tour-md-menu';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tour-app';
  secondStep$ = new Subject<void>();
  thirdStep$ = new Subject<void>();

  constructor(private tourService: TourService) {}

  ngOnInit() {
    this.tourService.initialize([
      {
        anchorId: 'span.welcome',
        content: 'Welcome Message',
        title: 'Welcome',
      },
      {
        anchorId: 'card.title',
        content: 'Project title',
        title: 'Title',
        waitFor: this.secondStep$,
      },
      {
        anchorId: 'h2.resources',
        content: 'Resources title',
        title: 'Resources',
        waitFor: this.thirdStep$,
      },
    ]);

    this.tourService.startWaiting$.subscribe((step) => {
      setTimeout(() => {
        if (step.anchorId === 'card.title') {
          this.secondStep$.next();
        }
        if (step.anchorId === 'h2.resources') {
          this.thirdStep$.next();
        }
      });
    });

    // this.tourService.start();
  }
}
