package com.project.springproject.command;

import java.util.ArrayList;

import com.project.springproject.Session;
import com.project.springproject.business.beans.BusiDAO;
import com.project.springproject.trans.beans.TransAndCashLogDAO;
import com.project.springproject.trans.beans.TransDTO;

public class BusiDataRemove {
	
	// 백업(이관)
	public static int BusiBackup(String[] busi_number) {
		BusiDAO dao = Session.sqlSession.getMapper(BusiDAO.class);
		int result = 0;
		for(int i = 0; i < busi_number.length ; i++) {
			dao.transbackup(busi_number[i].toString());
			result = TransCodeBackup(busi_number[i].toString());
		}
		return result;
	}
	public static int TransCodeBackup(String busi_number) {
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		dao.TransCodeBackup(busi_number);
		return CashLogBackup(dao.BackupList(busi_number));
	}
	public static int CashLogBackup(ArrayList<TransDTO> trans_code) {
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		for(int i =0; i < trans_code.size(); i++) {
			dao.CashLogBackup(trans_code.get(i).getTrans_code());
		}
		return 1;
	}
	
	
	// 삭제
	public static int BusiDelete(String[] busi_number) {
		BusiDAO dao = Session.sqlSession.getMapper(BusiDAO.class);
		int result = 0;
		for(int i = 0; i < busi_number.length ; i++) {
			TransCodeDelete(busi_number[i].toString());
			result = dao.BusiDelete(busi_number[i].toString());
		}
		return result;
	}
	public static int TransCodeDelete(String busi_number) {
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		CashLogDelete(dao.BackupList(busi_number));
		dao.TransCodeDelete(busi_number);
		return 1;
	}
	public static int CashLogDelete(ArrayList<TransDTO> trans_code) {
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		for(int i =0; i < trans_code.size(); i++) {
			dao.CashLogDelete(trans_code.get(i).getTrans_code());
		}
		return 1;
	}
}
