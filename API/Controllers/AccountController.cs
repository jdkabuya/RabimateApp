using API.UserDTOs;
using BusnessLayer.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace API.Controllers
{
    public class AccountController(SignInManager<User> signInManager) : BaseApiController
    {
        //[AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult> RegisterUser(RegisterDto registerDto)
        {
            var user = new User
            {
                UserName = registerDto.Email,
                Password = registerDto.Password
            };

            var result = await signInManager.UserManager.CreateAsync(user, registerDto.Password);

            if (result.Succeeded) return Ok();

            foreach(var error in result.Errors)
            {
                ModelState.AddModelError(error.Code, error.Description);
            }
            return ValidationProblem();
        }

        [Authorize]
        [HttpGet("user-info")]
        public async Task<ActionResult> GetUserInfo()
        {
            if (!User.Identity?.IsAuthenticated ?? true)
            {
                return Unauthorized(); // or return BadRequest("Authentication required")
            }

            var user = await signInManager.UserManager.GetUserAsync(User);
            
            if (user == null) return NotFound(); // User claims exist but no matching user in DB
            
            return Ok(new { user.UserName, user.Email, user.Id });
        }

        [HttpPost("logout")]
        public async Task<ActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return NoContent();
        }

        [HttpGet("pingauth")]
        public async Task <ActionResult> PinGauth(ClaimsPrincipal user)
        {
            var email = user.FindFirstValue(ClaimTypes.Email);
            return Ok(); 
        }

    }
}
