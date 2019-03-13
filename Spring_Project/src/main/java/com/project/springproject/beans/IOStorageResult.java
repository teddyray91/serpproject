package com.project.springproject.beans;

import java.util.ArrayList;

public class IOStorageResult {
	private int cnt;
	private String state;
	private ArrayList<IOStorageDTO> list;
	public IOStorageResult(int cnt, String state, ArrayList<IOStorageDTO> list) {
		super();
		this.cnt = cnt;
		this.state = state;
		this.list = list;
	}
	public IOStorageResult() {
		super();
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
	public ArrayList<IOStorageDTO> getList() {
		return list;
	}
	public void setList(ArrayList<IOStorageDTO> list) {
		this.list = list;
	}
	
	
}
