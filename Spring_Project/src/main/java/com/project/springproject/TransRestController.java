package com.project.springproject;


import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.springproject.beans.MainGraphDTO;
import com.project.springproject.beans.MainGraphResult;
import com.project.springproject.command.DetailItemRemove;
import com.project.springproject.command.TransSanIO;
import com.project.springproject.trans.beans.TransAndCashLogDAO;
import com.project.springproject.trans.beans.TransCashLogDTO;
import com.project.springproject.trans.beans.TransCashLogResult;
import com.project.springproject.trans.beans.TransDTO;
import com.project.springproject.trans.beans.TransDetailResult;
import com.project.springproject.trans.beans.TransResult;


@RestController
@RequestMapping(value="/transitem")
public class TransRestController {
	// 마지막 거래번호 찾기
	@RequestMapping(value="/findtranslog", method=RequestMethod.POST)
	public int FindTransLog(TransDTO dto) {
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		int result = 0;
		result = dao.findtranslog(dto);
		return result+1;
	}
	// 거래 등록
	@RequestMapping(value="/transcodeadd", method=RequestMethod.POST)
	public TransResult transcodeadd(TransDTO dto) {
		TransResult result = new TransResult();
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		int cnt = 0;
		cnt = dao.transcodeadd(dto);
		if(cnt > 0) {
			result.setCnt(cnt);
			result.setState("ok");
		}else {
			result.setCnt(cnt);
			result.setState("fail");
		}
		return result;
	}
	
	// 거래 상세 Cahs_Log 등록
	@RequestMapping(value="/transcashlogbuy", method=RequestMethod.POST)
	public TransResult transcashlogbuy(TransCashLogDTO dto) {
		TransResult result = new TransResult();
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		int cnt = 0;
		cnt = dao.transcashlogbuy(dto);
		if(cnt > 0) {
			result.setCnt(cnt);
			result.setState("ok");
		}else {
			result.setCnt(cnt);
			result.setState("fail");
		}
		return result;
	}
	@RequestMapping(value="/transcashlogsell", method=RequestMethod.POST)
	public TransResult transcashlogsell(TransCashLogDTO dto) {
		TransResult result = new TransResult();
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		int cnt = 0;
		cnt = dao.transcashlogbuy(dto);
		if(cnt > 0) {
			result.setCnt(cnt);
			result.setState("ok");
		}else {
			result.setCnt(cnt);
			result.setState("fail");
		}
		return result;
	}
	
	// 구매현황 리스트 가지고 오기
	@RequestMapping(value="/buy/transcodelist", method=RequestMethod.POST)
	public TransResult transcodelistbuy(TransDTO dto, String page) {
		TransResult result = new TransResult();
		ArrayList<TransDTO> list = new ArrayList<>();
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		int total =0;
		if(page == null) page = "1";
		list = dao.BuyTransList_page(dto, page);
		total = dao.BuyTransList_totalpage(dto);
		if(list.size() > 0) {
			result.setCnt(total);
			result.setState("ok");
			result.setList(list);
		}else {
			result.setCnt(total);
			result.setState("fail");
		}
		return result;
	}
	// 구매 현황 디테일 리스트
	@RequestMapping(value="/buy/transdetaillist", method=RequestMethod.POST)
	public TransDetailResult transdetaillist(TransDTO dto) {
		TransDetailResult result = new TransDetailResult();
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		ArrayList<TransDTO> list1 = new ArrayList<>();
		ArrayList<TransCashLogDTO> list2 = new ArrayList<>();
		list1 = dao.SelectByBuyTransList(dto);
		list2 = dao.SelectByBuyTransCashLogList(dto);
		
		if(list1.size() > 0 && list2.size() > 0) {
			result.setCnt(list1.size());
			result.setState("ok");
			result.setList1(list1);
			result.setList2(list2);
		}else {
			result.setCnt(list1.size());
			result.setState("fail");
			result.setList1(list1);
			result.setList2(list2);
		}
		
		return result;
	}
		
		
	// 판매현황 리스트 가지고 오기
	@RequestMapping(value="/sell/transcodelist", method=RequestMethod.POST)
	public TransResult transcodelistsell(TransDTO dto, String page) {
		TransResult result = new TransResult();
		ArrayList<TransDTO> list = new ArrayList<>();
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		int total = 0;
		if(page == null) page = "1";
		
		list = dao.SellTransList_page(dto, page);
		total = dao.SellTransList_totalpage(dto);
		if(list.size() > 0) {
			result.setCnt(total);
			result.setState("ok");
			result.setList(list);
		}else {
			result.setCnt(total);
			result.setState("fail");
		}
		return result;
	}
	
