using glowof.db;
using glowof.Entities;
using glowof.Interfaces;

namespace glowof.Servies;

public class ProductService : IProducts
{
    private readonly GlowContext _db;

   public ProductService(GlowContext glowContext)
    {
        _db = glowContext;
    }
    
    public bool Add(Product p)
    {
        try
        {
            _db.Products.Add(p);
            _db.SaveChanges();
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
       
    }

    public bool Delete(int id)
    {
        try
        {
            _db.Products.Remove(_db.Products.Where(p => p.id == id).First());
            _db.SaveChanges();
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public bool Update(Product p)
    {
        try
        {
            _db.Products.Update(p);
            _db.SaveChanges();

            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public Product Get(int id)
    {
        try
        {
            
            return _db.Products.Where(p => p.id == id).FirstOrDefault();

        }
        catch (Exception e)
        {
            return null;
        }
    }

    public List<Product> Get()
    {
        return _db.Products.ToList();
    }
}