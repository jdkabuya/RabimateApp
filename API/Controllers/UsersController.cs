using BusnessLayer.Models;
using DatabaseLayer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    public class UsersController(RabimateDbContext context) : BaseApiController
    {
        /// <summary>
        /// Get all the users
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return await context.Users.ToListAsync();
        }

        /// <summary>
        /// Get a user by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(string id)
        {
            var user = await context.Users.FindAsync(id); 
            if (user == null) return NotFound();

            return user;
        }


        [HttpPost]
        public async Task<ActionResult> CreateUser(User user )
        {
            await context.Users.AddAsync(user);
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> UpdateUser(User user)
        {
            context.Update(user);
            await context.SaveChangesAsync();
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(string id)
        {
            var user = await context.Users.FindAsync(id);
            
            if (user == null) return NotFound();
            
            context.Remove(user);
            await context.SaveChangesAsync();
            return NoContent();
        }

    }
}