	// 구매현황, 판매현황 업데이트
	@RequestMapping(value="/modify/transcodeupdate", method=RequestMethod.POST)
	public TransResult transcodeUpdate(TransDTO dto) {
		TransResult result = new TransResult();
		if(DetailItemRemove.DetailTransCodeUpdate(dto) > 0) {
			result.setState("ok");
			result.setCnt(1);
		}else {
			result.setState("fail");
		}
		return result;
	}
	@RequestMapping(value="/modify/cashlogremove", method=RequestMethod.POST)
	public TransResult cashlogremove(TransDTO dto) {
		TransResult result = new TransResult();
		if(DetailItemRemove.DetailCashLogRemove(dto) > 0) {
			result.setState("ok");
			result.setCnt(1);
		}else {
			result.setState("fail");
		}
		return result;
	}
	@RequestMapping(value="/modify/cashlogupdate", method=RequestMethod.POST)
	public TransResult transcodeUpdate(TransCashLogDTO dto) {
		TransResult result = new TransResult();
		if(DetailItemRemove.DetailCashLogUpdate(dto) > 0) {
			result.setState("ok");
			result.setCnt(1);
		}else {
			result.setState("fail");
		}
		return result;
	}
	// 구매현황, 판매현황 삭제
	@RequestMapping(value="/delete", method=RequestMethod.POST)
	public TransResult transcodeDelete(TransDTO dto) {
		TransResult result = new TransResult();
		int r = 0;
		if(DetailItemRemove.DetailBackup(dto) > 0) {
			r = DetailItemRemove.DetailRemove(dto);
			if(r > 0) {
				result.setCnt(r);
				result.setState("ok");
			}else {
				result.setCnt(r);
				result.setState("fail");
			}
		}else {
			result.setState("fail");
		}
		return result;
	}
	
