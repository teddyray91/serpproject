package com.project.springproject.beans;

import java.util.ArrayList;

public class ComInformResult {
	private int cnt;
	private String state;
	private ArrayList<ComInformDTO> list;
	
	
	public ComInformResult() {
		super();
	}
	public ComInformResult(int cnt, String state, ArrayList<ComInformDTO> list) {
		super();
		this.cnt = cnt;
		this.state = state;
		this.list = list;
	}
	public int getCnt() {
		return cnt;
	}
	public void setCnt(int cnt) {
		this.cnt = cnt;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public ArrayList<ComInformDTO> getList() {
		return list;
	}
	public void setList(ArrayList<ComInformDTO> list) {
		this.list = list;
	}	
}
