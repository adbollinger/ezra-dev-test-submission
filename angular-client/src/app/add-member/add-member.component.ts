import { Component } from '@angular/core'
import { AddMemberRequest } from '../classes/member';
import { MemberService } from '../services/member.service';
import { take } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
})
export class AddMemberComponent {
  member: AddMemberRequest;
  valid: boolean = false;

  constructor(private memberService: MemberService,
    private router: Router) { 
    this.member = this.getEmptyMember();
  }

  setMember(value: any) {
    this.valid = value.valid;
    this.member = value.member;
  }
  
  addMember() {
    // (DONE) TODO
    this.memberService.AddMember(this.member)
    .pipe(take(1))
    .subscribe(
      (result) => {
        this.router.navigate(['/'], { queryParams: {id: result.id}});
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
