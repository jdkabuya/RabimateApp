using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace BusnessLayer.Models
{
    public class User : IdentityUser
    {
        public User():base() { }
        //[Key]
        //public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        [DataType(DataType.PhoneNumber)]
        [StringLength(10)]
        public string Telephone { get; set; }

        [DataType(DataType.Password)]
        public string Password { get; set; }
        public DateTime DateAdded { get; set; }

        public string DisplayName { get; set; }
    }
}
