using glowof.db;
using Microsoft.EntityFrameworkCore;

namespace glowof.Entities;

public class Seed
{
    private GlowContext _glowContext;

    public Seed(GlowContext glowContext)
    {
        _glowContext = glowContext;
    }

    //create the database and insert data in it
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new GlowContext(
                   serviceProvider.GetRequiredService
                       <DbContextOptions<GlowContext>>()))
        {
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();
            context.SaveChanges();

            context.Products.AddRange(
                new Product
                {
                    name = "mirror",
                    description = "a polished or smooth surface",
                    price = 120,
                    stock = 500
                },
                new Product
                {
                    name = "eye shadow",
                    description = "smooth surface",
                    price = 350,
                    stock = 30
                },
                new Product
                {
                    name = "lipsticks",
                    description = "polished",
                    price = 70,
                    stock = 670
                });
            context.SaveChanges();

        }
    }
}