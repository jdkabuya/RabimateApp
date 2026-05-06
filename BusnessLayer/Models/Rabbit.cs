using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusnessLayer.Models
{
    public class Rabbit
    {
        public Rabbit() { }

        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required string Code  { get; set; }

        [ForeignKey("Cage")]
        public required string CageId {  get; set; }

        [ForeignKey("Gender")]
        public string GenderId { get; set; }

        public DateTime DOB { get; set; }

        public bool Imported { get; set; }

        [ForeignKey("Breed")]
        public string BreedId { get; set; }

        public DateTime DateAdded { get; set; } = DateTime.Now;

        public DateTime DateUpdated { get; set; }

        //public string AddedBy { get; set; }

        //public string UpdatedBy { get; set; }

        public ICollection<History> Histories { get; set; }

    }


}

