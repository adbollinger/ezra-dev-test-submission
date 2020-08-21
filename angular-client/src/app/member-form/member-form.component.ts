import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddMemberRequest } from '../classes/member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  @Input() member: AddMemberRequest;
  @Output() formOutput: EventEmitter<{valid: boolean, member: AddMemberRequest}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    const valid = this.validateEmail() && this.validateName();
    this.formOutput.emit({valid: valid, member: this.member});
  }

  validateEmail(): boolean {
    // Taken from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.member.Email);
  }

  validateName(): boolean {
    return this.member.Name != '';
  }

}
