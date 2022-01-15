using glowof.Entities;
using glowof.Servies;
using Microsoft.AspNetCore.Mvc;

namespace glowof.Controllers;

[ApiController]
[Route("[controller]")]
public class Controller : ControllerBase
{
    private readonly ProductService _productService;

    public Controller(ProductService productService)
    {
        _productService = productService;
    }

    [HttpGet("product/{id}")]
    public ActionResult<Product> GetProduct(int id)
    {
       Product p= _productService.Get(id);
       if (p == null)
           return NotFound("No Product Found");
       return p;
    }

    [HttpGet("product")]

    public ActionResult<List<Product>> Get()
    {
        List<Product> p=_productService.Get();
        if (p == null)
        {
            return NotFound("The list is empty no product available");
        }

        return p;
    }

    [HttpPost("product/add")]

    public ActionResult<Product> Add([FromBody] Product p)
    {
        if (_productService.Add(p))
            return p;
        return BadRequest("Error can't add the product");
    }
}