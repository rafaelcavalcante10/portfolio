import { About } from './../../models/about';
import { PortfolioService } from './../../services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent implements OnInit {
  public dados! : About;

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
    this.service.getDados('About/1').subscribe({
      next: (response : any) => {
        this.dados = response;
      },
      error: (error : any) => this.spinner.hide(),
      complete: () => this.spinner.hide()
    });
  }

}
