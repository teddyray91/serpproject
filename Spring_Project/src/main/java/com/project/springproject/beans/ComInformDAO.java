package com.project.springproject.beans;

import java.util.ArrayList;

public interface ComInformDAO {
	public ArrayList<ComInformDTO> cominformlist();
	public int cominformadd(ComInformDTO dto);
	public int comInformModify(ComInformDTO dto);
	public int ComMoneyChange(String money, String comnumber);
	
}
