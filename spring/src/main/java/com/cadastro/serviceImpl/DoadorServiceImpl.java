package com.cadastro.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastro.exception.ResourceNotFoundException;
import com.cadastro.model.Doador;
import com.cadastro.repositories.DoadorRepository;
import com.cadastro.service.DoadorService;

@Service
public class DoadorServiceImpl implements DoadorService{
	
	@Autowired
	private DoadorRepository doadorRepository;

	
	@Override
	public Doador saveDoador(Doador doador) {
		return doadorRepository.save(doador);
	}
	@Override
	public List <Doador> getAllDoador(){
		return doadorRepository.findAll();
	}
	
	@Override
	public Doador getDoadorById(long Id_Doador) {
		return doadorRepository.findById(Id_Doador). orElseThrow(() ->
		new ResourceNotFoundException("Doador", "Id_Doador", Id_Doador));		
		
	}
	@Override
	public Doador updateDoador(Doador doador, long Id_Doador) {
		Doador  doadorExistente = doadorRepository.findById(Id_Doador). orElseThrow(
				() -> new ResourceNotFoundException("Doador", "Id_Doador", Id_Doador));
		doadorExistente.setNome(doador.getNome());
		doadorExistente.setEmail(doador.getEmail());
		
		doadorRepository.save(doadorExistente);
		return doadorExistente;
	}
	@Override
	public void deleteDoador(long Id_Doador) {
	doadorRepository.findById(Id_Doador).orElseThrow(() ->
	new ResourceNotFoundException ("Doador", "Id_Doador", Id_Doador));
	
	doadorRepository.deleteById(Id_Doador);
	}
}
