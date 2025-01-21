package com.miladweb.fullstack_employment.exeption;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id) {
        super("User with id " + id + " not found");
    }
}
