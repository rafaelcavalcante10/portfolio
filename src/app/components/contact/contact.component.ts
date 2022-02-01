import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: []
})
export class ContactComponent implements OnInit {

  public form: FormGroup | any;
  public get f() : any{
    return this.form.controls;
  }

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
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
}
