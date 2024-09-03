package com.abbadia.gatos.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Table(name = "gatos")
@Entity(name = "gatos")

public class Gatos {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String foto;
	private String lugar;
	private String nomeGato;

	

	

	public Gatos() {
	}

	public Gatos(Long id,String foto, String lugar, String nomeGato) {
		this.id = id;
		this.nomeGato = nomeGato;
		this.foto = foto;
		this.lugar = lugar;
	}
	
	public Gatos(GatosRequestDTO data) {
		this.foto = data.foto();
		this.lugar = data.lugar();
		this.nomeGato = data.nomeGato();
		
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomeGato() {
		return nomeGato;
	}

	public void setNomeGato(String nomeGato) {
		this.nomeGato = nomeGato;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getLugar() {
		return lugar;
	}

	public void setLugar(String lugar) {
		this.lugar = lugar;
	}

}
