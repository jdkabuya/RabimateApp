using BusnessLayer.Models;
using DatabaseLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class CagesController(RabimateDbContext context) : BaseApiController
    {
        /// <summary>
        /// get cages
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<List<Cage>>> GetCages()
        {
            return await context.Cages.ToListAsync();
        }

        /// <summary>
        /// get cage by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Cage>> GetCage(string id)
        {
            var cage = await context.Cages.FindAsync(id);
            if (cage == null) return NotFound();

            return cage;
        }

        /// <summary>
        /// create a new cage
        /// </summary>
        /// <param name="cage"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult<Cage>> CreateCage(Cage cage)
        {
            await context.Cages.AddAsync(cage);
            return Ok();
        }

        /// <summary>
        /// update a cage
        /// </summary>
        /// <param name="cage"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<ActionResult<Cage>> UpdateCage(Cage cage)
        {
            context.Cages.Update(cage);
            await context.SaveChangesAsync();
            return Ok();
        }

        /// <summary>
        /// Delete the cage
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cage>> DeleteCage(string id)
        {
            var cage = await context.Cages.FindAsync(id);

            if (cage == null) return NotFound();
            context.Cages.Remove(cage);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
