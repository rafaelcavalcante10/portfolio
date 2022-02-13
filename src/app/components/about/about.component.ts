import { PortfolioService } from './../../services/portfolio.service';
import { Developer } from './../../models/developer';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent implements OnInit {
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
    this.http.get(this.service.ApiServiceURL+'About').subscribe({
      next: (response : any) => {
        this._developers = response;
        this.developer = this._developers;
      },
      error: (error : any) => this.spinner.hide(),
      complete: () => this.spinner.hide()
    });
  }

}
