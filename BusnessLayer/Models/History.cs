using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusnessLayer.Models
{
    public class History
    {
        public History() { }

        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [ForeignKey("Rabbit")]
        public string RabbitId { get; set; }

        [ForeignKey("Cage")]

        public string CageId { get; set; }

        public string MateWith { get; set; }

        public DateTime DateMate { get; set; }

        public DateTime DateExpected { get;set; }

        public DateTime DateLittered { get; set; }
        
        public int LitterCount { get; set; }

        public int KittenDeadCount { get; set; }

        public int BuckCount { get; set; }

        public int DoeCount {  get; set; }

        public DateTime DateAdded { get; set; }

        public DateTime DateUpdated { get; set; }
        
        //[ForeignKey("User")]
        public string AddedBy { get; set; }

        //[ForeignKey("User")]
        public string UpdatedBy { get; set; }
    }
}
