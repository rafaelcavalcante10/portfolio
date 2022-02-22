import { Home } from './../../models/home';
import { HttpClient } from '@angular/common/http';
import { PortfolioService } from './../../services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  public dados : Home | any;

  constructor(private service:PortfolioService,
              private spinner : NgxSpinnerService,
              private http : HttpClient
        )
    { }

  ngOnInit(): void {
    this.spinner.show();
    this.PreencheTela();
  }
  private PreencheTela() : void {
    this.service.getDados("Home/1").subscribe({
       next: (response : any) => {
         this.dados = response;
       },
       error: (error : any) => this.spinner.hide(),
       complete: () => this.spinner.hide()
     });
  }
}
