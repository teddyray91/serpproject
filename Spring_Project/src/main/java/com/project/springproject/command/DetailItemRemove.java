package com.project.springproject.command;

import com.project.springproject.Session;
import com.project.springproject.trans.beans.TransAndCashLogDAO;
import com.project.springproject.trans.beans.TransCashLogDTO;
import com.project.springproject.trans.beans.TransDTO;

public class DetailItemRemove {
	
	// 삭제
	public static int DetailBackup(TransDTO dto){
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		int r1 = 0;
		if(dao.DetailCashLogBackup(dto) > 0) {
			r1 = dao.DetailTranscodeBackup(dto);
		}else {
			return r1;
		}
		return r1;
	}
	public static int DetailRemove(TransDTO dto){
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		int r1 = 0;
		if(dao.DetailCashLogDelete(dto) > 0) {
			r1 = dao.DetailTranscodeDelete(dto);
		}else {
			return r1;
		}
		return r1;
	}
	
	// 수정
	public static int DetailCashLogRemove(TransDTO dto) {
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		int r1 = 0;
		r1 = dao.DetailCashLogDelete(dto);
		return r1;
	}
	public static int DetailTransCodeUpdate(TransDTO dto) {
		int r1 = 0;
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		r1 = dao.DetailTranscodeModify(dto);
		return r1;
	}
	public static int DetailCashLogUpdate(TransCashLogDTO dto) {
		int r1 = 0;
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		r1 = dao.DetailCashLogUpdate(dto);
		return r1;
	}
}
