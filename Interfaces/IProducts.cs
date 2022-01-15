using glowof.Entities;

namespace glowof.Interfaces;

public interface IProducts
{
    public bool Add(Product p);
    public bool Delete(int id);
    public bool Update(Product p);
    public Product Get(int id);
    public List<Product> Get();

}