import { HttpClient } from '@angular/common/http';
import { PortfolioService } from './../../services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/app/models/developer';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  private _developers : Developer[] = [];
  public developer : Developer | any;

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
    this.http.get(this.service.ApiServiceURL+ 'Home').subscribe({
      next: (response : any) => {
        this._developers = response;
        this.developer = this._developers;
      },
      error: (error : any) => this.spinner.hide(),
      complete: () => this.spinner.hide()
    });
  }
}
