import { Developer } from './../../models/developer';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: []
})
export class ResumeComponent implements OnInit {
  public dados : Developer | any;

  constructor(private service:PortfolioService,
              private spinner : NgxSpinnerService
        )
    { }

  ngOnInit(): void {
    this.spinner.show();
    this.PreencheTela();
  }
  private PreencheTela() : void {
    this.service.getDados('Resume/1').subscribe(
      (_developer : Developer) => this.dados = _developer,
       (error : any) => console.log(error)
     ).add(()=>this.spinner.hide());
  }
}
