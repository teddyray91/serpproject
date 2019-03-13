package com.project.springproject;


import java.util.ArrayList;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.springproject.beans.StorageItemDAO;
import com.project.springproject.beans.StorageItemDTO;
import com.project.springproject.beans.StorageItemResult;


@RestController
@RequestMapping(value="/storageitem")
public class StorageItemRestController {
	
	@RequestMapping(value="/search_storage_item_buy")
	public StorageItemResult search_storage_item_buy(String item_code) {
		StorageItemResult result = new StorageItemResult();
		StorageItemDAO dao = Session.sqlSession.getMapper(StorageItemDAO.class);
		ArrayList<StorageItemDTO> list = new ArrayList<>();
		list = dao.Search_Buy_Storage_item(item_code);
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
	
	@RequestMapping(value="/select_storage_item_buy")
	public StorageItemResult select_storage_item_buy(String item_code) {
		StorageItemResult result = new StorageItemResult();
		StorageItemDAO dao = Session.sqlSession.getMapper(StorageItemDAO.class);
		ArrayList<StorageItemDTO> list = new ArrayList<>();
		list = dao.Select_Buy_Storage_item(item_code);
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
	
	@RequestMapping(value="/search_storage_item_sell")
	public StorageItemResult search_storage_item_sell(String item_code) {
		StorageItemResult result = new StorageItemResult();
		StorageItemDAO dao = Session.sqlSession.getMapper(StorageItemDAO.class);
		ArrayList<StorageItemDTO> list = new ArrayList<>();
		list = dao.Search_Sell_Storage_item(item_code);
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
	
	@RequestMapping(value="/select_storage_item_sell")
	public StorageItemResult select_storage_item_sell(String item_code) {
		StorageItemResult result = new StorageItemResult();
		StorageItemDAO dao = Session.sqlSession.getMapper(StorageItemDAO.class);
		ArrayList<StorageItemDTO> list = new ArrayList<>();
		list = dao.Select_Sell_Storage_item(item_code);
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
	
}
