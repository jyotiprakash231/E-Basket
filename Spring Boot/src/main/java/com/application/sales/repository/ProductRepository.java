package com.application.sales.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.sales.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