	@RequestMapping(value="/buy/transcodeunconfirmlist", method=RequestMethod.POST)
	public TransResult transcodeunconfirmlistbuy(TransDTO dto, String page) {
		TransResult result = new TransResult();
		ArrayList<TransDTO> list = new ArrayList<>();
		if(page == null) page ="1";
		int total = 0;
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		list = dao.BuyUnconfirmTransList_page(dto, page);
		total = dao.BuyUnconfirmTransList_totalpage(dto);
		
		if(list.size() > 0) {
			result.setCnt(total);
			result.setState("ok");
			result.setList(list);
		}else {
			result.setCnt(total);
			result.setState("fail");
		}
		
		return result;
	}
	
// 구매 현황 확인 리스트 가져오기
	@RequestMapping(value="/buy/transcodeconfirmlist", method=RequestMethod.POST)
	public TransResult transcodeconfirmlistbuy(TransDTO dto, String page) {
		TransResult result = new TransResult();
		ArrayList<TransDTO> list = new ArrayList<>();
		if(page == null) page ="1";
		int total = 0;
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		list = dao.BuyConfimTransList_page(dto, page);
		total = dao.BuyConfimTransList_totalpage(dto);
		if(list.size() > 0) {
			result.setCnt(total);
			result.setState("ok");
			result.setList(list);
		}else {
			result.setCnt(total);
			result.setState("fail");
		}
		
		return result;
		
	}
// 구매현황에서 검색(거래명, 거래번호)
	@RequestMapping(value="/buy/searchoptiontlist", method=RequestMethod.POST)
	public TransResult transsearchlistbuy(String searchoption, String searchvalue, String page) {
		TransResult result = new TransResult();
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		int temp = 0;
		int total = 0;
		if(page == null) page = "1";
		ArrayList<TransDTO> list = new ArrayList<>();
		if(searchoption.equals("trans_subject")) {
			list = dao.BuySearch_transsubject_page(searchvalue, page);
			total = dao.BuySearch_transsubject_totalpage(searchvalue);
		}else if(searchoption.equals("trans_code")) {
			list = dao.BuySearch_transcode_page(searchvalue, page);
			total = dao.BuySearch_transcode_totalpage(searchvalue);
		}
		temp = list.size();
		if(temp > 0) {
			result.setState("ok");
			result.setCnt(total);
			result.setList(list);
		}else {
			result.setState("fail");
			result.setCnt(total);
			result.setList(list);
		}
	
		return result;
	}
		
// 판매현황 미확인 리스트 가져오기
	@RequestMapping(value="/sell/transcodeunconfirmlist", method=RequestMethod.POST)
	public TransResult transcodeunconfirmlistsell(TransDTO dto, String page) {
		TransResult result = new TransResult();
		ArrayList<TransDTO> list = new ArrayList<>();
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		int total = 0;
		if(page == null) page = "1";
		list = dao.SellUnconfirmTransList_page(dto, page);
		total = dao.SellUnconfirmTransList_totalpage(dto);
		if(list.size() > 0) {
			result.setCnt(total);
			result.setState("ok");
			result.setList(list);
		}else {
			result.setCnt(total);
			result.setState("fail");
			result.setList(list);
		}
		return result;
	}
// 판매 현황 확인 리스트 가져오기
	@RequestMapping(value="/sell/transcodeconfirmlist", method=RequestMethod.POST)
	public TransResult trnascodeconfirmlistsell(TransDTO dto, String page) {
		TransResult result = new TransResult();
		ArrayList<TransDTO> list = new ArrayList<>();
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		int total = 0;
		if(page == null) page = "1";
		list = dao.SellConfirmTransList_page(dto, page);
		total = dao.SellConfirmTransList_totalpage(dto);
		if(list.size() > 0) {
			result.setCnt(total);
			result.setState("ok");
			result.setList(list);
		}else {
			result.setCnt(total);
			result.setState("fail");
			result.setList(list);
		}
		
		return result;
	}
	// 판매현황에서 검색(거래명, 거래번호)
	@RequestMapping(value="/sell/searchoptiontlist", method=RequestMethod.POST)
	public TransResult transsearchlistsell(String searchoption, String searchvalue, String page) {
		TransResult result = new TransResult();
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		int temp = 0;
		int total = 0;
		ArrayList<TransDTO> list = new ArrayList<>();
		if(page == null) page = "1";
		if(searchoption.equals("trans_subject")) {
			list = dao.SellSearch_transsubject_page(searchvalue, page);
			total = dao.SellSearch_transsubject_totalpage(searchvalue);
		}else if(searchoption.equals("trans_code")) {
			list = dao.SellSearch_trnascode_page(searchvalue, page);
			total = dao.SellSearch_trnascode_totalpage(searchvalue);
		}
		temp = list.size();
		if(temp > 0) {
			result.setState("ok");
			result.setCnt(total);
			result.setList(list);
		}else {
			result.setState("fail");
			result.setCnt(total);
			result.setList(list);
		}
	
		return result;
	}
	// 결제 확인
	@RequestMapping(value="/transsan", method=RequestMethod.POST)
	public TransResult transsan(TransDTO dto) {
		TransResult result = new TransResult();
		if(TransSanIO.checkSan(dto) > 0) {
			result.setCnt(1);
			result.setState("ok");
		}else {
			result.setCnt(0);
			result.setState("fail");
		}
		return result;
	}
	// 결제 시 입 출고 를 위한 로그 확인
	@RequestMapping(value="/selectbycashlog", method=RequestMethod.POST)
	public TransCashLogResult selectbycashlog(TransDTO dto) {
		TransCashLogResult result = new TransCashLogResult();
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		ArrayList<TransCashLogDTO> list = new ArrayList<>();
		list = dao.SelectByBuyTransCashLogList(dto);
		if(list.size() > 0) {
			result.setCnt(list.size());
			result.setState("ok");
			result.setList(list);
		}else {
			result.setCnt(list.size());
			result.setState("fail");
		}
		return result;
	}
	
	
	// 메인 미결제테이블
	@RequestMapping(value="/main/unconflist", method=RequestMethod.POST)
	public TransResult mainunconflist(String memidx, String partidx) {
		TransResult result = new TransResult();
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		ArrayList<TransDTO> list = new ArrayList<>();
		list = dao.unconfirm_list(memidx, partidx);
		if(list.size() > 0) {
			result.setCnt(list.size());
			result.setList(list);
			result.setState("ok");
		}else {
			result.setCnt(list.size());
			result.setList(list);
			result.setState("fail");
		}
		return result;
	}
	
