package com.project.springproject;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.springproject.beans.StorageDAO;
import com.project.springproject.beans.StorageDTO;
import com.project.springproject.beans.StorageResult;

@RestController
@RequestMapping(value="/storage")
public class StorageRestController {
	@RequestMapping(value="/list", method = RequestMethod.GET)
	public StorageResult list(StorageDTO dto, String page) {
		StorageResult result = new StorageResult();
		StorageDAO dao = Session.sqlSession.getMapper(StorageDAO.class);
		int temp=0;
		int total = 0;
		if(page == null) page = "1";
		ArrayList<StorageDTO> list  = new ArrayList<>();
		list = dao.storagelist_page(page);
		total = dao.storagelist_totalpage();
		temp=list.size();
		if(temp>0) {
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
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public StorageResult add(StorageDTO dto) {
		StorageResult result = new StorageResult();
		StorageDAO dao = Session.sqlSession.getMapper(StorageDAO.class);
		int temp = 0;
		if(dto.getBuy_money() == null) {
			dto.setBuy_money("0");
		}
		if(dto.getSell_money() == null) {
			dto.setSell_money("0");
		}
		temp = dao.storageadd(dto);
		if(temp > 0) {
			result.setState("ok");
			result.setCnt(temp);
		}else {
			result.setState("fail");
			result.setCnt(temp);
		}
		return result;
	}
	// 재고변경
		@RequestMapping(value = "/modify",method =RequestMethod.POST )
		public StorageResult modify(StorageDTO dto) {
			StorageResult result = new StorageResult();
			StorageDAO dao = Session.sqlSession.getMapper(StorageDAO.class);
			int temp = 0;
			temp = dao.storagemodify(dto);
			if(temp > 0) {
				result.setState("ok");
				result.setCnt(temp);
			}else {
				result.setState("fail");
				result.setCnt(temp);
			}
			return result;
		}
		
		@RequestMapping(value="/remove",method= RequestMethod.POST )
		public StorageResult remove(StorageDTO dto) {
			StorageResult result = new StorageResult();
			StorageDAO dao = Session.sqlSession.getMapper(StorageDAO.class);
			int temp = 0;
			temp = dao.storageremove(dto);
			if(temp > 0) {
				result.setState("ok");
				result.setCnt(temp);
			}else {
				result.setState("fail");
				result.setCnt(temp);
			}
			return result;
		}
		
		@RequestMapping(value="/searchstorage",method= { RequestMethod.GET, RequestMethod.POST })
		public StorageResult storageserchlist(String searchoption, String searchvalue, String page) {
			StorageResult result = new StorageResult();
			StorageDAO dao = Session.sqlSession.getMapper(StorageDAO.class);
			ArrayList<StorageDTO> list  = new ArrayList<>();
			int total = 0;
			int temp=0;
			if(page == null) page = "1";
			if(searchoption.equals("item_code")) {
				list = dao.search_storagecode_page(searchvalue, page);
				total = dao.search_storagecode_totalpage(searchvalue);
			} else if (searchoption.equals("item_category")) {
				list = dao.search_storagecategory_page(searchvalue, page);
				total = dao.search_storagecategory_totalpage(searchvalue);
			}
			temp = list.size();
			if(temp >0) {
				result.setState("ok");
				result.setCnt(total);
				result.setList(list);
			} else {
				result.setState("fail");
				result.setCnt(total);
				result.setList(list);
			}
			return result;
		}
		
		
		
		
		
	@RequestMapping(value="/search_storage_item")
	public StorageResult search_item_code(String item_code) {
		StorageResult result = new StorageResult();
		StorageDAO dao = Session.sqlSession.getMapper(StorageDAO.class);
		ArrayList<StorageDTO> list = new ArrayList<>();
		list  = dao.search_item_code(item_code);
		
		if(list.size() > 0) {
			result.setCnt(list.size());
			result.setList(list);
			result.setState("ok");
		} else {
			result.setCnt(list.size());
			result.setList(list);
			result.setState("fail");
		}
		return result;
	}
}
