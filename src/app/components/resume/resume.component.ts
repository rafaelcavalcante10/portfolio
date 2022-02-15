import { ExperienceDetails } from './../../models/experience-details';
import { Resume } from './../../models/resume';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: []
})
export class ResumeComponent implements OnInit {
  public dados : Resume | any;
  public details1 : ExperienceDetails | any;
  public details2 : ExperienceDetails | any;

  constructor(private service:PortfolioService,
              private spinner : NgxSpinnerService
        )
    { }

  ngOnInit(): void {
    this.spinner.show();
    this.PreencheTela();
  }
  private PreencheTela() : void {
    this.service.getDados('Resume').subscribe({
      next: (response : any) => this.dados = response
    });
    this.service.getDados('Resume/1').subscribe({
      next: (response : any) => this.details1 = response
    });
    this.service.getDados('Resume/2').subscribe({
      next: (response : any) => this.details2 = response,
      error: (error : any) => this.spinner.hide(),
      complete: () => this.spinner.hide()
    });
  }
}
