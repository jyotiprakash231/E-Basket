package com.application.sales.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.sales.model.Quantity;

public interface QuantityRepository extends JpaRepository<Quantity, Long> {

}
