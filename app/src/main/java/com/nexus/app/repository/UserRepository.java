package com.nexus.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nexus.app.entity.UserDetails;

@Repository
public interface UserRepository extends JpaRepository<UserDetails, Integer> {
	
}
