import { Developer } from './../../models/developer';
import { PortfolioService } from './../../services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
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
    this.service.getDados("Home/1").subscribe(
       (_developer : Developer) => this.dados = _developer,
       (error : any) => console.log(error)
     ).add(()=>this.spinner.hide());
  }
}
