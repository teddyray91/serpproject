package com.project.springproject.trans.beans;

import java.util.ArrayList;

public interface TransAndCashLogDAO {
	// 거래번호 조회
	public int findtranslog(TransDTO dto);
	// 구매 확인 조회
	public ArrayList<TransDTO> BuyConfimTransList_page(TransDTO dto, String page);
	public int BuyConfimTransList_totalpage(TransDTO dto);
	// 구매 미확인 조회
	public ArrayList<TransDTO> BuyUnconfirmTransList_page(TransDTO dto, String page);
	public int BuyUnconfirmTransList_totalpage(TransDTO dto);
	// 구매 현황 조회
	public ArrayList<TransDTO> BuyTransList_page(TransDTO dto, String page);
	public int BuyTransList_totalpage(TransDTO dto);
	// 구매현황에서 검색하기(거래명, 거래번호) 등 2개
	public ArrayList<TransDTO> BuySearch_transsubject_page(String trans_subject, String page);
	public int BuySearch_transsubject_totalpage(String trans_subject);
	public ArrayList<TransDTO> BuySearch_transcode_page(String trans_code, String page);
	public int BuySearch_transcode_totalpage(String trans_code);
	// 판매 현황 조회
	public ArrayList<TransDTO> SellTransList_page(TransDTO dto, String page);
	public int SellTransList_totalpage(TransDTO dto);
	// 판매 확인 조회
	public ArrayList<TransDTO> SellConfirmTransList_page(TransDTO dto, String page);
	public int SellConfirmTransList_totalpage(TransDTO dto);
	// 판매 미확인 조회
	public ArrayList<TransDTO> SellUnconfirmTransList_page(TransDTO dto, String page);
	public int SellUnconfirmTransList_totalpage(TransDTO dto);
	// 판매 현황에서 검색하기(거래명, 거래번호) 등 2개
	public ArrayList<TransDTO> SellSearch_transsubject_page(String trans_subject, String page);
	public int SellSearch_transsubject_totalpage(String trans_subject);
	public ArrayList<TransDTO> SellSearch_trnascode_page(String trans_code, String page);
	public int SellSearch_trnascode_totalpage(String trans_code);
	
	// 구매 등록
	public int transcodeadd(TransDTO dto);
	// 구매 상세등록(CashLog)
	public int transcashlogbuy(TransCashLogDTO dto);
	// 구매 현황 자세히 보기
	public ArrayList<TransDTO> SelectByBuyTransList(TransDTO dto);
	public ArrayList<TransCashLogDTO> SelectByBuyTransCashLogList(TransDTO dto);
	// 판매 현황 자세히 보기
	public ArrayList<TransDTO> SelectBySellTransList(TransDTO dto);
	public ArrayList<TransCashLogDTO> SelectBySellTransCashLogList(TransDTO dto);
	// 백업용 거래코드 조회
	public ArrayList<TransDTO> BackupList(String busi_number);
	// 거래코드 백업
	public int TransCodeBackup(String busi_number);
	// 로그 백업
	public int CashLogBackup(String trans_code);
	// 백업데이터 삭제
	public int CashLogDelete(String trans_code);
	public int TransCodeDelete(String busi_number);
	
	// 거래 삭제
	//백업
	public int DetailTranscodeBackup(TransDTO dto);
	public int DetailCashLogBackup(TransDTO dto);
	//삭제
	public int DetailTranscodeDelete(TransDTO dto);
	public int DetailCashLogDelete(TransDTO dto);
	// 개별 거래 수정
	public int DetailTranscodeModify(TransDTO dto);
	public int DetailCashLogUpdate(TransCashLogDTO dto);
	// 결제필요 클릭시 기능
	public int TransSanChange(TransDTO dto);
	// 담당자 결제 확인
	public ArrayList<TransDTO> Delete_User_confirm(String memidx);
	
	
	// 메인 최신 7개 가지고 오기
	public ArrayList<TransDTO> unconfirm_list(String memidx, String partidx);
	public ArrayList<TransDTO> confirm_list();
	
	public int mainmonthtotal(String m1, String m2);
	public int mainbuytotal(String m1, String m2);
	public int mainselltotal(String m1, String m2);
	public int mainunconftotal(String m1, String m2);
	
	
}
