import { Developer } from './../../models/developer';
import { PortfolioService } from './../../services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent implements OnInit {
  public dados! : Developer;

  constructor(private service:PortfolioService,
              private spinner : NgxSpinnerService
        )
    { }

  ngOnInit(): void {
    this.spinner.show();
    this.PreencheTela();
  }
  private PreencheTela() : void {
    this.service.getDados('About/1').subscribe(
      (_developer : Developer) => this.dados = _developer,
       (error : any) => console.log(error)
     ).add(()=>this.spinner.hide());
  }
}
