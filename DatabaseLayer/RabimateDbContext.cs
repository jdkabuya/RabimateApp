using BusnessLayer.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DatabaseLayer
{
    public class RabimateDbContext(DbContextOptions options) : IdentityDbContext<User>(options)
    {
        public DbSet<Cage> Cages { get; set; }
        public DbSet<Breed> Breeds { get; set; }
        public DbSet<Gender> Genders { get; set; }
        public DbSet<History> Histories { get; set; }
        public DbSet<Rabbit> Rabbits { get; set; }
        public DbSet<EndUser> EndUsers { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
