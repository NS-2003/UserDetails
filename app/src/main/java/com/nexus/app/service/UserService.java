package com.nexus.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.nexus.app.entity.UserDetails;
import com.nexus.app.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	public UserRepository userRepository;
	
	public List<UserDetails> getDetails(){
		return userRepository.findAll();
	}
	
	public Optional<UserDetails> getDetailsById(int id) {
		return userRepository.findById(id);
	}
	public UserDetails postDetails( UserDetails userDetails) {
		return userRepository.save(userDetails);
	}
	
	public void deleteDetails (int userId) {
		userRepository.deleteById(userId);
	}
	
	public UserDetails updateDetails (UserDetails userDetails ) {
		return userRepository.save(userDetails);
	}
	
	public List<UserDetails> getByPages(int pg_no, int pg_size) {
		Pageable page = PageRequest.of(pg_no, pg_size);
		Page<UserDetails> pageResult= userRepository.findAll(page);
		return pageResult.toList();
	}
	
	public List<UserDetails> sort(String field)
	{
		return userRepository.findAll(Sort.by(field));
	}
}
