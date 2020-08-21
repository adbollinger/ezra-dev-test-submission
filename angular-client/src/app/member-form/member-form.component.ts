import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddMemberRequest } from '../classes/member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent {

  @Input() member: AddMemberRequest;
  @Output() formOutput: EventEmitter<{valid: boolean, member: AddMemberRequest}> = new EventEmitter();

  showNameError: boolean = false;
  showEmailError: boolean = false;

  constructor() { }

  onChange() {
    const valid = this.validateName() && this.validateEmail();
    this.formOutput.emit({valid: valid, member: this.member});
  }

  validateEmail(): boolean {
    // Taken from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = re.test(this.member.Email)
    this.showEmailError = !valid;

    return valid;
  }

  validateName(): boolean {
    const valid = this.member.Name != '';
    this.showNameError = !valid;
    return valid;
  }

}
