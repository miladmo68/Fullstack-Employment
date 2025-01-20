package com.miladweb.fullstack_employment.repository;

import com.miladweb.fullstack_employment.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
