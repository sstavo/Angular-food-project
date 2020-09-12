import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fapp-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  title = 'Angular 4 Projects';
  todaydate;
  emailid;
  formdata;
  constructor() {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      emailid: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.pattern('')])
      ),
      password: new FormControl('', this.passwordvalidation),
    });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { passwd: true };
    }
  }

  onClickSubmit(data) {
    this.emailid = data.emailid;
  }
}
