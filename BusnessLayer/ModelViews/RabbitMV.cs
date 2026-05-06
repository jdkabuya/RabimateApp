using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusnessLayer.ModelViews
{
    public class RabbitMV
    {
       
        public string Id { get; set; }
        public required string RabbitCode { get; set; }
      
        public required string Cage { get; set; }

        
        public string Gender { get; set; }

        public DateTime DOB { get; set; }

        public bool Imported { get; set; }

        
        public string Breed { get; set; }

        public DateTime DateAdded { get; set; } 

        public DateTime DateUpdated { get; set; }

        //public string AddedBy { get; set; }

        //public string UpdatedBy { get; set; }
        public bool IsAvailable { get; set; }
    }
}
