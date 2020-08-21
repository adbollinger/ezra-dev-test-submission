using System;
using System.Collections.Generic;

using EzraTest.DB;
using EzraTest.Models;

using Microsoft.AspNetCore.Mvc;

namespace EzraTest.Controllers
{
    [ApiController]
    [Route("members")]
    public class MembersController : ControllerBase
    {
        private readonly IMembersRepository _membersRepository;

        public MembersController()
        {
            _membersRepository = new MembersRepository("app.db");
        }

        [HttpGet]
        [Route("")]
        public ActionResult<IEnumerable<Member>> GetAllMembers()
        {
            return StatusCode(200, _membersRepository.GetMembers());
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<Member> GetMember(Guid id)
        {
            return StatusCode(200, _membersRepository.GetMember(id));
        }

        // (DONE) TODO
        [HttpPut]
        [Route("add")]
        public ActionResult<Member> AddMember([FromBody] AddMemberRequest newMember)
        {
            if (newMember == null || newMember.Name == null || newMember.Email == null)
                return StatusCode(500);

            Member member = new Member
            {
                Email = newMember.Email,
                Name = newMember.Name,
                Id = new Guid()
            };

            int rowsAffected = _membersRepository.AddMember(member);
            bool success = rowsAffected == 1;

            if (success)
                return StatusCode(200, member);
            else
                return StatusCode(500);
        }

        // (DONE) TODO
        [HttpPost]
        [Route("update")]
        public ActionResult<Member> UpdateMember([FromBody] Member member)
        {
            if (member == null || member.Id == null || member.Name == null || member.Email == null)
                return StatusCode(500);

            int rowsAffected = _membersRepository.UpdateMember(member);
            bool success = rowsAffected == 1;

            if (success)
                return StatusCode(200, member);
            else
                return StatusCode(500);
        }

        // (DONE) TODO
        [HttpDelete]
        [Route("delete/{id}")]
        public ActionResult<Member> DeleteMember(Guid id)
        {
            if (id == null)
                return StatusCode(500);

            int rowsAffected = _membersRepository.DeleteMember(id);
            return StatusCode(200, rowsAffected == 1);
        }
    }
}
