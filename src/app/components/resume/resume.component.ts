import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Developer } from 'src/app/models/developer';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { OrderModule } from 'ngx-order-pipe';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: []
})
export class ResumeComponent implements OnInit {
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
    this.http.get(this.service.ApiServiceURL+'Resume').subscribe({
      next: (response : any) => {
        this._developers = response;
        this.developer = this._developers;
      },
      error: (error : any) => this.spinner.hide(),
      complete: () => this.spinner.hide()
    });
  }
}
