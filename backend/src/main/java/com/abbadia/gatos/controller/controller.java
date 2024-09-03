package com.abbadia.gatos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abbadia.gatos.entities.Gatos;
import com.abbadia.gatos.entities.GatosReponseDTO;
import com.abbadia.gatos.entities.GatosRepository;
import com.abbadia.gatos.entities.GatosRequestDTO;

@RestController
@RequestMapping("gatos")
public class controller {

	@Autowired
	private GatosRepository repository;

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping
	public List<GatosReponseDTO> getAll() {

		List<GatosReponseDTO> listaGatos = repository.findAll().stream().map(GatosReponseDTO::new).toList();

		return listaGatos;
	}

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping
	public void gravarGato(@RequestBody GatosRequestDTO data) {
		Gatos gatosData = new Gatos(data);
		repository.save(gatosData);
		return;

	}

}
