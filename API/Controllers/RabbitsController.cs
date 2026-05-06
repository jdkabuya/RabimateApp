using BusnessLayer.Models;
using BusnessLayer.ModelViews;
using DatabaseLayer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    
    public class RabbitsController(RabimateDbContext context) : BaseApiController
    {
        /// <summary>
        /// Get a list of rabbits
        /// </summary>
        /// <returns></returns>
        //[HttpGet]
        //[Authorize]
        [AllowAnonymous]
        public async Task<ActionResult<List<Rabbit>>> GetRabbit()
        {
            return await context.Rabbits.ToListAsync();
        }

        [AllowAnonymous]
        [HttpGet]
        public List<RabbitMV> GetRabbitMV()
        {
            List<RabbitMV> rabbits = new List<RabbitMV>();
            var res = context.Rabbits;

            var result = from rabbit in context.Rabbits
                            join cage in context.Cages on rabbit.CageId equals cage.Id
                            join breed in context.Breeds on rabbit.BreedId equals breed.Id
                            join gender in context.Genders on rabbit.GenderId equals gender.Id
                            //join addby in context.Users on rabbit.Id equals addby.Id
                            //join upby in context.Users on rabbit.Id equals upby.Id
                            select new
                            {
                                RabbitId = rabbit.Id,
                                DBO = rabbit.DOB,
                                DateAdded = rabbit.DateAdded,
                                DateUpdated = rabbit.DateUpdated,
                                Imported = rabbit.Imported,
                                RabbitCode = breed.Code,
                                Breed = breed.Name,
                                Gender = gender.Description,
                                Cage = cage.Code,
                                CageAvailable = cage.IsAvailable
                                //AddedBy = addby.Firstname + ' ' + addby.Lastname,
                                //UpdatedBy = upby.Firstname + ' ' + upby.Lastname
                            };

            foreach (var item in result)
            {
                RabbitMV rabbit = new()
                {
                    Id = item.RabbitId,
                    DOB = item.DBO,
                    DateAdded = item.DateAdded,
                    DateUpdated = item.DateUpdated,
                    RabbitCode = item.RabbitCode,
                    Breed = item.Breed,
                    Gender = item.Gender,
                    Cage = item.Cage,
                    IsAvailable = item.CageAvailable,
                    Imported = item.Imported
                    //AddedBy = item.AddedBy,
                    //UpdatedBy = item.UpdatedBy,
                    
                };

                rabbits.Add(rabbit);
            }
            
            return rabbits;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Rabbit>> GetRabbit(string id)
        {
            
            var rabbit = await context.Rabbits.FindAsync(id);
            if (rabbit == null) return NotFound();
            return rabbit;
            
        }

        /// <summary>
        /// add a rabbit
        /// </summary>
        /// <param name="rabbit"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult> CreateRabbit(Rabbit rabbit)
        {
            await context.Rabbits.AddAsync(rabbit);
            return Ok();
        }

        /// <summary>
        /// update a rabbit
        /// </summary>
        /// <param name="rabbit"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<ActionResult> UpdateRabbit(Rabbit rabbit)
        {
            context.Update(rabbit);
            await context.SaveChangesAsync();
            return NoContent();
        }

        /// <summary>
        /// delete a rabbit
        /// </summary>
        /// <param name="rabbit"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteRabbit(string id)
        {
            var rabbit = await context.Rabbits.FindAsync(id);
            
            if (rabbit == null) return NotFound();
            
            context.Rabbits.Remove(rabbit);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
