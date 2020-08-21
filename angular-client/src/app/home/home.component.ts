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
    // (DONE) TODO
    this.memberService.DeleteMember(id)
    .pipe(take(1))
    .subscribe(
      (result) => {
        // The alternative would be getting the index of the deleted member, then splicing them from the array
        // Considering the relatively small size of members in this case, I decided to go with the api call
        this.getMembers();
      }
    )
  }

  editMember(id) {
    // TODO
    throw 'Implement me'
  }
}
