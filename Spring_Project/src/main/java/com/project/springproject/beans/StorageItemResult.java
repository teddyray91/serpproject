package com.project.springproject.beans;

import java.util.ArrayList;

public class StorageItemResult {
	private int cnt;
	private String state;
	private ArrayList<StorageItemDTO> list;
	public StorageItemResult(int cnt, String state, ArrayList<StorageItemDTO> list) {
		super();
		this.cnt = cnt;
		this.state = state;
		this.list = list;
	}
	public StorageItemResult() {
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
	public ArrayList<StorageItemDTO> getList() {
		return list;
	}
	public void setList(ArrayList<StorageItemDTO> list) {
		this.list = list;
	}
	
	
}
