package com.application.sales.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.sales.model.Status;

public interface StatusRepository extends JpaRepository<Status, Long> {

}
