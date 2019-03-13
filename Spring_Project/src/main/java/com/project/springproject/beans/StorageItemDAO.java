package com.project.springproject.beans;

import java.util.ArrayList;

public interface StorageItemDAO {
	public ArrayList<StorageItemDTO> Search_Buy_Storage_item(String item_code);
	public ArrayList<StorageItemDTO> Select_Buy_Storage_item(String item_code);
	public ArrayList<StorageItemDTO> Search_Sell_Storage_item(String item_code);
	public ArrayList<StorageItemDTO> Select_Sell_Storage_item(String item_code);
	// 하나의 itemcode 가지고 오기
	public StorageItemDTO selectByItem(String item_code);
	// 창고 수량 변경
	public int UpdateCnt(String item_code, String item_cnt);
}
