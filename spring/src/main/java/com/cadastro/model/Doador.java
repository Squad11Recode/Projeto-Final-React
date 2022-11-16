package com.cadastro.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


@Entity
@Data
@Table (name="doador")
public class Doador {

	//Variáveis
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id_Doador;
	
	@Column(name = "Nome", nullable = false)
	private String Nome;
	
	@Column(name = "Email", nullable = false)
	private String Email;
	
	
	
}
