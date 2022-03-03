import { Email } from './../../models/email';
import { Developer } from './../../models/developer';
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
  public dados : Developer;
  private _email : Email;
  public form: FormGroup;
  public get f() : any{
    return this.form.controls;
  }

  constructor(private service:PortfolioService,
              private spinner : NgxSpinnerService,
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
    this.service.getDados('Contact/1').subscribe(
      (_developer : Developer) => this.dados = _developer,
       (error : any) => console.log(error)
     ).add(()=>this.spinner.hide());
  }
  public EnviarEmail() : void {
    this.spinner.show();
    if (this.form.valid){
      this._email = { ... this.form.value};
      this.service.postEmail(this._email).subscribe(
        (retorno : boolean) => console.log(retorno),
        (error : any) => console.log(error)
      ).add(() => this.spinner.hide())
    }
  }
}
