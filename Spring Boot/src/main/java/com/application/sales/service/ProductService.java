/**
 * 
 */
package com.application.sales.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.sales.config.NotFoundException;
import com.application.sales.model.Product;
import com.application.sales.repository.ProductRepository;

/**
 * @author Jyoti Prakash
 *
 */

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepo;
	
	public Product addProduct(Product product) {
		productRepo.save(product);
		return product;
	}
	
	public List<Product> getAllProduct() {
		return productRepo.findAll();
	}
	
	public Product getProduct(Long pid) throws NotFoundException {
		Product product = productRepo.findById(pid)
				.orElseThrow(() -> new NotFoundException("Product not found at this id:" + pid));
		return product;
	}
	
	public Product updateProduct(Product product,Long pid) throws NotFoundException {
		Product productDetails = productRepo.findById(pid)
				.orElseThrow(() -> new NotFoundException("Product not found at this id:" + pid));
		productDetails.setName(product.getName());
		productDetails.setDescription(product.getDescription());
		productDetails.setPrice(product.getPrice());
		productDetails.setQuantity(product.getQuantity());
		return productRepo.save(productDetails);
	}

	public String deleteProduct(Long pid) throws NotFoundException {
		Product product = productRepo.findById(pid)
				.orElseThrow(() -> new NotFoundException("Product not found at this id:" + pid));
		productRepo.delete(product);
		return "Successfully deleted product";
	}
}
