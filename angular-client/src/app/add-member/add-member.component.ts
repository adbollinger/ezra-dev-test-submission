import { Component } from '@angular/core'
import { AddMemberRequest } from '../classes/member';
import { MemberService } from '../services/member.service';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
})
export class AddMemberComponent {
  member: AddMemberRequest;
  valid: boolean = false;

  constructor(private memberService: MemberService) { 
    this.member = this.getEmptyMember();
  }

  setMember(value: any) {
    this.valid = value.valid;
    this.member = value.member;
  }
  
  addMember() {
    // TODO
    this.memberService.AddMember(this.member)
    .pipe(take(1))
    .subscribe(
      (result) => {
        // TODO - add redirect
      }
    );
  }

  getEmptyMember(): AddMemberRequest {
    const member: AddMemberRequest = {
      Name: '',
      Email: ''
    };
    return member;
  }
}
