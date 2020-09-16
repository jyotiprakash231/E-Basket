package com.application.sales.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.application.sales.config.NotFoundException;
import com.application.sales.model.Product;
import com.application.sales.service.ProductService;

@RestController
public class ProductController {
	private static final String PRODUCTS_URL = "api/products";
	@Autowired
	private ProductService productService;

	@PostMapping(value = PRODUCTS_URL, consumes = "application/json")
	public Product addProduct(@RequestBody Product product) {
		return productService.addProduct(product);
	}

	@GetMapping(value = PRODUCTS_URL)
	public List<Product> getAllProduct() {
		return productService.getAllProduct();
	}

	@GetMapping(PRODUCTS_URL + "/{pid}")
	public Product getProduct(@PathVariable("pid") Long pid) throws NotFoundException {
		return productService.getProduct(pid);
	}

	@PutMapping(PRODUCTS_URL + "/{pid}")
	public Product updateProduct(@RequestBody Product product, @PathVariable("pid") Long pid) throws NotFoundException {
		return productService.updateProduct(product, pid);
	}

	@DeleteMapping(value ="api/products/{pid}", produces = "text/plain")
	public String deleteProduct(@PathVariable("pid") Long pid) throws NotFoundException {
		return productService.deleteProduct(pid);
	}

}
