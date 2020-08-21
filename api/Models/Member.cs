using System;

namespace EzraTest.Models
{
    public class Member
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }

    public class AddMemberRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
    }
}