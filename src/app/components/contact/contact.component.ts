import { Contact } from './../../models/contact';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: []
})
export class ContactComponent implements OnInit {
  public dados : Contact | any;
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
    this.service.getDados('Contact/1').subscribe({
      next: (response : any) => {
        this.dados = response;
      },
      error: (error : any) => this.spinner.hide(),
      complete: () => this.spinner.hide()
    });
  }
}
