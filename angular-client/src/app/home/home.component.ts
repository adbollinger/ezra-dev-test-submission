import { Component, Inject, OnInit } from '@angular/core'
import { Member, AddMemberRequest } from '../classes/member'
import { MemberService } from '../services/member.service'
import { take } from 'rxjs/operators'
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public members: Member[];
  public idForEdit: string;
  public memberForEdit: AddMemberRequest;
  public valid: boolean = false;
  public routeId: string = '';

  constructor(private memberService: MemberService,
    private route: ActivatedRoute) {
    this.getMembers();
    this.memberForEdit = {
      Name: '',
      Email: ''
    };
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.routeId = String(params.id);
    });
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
    $('#loading_overlay').removeClass('d-none');
    this.memberService.DeleteMember(id)
      .pipe(take(1))
      .subscribe(
        (result) => {
          // The alternative would be getting the index of the deleted member, then splicing them from the array
          // Considering the relatively small size of members in this case, I decided to go with the api call
          this.getMembers();
          $('#loading_overlay').addClass('d-none');
        },
        (error) => console.error(error),
      )
  }

  openEditModal(member) {
    this.idForEdit = member.id;
    this.memberForEdit = {
      Name: member.name,
      Email: member.email
    };
    this.valid = false;
    $('#edit_member').modal('show');
  }

  setMember(value: any) {
    this.valid = value.valid;
  }

  editMember() {
    // (DONE) TODO
    const member: Member = {
      Id: this.idForEdit,
      Name: this.memberForEdit.Name,
      Email: this.memberForEdit.Email
    };

    $('#loading_overlay').removeClass('d-none');
    this.memberService.EditMember(member)
      .pipe(take(1))
      .subscribe(
        (result) => {
          // The alternative would be finding and updating the edited member in the array
          // Considering the relatively small size of members in this case, I decided to go with the api call
          this.getMembers();
          $('#edit_member').modal('hide');
          $('#loading_overlay').addClass('d-none');
        },
        (error) => console.error(error),
      );
  }
}
