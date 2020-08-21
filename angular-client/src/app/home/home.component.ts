import { Component, Inject } from '@angular/core'
import { Member } from '../classes/member'
import { MemberService } from '../services/member.service'
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public members: Member[]

  constructor(private memberService: MemberService) {
    this.getMembers();
  }

  getMembers() {
    this.memberService.GetMembers()
    .pipe(take(1))
    .subscribe(
      (result) => {
        this.members = result
      },
      (error) => console.error(error),
    )
  }

  deleteMember(id) {
    // TODO
    throw 'Implement me'
  }

  editMember(id) {
    // TODO
    throw 'Implement me'
  }
}
