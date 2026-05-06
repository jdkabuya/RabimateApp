using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusnessLayer.Models
{
    public class Cage
    {
        public Cage() { }
        
        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Code { get; set; }
        public bool IsAvailable { get; set; }
        public ICollection<Rabbit> Rabbits { get; set; }
    }
}
