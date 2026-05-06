using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusnessLayer.Models
{
    public class Gender
    {
        public Gender() { }

        [Key]
        public string Id {  get; set; }= Guid.NewGuid().ToString();

        [MaxLength(10)]
        public string Description { get; set; }
        public ICollection<Rabbit> Rabbits { get; set; }
    }
}
