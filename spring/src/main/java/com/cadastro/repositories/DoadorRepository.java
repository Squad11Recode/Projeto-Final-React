package com.cadastro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cadastro.model.Doador;

@Repository
public interface DoadorRepository extends JpaRepository<Doador, Long> {

}
