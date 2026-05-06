using BusnessLayer.Models;
using DatabaseLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class HistoriesController(RabimateDbContext context) : BaseApiController
    {
        /// <summary>
        /// Get a list of histories
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<List<History>>> GetHistories()
        {
            return await context.Histories.ToListAsync();
        }

        /// <summary>
        /// get history by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>

        [HttpGet("{id}")]
        public async Task<ActionResult<History>> GetHistory(string id)
        {
            var history = await context.Histories.FindAsync(id);
            if (history == null) return NotFound();
            return history;

        }

        /// <summary>
        /// add a history
        /// </summary>
        /// <param name="history"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult> CreateHistory(History history)
        {
            await context.Histories.AddAsync(history);
            return Ok();
        }

        /// <summary>
        /// update a history
        /// </summary>
        /// <param name="history"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<ActionResult> UpdateHistory(History history)
        {
            context.Update(history);
            await context.SaveChangesAsync();
            return NoContent();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteHistory(string id)
        {
            var history = await context.Histories.FindAsync(id);

            if (history == null) return NotFound();

            context.Histories.Remove(history);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
