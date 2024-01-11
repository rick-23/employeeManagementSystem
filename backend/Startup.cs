using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

public class Startup {
    public IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration) {
        Configuration = configuration;
    }

    public void CofigureServices(IServiceCollection services) {
        if (Configuration["Environment"] == "Testing")
        {
            services.AddDbContext<ApplicationDBContext>(options =>
            {
                options.UseInMemoryDatabase("TestDatabase");
            });
        } else {
            services.AddDbContext<ApplicationDBContext>(options => options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
        }
    }
}