import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Developer } from 'src/app/models/developer';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: []
})
export class ContactComponent implements OnInit {
  private _developers : Developer[] = [];
  public developer : Developer | any;
  public form: FormGroup | any;
  public get f() : any{
    return this.form.controls;
  }

  constructor(private service:PortfolioService,
              private spinner : NgxSpinnerService,
              private http : HttpClient,
              private fb : FormBuilder
        )
    { }

  ngOnInit(): void {
    this.spinner.show();
    this.PreencheTela();
    this.validation();
  }

  private validation():void {
    this.form = this.fb.group({
      nome : ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      assunto: ['',[Validators.required]],
      mensagem: ['',[Validators.required]]
    })
  }
  private PreencheTela() : void {
    this.http.get(this.service.ApiServiceURL).subscribe({
      next: (response : any) => {
        this._developers = response;
        this.developer = this._developers[0];
      },
      error: (error : any) => this.spinner.hide(),
      complete: () => this.spinner.hide()
    });
  }
}
