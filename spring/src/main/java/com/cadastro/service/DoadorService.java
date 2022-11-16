package com.cadastro.service;

import java.util.List;

import com.cadastro.model.Doador;

public interface DoadorService {
Doador saveDoador(Doador doador);
List<Doador>getAllDoador();
Doador getDoadorById(long Id_Doador);
Doador updateDoador(Doador doador, long Id_Doador);
void deleteDoador(long Id_Doador);

}
