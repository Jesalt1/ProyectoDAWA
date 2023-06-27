using Microsoft.EntityFrameworkCore;

namespace Tutorizacion12_06_23.Models
{
    public class SalesDB2023DbContext: DbContext
    {
        public SalesDB2023DbContext()
        {

        }
        public SalesDB2023DbContext(DbContextOptions<SalesDB2023DbContext> options): base(options)
        { 

        }
   
    }


}

