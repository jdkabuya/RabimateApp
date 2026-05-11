using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.DependencyInjection;

namespace DatabaseLayer
{
    public class RabimateDesignTimeServices : IDesignTimeServices
    {
        public void ConfigureDesignTimeServices(IServiceCollection services)
        {
            // This allows EF Core to resolve the DbContext factory properly
            services.AddEntityFrameworkSqlServer();
        }
    }
}
