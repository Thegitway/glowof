using glowof.Entities;
using Microsoft.EntityFrameworkCore;

namespace glowof.db;

public class GlowContext : DbContext
{
    public GlowContext(DbContextOptions<GlowContext> options):base(options)
    {
        
    }
    
    public virtual DbSet<Product> Products { get; set; }
}