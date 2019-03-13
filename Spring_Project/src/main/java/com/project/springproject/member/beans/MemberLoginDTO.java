package com.project.springproject.member.beans;


public class MemberLoginDTO {
	
	private int memidx;
	private String grantidx;
	private String part;
	private String rank;
	private String id;
	private String name;
	private String email;
	public MemberLoginDTO() {
		super();
	}
	public MemberLoginDTO(int memidx, String grantidx, String part, String rank, String id, String name, String email) {
		super();
		this.memidx = memidx;
		this.grantidx = grantidx;
		this.part = part;
		this.rank = rank;
		this.id = id;
		this.name = name;
		this.email = email;
	}
	public int getMemidx() {
		return memidx;
	}
	public void setMemidx(int memidx) {
		this.memidx = memidx;
	}
	public String getGrantidx() {
		return grantidx;
	}
	public void setGrantidx(String grantidx) {
		this.grantidx = grantidx;
	}
	public String getPart() {
		return part;
	}
	public void setPart(String part) {
		this.part = part;
	}
	public String getRank() {
		return rank;
	}
	public void setRank(String rank) {
		this.rank = rank;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
	
}