	// 메인 결제테이블
	@RequestMapping(value="/main/conflist", method=RequestMethod.POST)
	public TransResult mainconflist(String memidx, String partidx) {
		TransResult result = new TransResult();
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		ArrayList<TransDTO> list = new ArrayList<>();
		list = dao.confirm_list();
		if(list.size() > 0) {
			result.setCnt(list.size());
			result.setList(list);
			result.setState("ok");
		}else {
			result.setCnt(list.size());
			result.setList(list);
			result.setState("fail");
		}
		return result;
	}
	
	@RequestMapping(value="/main/graph", method=RequestMethod.POST)
	public MainGraphResult maingraph(){
		TransAndCashLogDAO dao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		ArrayList<MainGraphDTO> list = new ArrayList<>();
		MainGraphResult result = new MainGraphResult();
		Date d1 = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("YYYY");
		String y = sdf.format(d1);
		int[] Mtotal = new int[12];
		int[] Btotal = new int[12];
		int[] Stotal = new int[12];
		int[] Utotal = new int[12];
		int percent1 = 0; // BUY
		int percent2 = 0; // SELl
		int percent3 = 0; // unconfi
		
		for(int i = 1; i <= 12; i++) {
			String m1, m2;
			m1 = y + "-" + i;
			m2 = y + "-" + (i+1);
			if(i == 12) m2 = (Integer.parseInt(y)+1) + "-1";
			Mtotal[i-1] = dao.mainmonthtotal(m1, m2);
			Btotal[i-1] = dao.mainbuytotal(m1, m2);
			Stotal[i-1] = dao.mainselltotal(m1, m2);
			Utotal[i-1] = dao.mainunconftotal(m1, m2);
		}
		for(int i = 0; i < 12; i++) {
			if(Mtotal[i] > 0) {
				percent1 = (int)((double)Btotal[i] / Mtotal[i] * 100);
				percent2 = (int)((double)Stotal[i] / Mtotal[i] * 100);
				percent3 = (int)((double)Utotal[i] / Mtotal[i] * 100);
			}else {
				percent1 = 0;
				percent2 = 0;
				percent3 = 0;
			}
			list.add(new MainGraphDTO(Btotal[i], Stotal[i], Utotal[i], percent1, percent2, percent3));
		}
		if(list.size() > 0 ) {
			result.setCnt(list.size());
			result.setList(list);
			result.setState("ok");
		}else {
			result.setCnt(list.size());
			result.setList(list);
			result.setState("fail");
		}
		return result;
	}
	
}

