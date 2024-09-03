package com.abbadia.gatos.entities;

public record GatosReponseDTO(Long id,String foto, String lugar, String nomeGato) {

	public GatosReponseDTO(Gatos gatos) {

		this(gatos.getId(), gatos.getFoto(), gatos.getLugar(), gatos.getNomeGato());

	}

}
