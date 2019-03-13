package com.project.springproject.command;

import java.util.ArrayList;

import com.project.springproject.Session;
import com.project.springproject.beans.ComInformDAO;
import com.project.springproject.beans.ComInformDTO;
import com.project.springproject.beans.IOStorageDAO;
import com.project.springproject.beans.IOStorageResult;
import com.project.springproject.beans.StorageItemDAO;
import com.project.springproject.beans.StorageItemDTO;
import com.project.springproject.trans.beans.TransAndCashLogDAO;
import com.project.springproject.trans.beans.TransCashLogDTO;
import com.project.springproject.trans.beans.TransDTO;

public class TransSanIO {
	
	public static int checkSan(TransDTO dto) {
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		ComInformDAO companydao = Session.sqlSession.getMapper(ComInformDAO.class);
		IOStorageDAO iostorage = Session.sqlSession.getMapper(IOStorageDAO.class);
		ArrayList<ComInformDTO> companyInfo = new ArrayList<>();
		ArrayList<TransDTO> TransCodeInfo = new ArrayList<>();
		int ResultMoney = 0;
		int companyMoney = 0;
		int flag = 0;
		companyInfo = companydao.cominformlist();
		// 데이터 확인 후 금액 감소 및 증가 가능 확인
		if(companyInfo.size() > 0) {
			companyMoney = Integer.parseInt(companyInfo.get(0).getCommoney());
			TransCodeInfo = dao.SelectByBuyTransList(dto);
			if(TransCodeInfo.size() >0) {
				if(TransCodeInfo.get(0).getTrans_index().equals("구매")) {
					ResultMoney = companyMoney - Integer.parseInt(TransCodeInfo.get(0).getTrans_tmoney());
				}else {
					ResultMoney = companyMoney + Integer.parseInt(TransCodeInfo.get(0).getTrans_tmoney());
				}
			}
		}
		
		if(ResultMoney > 0) {
			if(dao.TransSanChange(dto) > 0) {
				flag = companydao.ComMoneyChange(String.valueOf(ResultMoney), companyInfo.get(0).getComnumber());
			}
		}
		if(flag > 0) {
			if(iostorage.IOStorageADD(TransCodeInfo.get(0)) > 0) {
				return flag;
			}else {
				return 0;
			}
		}
		return flag;
	}
	
	public static IOStorageResult iteminout(TransDTO dto) {
		IOStorageResult result = new IOStorageResult();
		StorageItemDAO realStoragedao = Session.sqlSession.getMapper(StorageItemDAO.class);
		IOStorageDAO inoutStoragedao = Session.sqlSession.getMapper(IOStorageDAO.class);
		TransAndCashLogDAO cashlogdao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		ArrayList<TransCashLogDTO> cashlist = new ArrayList<>();
		cashlist = cashlogdao.SelectByBuyTransCashLogList(dto);
		// 최초 cash log item_code, cash_cnt 배열화
		String[] logitemcodeArray = new String[cashlist.size()];
		String[] logitemcntArray = new String[cashlist.size()];
		if(cashlist.size() > 0) {
			for(int i = 0; i < cashlist.size(); i++) {
				logitemcodeArray[i] = cashlist.get(i).getItem_code();
				logitemcntArray[i] = cashlist.get(i).getCash_cnt();
			}
		}
		// 창고 재고 및 아이템 코드 가지고 오기
		String[] realitemcodeArray = new String[cashlist.size()];
		String[] realitemcntArray = new String[cashlist.size()];
		for(int i = 0; i < logitemcodeArray.length; i++) {
			StorageItemDTO itemdto = realStoragedao.selectByItem(logitemcodeArray[i]);
			realitemcodeArray[i] = itemdto.getItem_name();
			realitemcntArray[i] = itemdto.getItem_cnt();
		}
		// 입+출고 가능 여부 판단
		String[] resultcnt = new String[cashlist.size()];
		String msg = "";
		if(dto.getTrans_index().equals("구매")) {
			for(int i = 0; i < logitemcodeArray.length; i++) {
				resultcnt[i] = String.valueOf(Integer.parseInt(realitemcntArray[i]) + Integer.parseInt(logitemcntArray[i]));
				msg = "ok";
			}
		}else {
			for(int i = 0; i < logitemcodeArray.length; i++) {
				resultcnt[i] = String.valueOf(Integer.parseInt(realitemcntArray[i]) - Integer.parseInt(logitemcntArray[i]));
				if(Integer.parseInt(resultcnt[i]) > 0) {
					msg = "ok";
				}else {
					msg += realitemcodeArray[i] + "가(이) 부족하여 출고가 불가능 합니다.";
					break;
				}
			}
		}
		
		//본격적 실행
		if(msg.equals("ok")) {
			for(int i = 0; i < resultcnt.length; i++) {
				// 실제 창고에 저장
				realStoragedao.UpdateCnt(logitemcodeArray[i], resultcnt[i]);
			}
			if(dto.getTrans_index().equals("구매")) {
				inoutStoragedao.Updateinout("입고", dto.getTrans_code());
			}else {
				inoutStoragedao.Updateinout("출고", dto.getTrans_code());
			}
			result.setCnt(resultcnt.length);
			result.setState(msg);
		}else {
			result.setState(msg);
			result.setCnt(0);
		}
		return result;
	}
}
