using Microsoft.AspNetCore.Identity;

namespace BusnessLayer.Models
{
    public class EndUser: IdentityUser
    {
        public string DisplayName { get; set; }
        public string Bio { get; set; }
    }
}
