package com.cadastro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cadastro.model.Doador;
import com.cadastro.serviceImpl.DoadorServiceImpl;


@RestController
@CrossOrigin("*")
@RequestMapping("api/doador")
public class DoadorController {
	
	@Autowired
	private DoadorServiceImpl service;
	
	//REQUEST TESTE
	@GetMapping ("/home")
	public String hello() {
		return "oi";
	}
	//REQUEST DE LISTAGEM
	//localhost:8080/api/doador
	@GetMapping
	public ResponseEntity<List<Doador>> findAll(){
		List<Doador>doador = service.getAllDoador();
		return ResponseEntity.ok().body(doador);		
		
	}
	//REQUEST POR ID
	@GetMapping("{Id_Doador}")
	public ResponseEntity<Doador> getDoadorById(@PathVariable("Id_Doador") long DoadorId){
		return new ResponseEntity<Doador>(service.getDoadorById(DoadorId),HttpStatus.OK);
		
	}
	//REQUEST PARA SALVAR
	@PostMapping
	public ResponseEntity<Doador>saveDoador(@RequestBody Doador doador){
		return new ResponseEntity<Doador>(service.saveDoador(doador), HttpStatus.CREATED);
	}
	
	//REQUEST PARA ATUALIZAR
	@PutMapping({"Id_Doador"})
	public ResponseEntity<Doador> updateDoador(@PathVariable("Id_Doador")long Id_Doador, 
			@RequestBody Doador doador){
		return new ResponseEntity<Doador>(service.updateDoador(doador, Id_Doador), HttpStatus.OK);
	}
	
	//REQUEST PARA DELETAR
	@DeleteMapping("{Id_Doador}")
	public ResponseEntity<String> deleteDoador(@PathVariable("Id_Doador") long Id_Doador){
		service.deleteDoador(Id_Doador);
		return new ResponseEntity<String>("Doador deletado  com sucesso.", HttpStatus.OK);
	}
	
}