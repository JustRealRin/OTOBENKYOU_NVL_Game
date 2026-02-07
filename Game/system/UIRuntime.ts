/**
 * 該檔案為GameCreator編輯器自動生成的程式碼，請勿修改
 */

/**
 * 1-標題界面 [BASE]
 */
class GUI_1 extends GUI_BASE {
   界面背景:UIBitmap;
   標題內容容器:UIRoot;
   標題:UIString;
   標題裝飾:UIString;
   漸變底色:UIBitmap;
   開始遊戲按鈕:UIButton;
   CG鑒賞容器:UIRoot;
   圖標:UIBitmap;
   讀檔容器:UIRoot;

   constructor(){
      super(1);
   }
}
class ListItem_1 extends UIListItemData {
   界面背景:string;
   標題:string;
   標題裝飾:string;
   漸變底色:string;
   圖標:string;

}

/**
 * 2-讀檔界面 [BASE]
 */
class GUI_2 extends GUI_BASE {
   通用背景:GUI_15;
   list:UIList; // Item=1001
   狀態欄容器:UIRoot;
   底色:UIBitmap;
   退出容器:UIRoot;
   圖標:UIBitmap;
   標題:UIString;
   constructor(){
      super(2);
   }
}
class ListItem_2 extends UIListItemData {
   通用背景:number;
   list:UIListItemData[];
   底色:string;
   圖標:string;
   標題:string;
}

/**
 * 3-對話菜單 [BASE]
 */
class GUI_3 extends GUI_BASE {
   黑色底色:UIBitmap;
   constructor(){
      super(3);
   }
}
class ListItem_3 extends UIListItemData {
   黑色底色:string;
}

/**
 * 4-聊天主界面 [BASE]
 */
class GUI_4 extends GUI_BASE {
   background:UIBitmap;
   dialogList:UIRoot;
   狀態欄容器:UIRoot;
   底色:UIBitmap;
   退出容器:UIRoot;
   圖標:UIBitmap;
   CG鑒賞容器:UIRoot;
   讀檔容器:UIRoot;
   存檔容器:UIRoot;
   title:UIString;
   constructor(){
      super(4);
   }
}
class ListItem_4 extends UIListItemData {
   background:string;
   底色:string;
   圖標:string;
   title:string;
}

/**
 * 5-存檔界面 [BASE]
 */
class GUI_5 extends GUI_BASE {
   通用背景:GUI_15;
   list:UIList; // Item=1001
   狀態欄容器:UIRoot;
   底色:UIBitmap;
   退出容器:UIRoot;
   圖標:UIBitmap;
   標題:UIString;
   constructor(){
      super(5);
   }
}
class ListItem_5 extends UIListItemData {
   通用背景:number;
   list:UIListItemData[];
   底色:string;
   圖標:string;
   標題:string;
}

/**
 * 6-系統設置 [BASE]
 */
class GUI_6 extends GUI_BASE {
   通用背景:GUI_15;
   容器:UIRoot;
   設置容器:UIRoot;
   全屏勾選框:UISwitch;
   全屏文本:UIString;
   狀態欄容器:UIRoot;
   底色:UIBitmap;
   退出容器:UIRoot;
   圖標:UIBitmap;
   選中的線:UIBitmap;
   標題:UIString;
   constructor(){
      super(6);
   }
}
class ListItem_6 extends UIListItemData {
   通用背景:number;
   全屏勾選框:number;
   全屏文本:string;
   底色:string;
   圖標:string;
   選中的線:string;
   標題:string;
}

/**
 * 7-文本輸入界面 [BASE]
 */
class GUI_7 extends GUI_BASE {
   黑色底色:UIBitmap;
   底色:UIBitmap;
   input:UIInput;
   提交輸入按鈕:UIButton;
   constructor(){
      super(7);
   }
}
class ListItem_7 extends UIListItemData {
   黑色底色:string;
   底色:string;
   input:string;

}

/**
 * 8-數字輸入界面 [BASE]
 */
class GUI_8 extends GUI_BASE {
   黑色底色:UIBitmap;
   底色:UIBitmap;
   input:UIInput;
   提交輸入按鈕:UIButton;
   constructor(){
      super(8);
   }
}
class ListItem_8 extends UIListItemData {
   黑色底色:string;
   底色:string;
   input:string;

}

/**
 * 9-密碼輸入界面 [BASE]
 */
class GUI_9 extends GUI_BASE {
   黑色底色:UIBitmap;
   底色:UIBitmap;
   input:UIInput;
   提交輸入按鈕:UIButton;
   constructor(){
      super(9);
   }
}
class ListItem_9 extends UIListItemData {
   黑色底色:string;
   底色:string;
   input:string;

}

/**
 * 10-遊戲結束界面 [BASE]
 */
class GUI_10 extends GUI_BASE {
   通用背景:GUI_15;
   GameOver文本:UIString;
   constructor(){
      super(10);
   }
}
class ListItem_10 extends UIListItemData {
   通用背景:number;
   GameOver文本:string;
}

/**
 * 11-CG鑒賞 [BASE]
 */
class GUI_11 extends GUI_BASE {
   通用背景:GUI_15;
   cgList:UIList; // Item=1003
   狀態欄容器:UIRoot;
   底色:UIBitmap;
   退出容器:UIRoot;
   圖標:UIBitmap;
   標題:UIString;
   constructor(){
      super(11);
   }
}
class ListItem_11 extends UIListItemData {
   通用背景:number;
   cgList:UIListItemData[];
   底色:string;
   圖標:string;
   標題:string;
}

/**
 * 12-CG鑒賞大圖 [BASE]
 */
class GUI_12 extends GUI_BASE {
   透明背景:UIBitmap;
   bigCG:UIBitmap;
   關閉鑒賞大圖按鈕:UIButton;
   constructor(){
      super(12);
   }
}
class ListItem_12 extends UIListItemData {
   透明背景:string;
   bigCG:string;

}

/**
 * 13-提示框 [BASE]
 */
class GUI_13 extends GUI_BASE {
   透明背景:UIBitmap;
   界面背景:UIBitmap;
   提示框標題文本:UIString;
   提示框內容文本:UIString;
   確定按鈕:UIButton;
   取消按鈕:UIButton;
   constructor(){
      super(13);
   }
}
class ListItem_13 extends UIListItemData {
   透明背景:string;
   界面背景:string;
   提示框標題文本:string;
   提示框內容文本:string;

}

/**
 * 14-音樂鑒賞 [BASE]
 */
class GUI_14 extends GUI_BASE {
   通用背景:GUI_15;
   立繪:UIStandAvatar;
   界面背景框:UIBitmap;
   musicList:UIList; // Item=1004
   播放進度條:UIRoot;
   timeProgress:UISlider;
   previousBtn:UIButton;
   playCheckBox:UICheckBox;
   timePosition:UIString;
   timeDuration:UIString;
   nextBtn:UIButton;
   狀態欄容器:UIRoot;
   底色:UIBitmap;
   退出容器:UIRoot;
   圖標:UIBitmap;
   標題:UIString;
   constructor(){
      super(14);
   }
}
class ListItem_14 extends UIListItemData {
   通用背景:number;
   立繪:number;
   界面背景框:string;
   musicList:UIListItemData[];
   timeProgress:number;
   playCheckBox:boolean;
   timePosition:string;
   timeDuration:string;
   底色:string;
   圖標:string;
   標題:string;
}

/**
 * 15-通用背景 [BASE]
 */
class GUI_15 extends GUI_BASE {
   溢出隱藏容器:UIRoot;
   界面背景:UIBitmap;
   黑色底色:UIBitmap;
   constructor(){
      super(15);
   }
}
class ListItem_15 extends UIListItemData {
   界面背景:string;
   黑色底色:string;
}

/**
 * 16- [BASE]
 */
class GUI_16 extends GUI_BASE {

   constructor(){
      super(16);
   }
}
class ListItem_16 extends UIListItemData {

}

/**
 * 17- [BASE]
 */
class GUI_17 extends GUI_BASE {

   constructor(){
      super(17);
   }
}
class ListItem_17 extends UIListItemData {

}

/**
 * 18- [BASE]
 */
class GUI_18 extends GUI_BASE {

   constructor(){
      super(18);
   }
}
class ListItem_18 extends UIListItemData {

}

/**
 * 19- [BASE]
 */
class GUI_19 extends GUI_BASE {

   constructor(){
      super(19);
   }
}
class ListItem_19 extends UIListItemData {

}

/**
 * 20- [BASE]
 */
class GUI_20 extends GUI_BASE {

   constructor(){
      super(20);
   }
}
class ListItem_20 extends UIListItemData {

}

/**
 * 1001-檔案Item [BASE]
 */
class GUI_1001 extends GUI_BASE {
   裁剪容器:UIRoot;
   screenshotImg:UIBitmap;
   檔案背景:UIBitmap;
   delBtn:UIRoot;
   底色:UIBitmap;
   圖標:UIButton;
   sceneName:UIString;
   dateStr:UIString;
   no:UIString;
   gameTimeStr:UIString;
   分割線:UIBitmap;
   constructor(){
      super(1001);
   }
}
class ListItem_1001 extends UIListItemData {
   screenshotImg:string;
   檔案背景:string;
   底色:string;
   sceneName:string;
   dateStr:string;
   no:string;
   gameTimeStr:string;
   分割線:string;
}

/**
 * 1002- [BASE]
 */
class GUI_1002 extends GUI_BASE {

   constructor(){
      super(1002);
   }
}
class ListItem_1002 extends UIListItemData {

}

/**
 * 1003-圖片鑒賞Item [BASE]
 */
class GUI_1003 extends GUI_BASE {
   背景:UIBitmap;
   裁剪容器:UIRoot;
   cg:UIBitmap;
   constructor(){
      super(1003);
   }
}
class ListItem_1003 extends UIListItemData {
   背景:string;
   cg:string;
}

/**
 * 1004-音樂鑒賞Item [BASE]
 */
class GUI_1004 extends GUI_BASE {
   music:UIString;
   musicSelected:UIString;
   constructor(){
      super(1004);
   }
}
class ListItem_1004 extends UIListItemData {
   music:string;
   musicSelected:string;
}

/**
 * 1005- [BASE]
 */
class GUI_1005 extends GUI_BASE {

   constructor(){
      super(1005);
   }
}
class ListItem_1005 extends UIListItemData {

}

/**
 * 1006- [BASE]
 */
class GUI_1006 extends GUI_BASE {

   constructor(){
      super(1006);
   }
}
class ListItem_1006 extends UIListItemData {

}

/**
 * 1007-左邊消息 [BASE]
 */
class GUI_1007 extends GUI_BASE {
   face:UIBitmap;
   background:UIBitmap;
   contentText:UIString;
   contentImage:UIBitmap;
   contentAnimation:UIAnimation;
   speakerName:UIString;
   constructor(){
      super(1007);
   }
}
class ListItem_1007 extends UIListItemData {
   face:string;
   background:string;
   contentText:string;
   contentImage:string;
   contentAnimation:number;
   speakerName:string;
}

/**
 * 1008-右邊消息 [BASE]
 */
class GUI_1008 extends GUI_BASE {
   face:UIBitmap;
   background:UIBitmap;
   contentText:UIString;
   contentImage:UIBitmap;
   contentAnimation:UIAnimation;
   speakerName:UIString;
   constructor(){
      super(1008);
   }
}
class ListItem_1008 extends UIListItemData {
   face:string;
   background:string;
   contentText:string;
   contentImage:string;
   contentAnimation:number;
   speakerName:string;
}

/**
 * 1009-系統消息 [BASE]
 */
class GUI_1009 extends GUI_BASE {
   background:UIBitmap;
   contentText:UIString;
   constructor(){
      super(1009);
   }
}
class ListItem_1009 extends UIListItemData {
   background:string;
   contentText:string;
}

/**
 * 1010-角色信息 [BASE]
 */
class GUI_1010 extends GUI_BASE {
   通用背景:GUI_15;
   face:UIBitmap;
   nameLabel:UIString;
   infoLabel:UIString;
   狀態欄容器:UIRoot;
   底色:UIBitmap;
   backBtn:UIRoot;
   圖標:UIBitmap;
   標題:UIString;
   constructor(){
      super(1010);
   }
}
class ListItem_1010 extends UIListItemData {
   通用背景:number;
   face:string;
   nameLabel:string;
   infoLabel:string;
   底色:string;
   圖標:string;
   標題:string;
}

/**
 * 1011-圖片放大界面 [BASE]
 */
class GUI_1011 extends GUI_BASE {
   圖片:UIBitmap;
   constructor(){
      super(1011);
   }
}
class ListItem_1011 extends UIListItemData {
   圖片:string;
}

/**
 * 2001-啟動載入界面 [BASE]
 */
class GUI_2001 extends GUI_BASE {
   界面背景:UIBitmap;
   黑色遮罩:UIBitmap;
   標題內容容器:UIRoot;
   標題:UIString;
   標題裝飾:UIString;
   loadingComp:UISlider;
   進度數值容器:UIRoot;
   進度數值:UIString;
   進度文本:UIString;
   constructor(){
      super(2001);
   }
}
class ListItem_2001 extends UIListItemData {
   界面背景:string;
   黑色遮罩:string;
   標題:string;
   標題裝飾:string;
   loadingComp:number;
   進度文本:string;
}

/**
 * 2002-新遊戲載入界面 [BASE]
 */
class GUI_2002 extends GUI_BASE {
   背景裁切容器:UIRoot;
   界面背景:UIBitmap;
   加載動畫:UIAnimation;
   constructor(){
      super(2002);
   }
}
class ListItem_2002 extends UIListItemData {
   界面背景:string;
   加載動畫:number;
}

/**
 * 2003-讀檔載入界面 [BASE]
 */
class GUI_2003 extends GUI_BASE {
   背景裁切容器:UIRoot;
   界面背景:UIBitmap;
   加載動畫:UIAnimation;
   constructor(){
      super(2003);
   }
}
class ListItem_2003 extends UIListItemData {
   界面背景:string;
   加載動畫:number;
}

/**
 * 2004-場景載入界面 [BASE]
 */
class GUI_2004 extends GUI_BASE {
   背景裁切容器:UIRoot;
   界面背景:UIBitmap;
   加載動畫:UIAnimation;
   constructor(){
      super(2004);
   }
}
class ListItem_2004 extends UIListItemData {
   界面背景:string;
   加載動畫:number;
}

/**
 * 2005-返回標題時過渡界面 [BASE]
 */
class GUI_2005 extends GUI_BASE {
   背景裁切容器:UIRoot;
   界面背景:UIBitmap;
   constructor(){
      super(2005);
   }
}
class ListItem_2005 extends UIListItemData {
   界面背景:string;
}

/**
 * 2006-打開界面載入 [BASE]
 */
class GUI_2006 extends GUI_BASE {
   loadingComp:UISlider;
   進度數值容器:UIRoot;
   進度數值:UIString;
   進度文本:UIString;
   constructor(){
      super(2006);
   }
}
class ListItem_2006 extends UIListItemData {
   loadingComp:number;
   進度文本:string;
}

/**
 * 3001-我的界面示例 [BASE]
 */
class GUI_3001 extends GUI_BASE {
   圖片:UIBitmap;
   按鈕:UIButton;
   文本:UIString;
   constructor(){
      super(3001);
   }
}
class ListItem_3001 extends UIListItemData {
   圖片:string;
   文本:string;
}

/**
 * 3002- [BASE]
 */
class GUI_3002 extends GUI_BASE {

   constructor(){
      super(3002);
   }
}
class ListItem_3002 extends UIListItemData {

}

/**
 * 3003- [BASE]
 */
class GUI_3003 extends GUI_BASE {

   constructor(){
      super(3003);
   }
}
class ListItem_3003 extends UIListItemData {

}

/**
 * 3004- [BASE]
 */
class GUI_3004 extends GUI_BASE {

   constructor(){
      super(3004);
   }
}
class ListItem_3004 extends UIListItemData {

}

/**
 * 3005- [BASE]
 */
class GUI_3005 extends GUI_BASE {

   constructor(){
      super(3005);
   }
}
class ListItem_3005 extends UIListItemData {

}

/**
 * 15001- [BASE]
 */
class GUI_15001 extends GUI_BASE {

   constructor(){
      super(15001);
   }
}
class ListItem_15001 extends UIListItemData {

}
GameUI["__compCustomAttributes"] = {"UIRoot":["enabledLimitView","scrollShowType","hScrollBar","hScrollBg","vScrollBar","vScrollBg","scrollWidth","slowmotionType","enabledWheel","hScrollValue","vScrollValue"],"UIButton":["label","image1","grid9img1","image2","grid9img2","image3","grid9img3","fontSize","color","overColor","clickColor","bold","italic","smooth","align","valign","letterSpacing","font","textDx","textDy","textStroke","textStrokeColor"],"UIBitmap":["image","grid9","flip","isTile","pivotType","isAdaptiveSize"],"UIString":["text","fontSize","color","bold","italic","smooth","align","valign","leading","letterSpacing","font","wordWrap","overflow","shadowEnabled","shadowColor","shadowDx","shadowDy","stroke","strokeColor","onChangeFragEvent"],"UIVariable":["varMode","varID","fontSize","color","bold","italic","smooth","align","valign","leading","letterSpacing","font","wordWrap","overflow","shadowEnabled","shadowColor","shadowDx","shadowDy","stroke","strokeColor","onChangeFragEvent"],"UICustomGameNumber":["customData","previewNum","previewFixed","fontSize","color","bold","italic","smooth","align","valign","leading","letterSpacing","font","wordWrap","overflow","shadowEnabled","shadowColor","shadowDx","shadowDy","stroke","strokeColor"],"UICustomGameString":["customData","inEditorText","fontSize","color","bold","italic","smooth","align","valign","leading","letterSpacing","font","wordWrap","overflow","shadowEnabled","shadowColor","shadowDx","shadowDy","stroke","strokeColor"],"UIAvatar":["avatarID","scaleNumberX","scaleNumberY","orientationIndex","avatarFPS","playOnce","isPlay","avatarFrame","actionID","avatarHue"],"UIStandAvatar":["avatarID","actionID","scaleNumberX","scaleNumberY","flip","playOnce","isPlay","avatarFrame","avatarFPS","avatarHue"],"UIAnimation":["animationID","scaleNumberX","scaleNumberY","aniFrame","playFps","playType","showHitEffect","silentMode"],"UIInput":["text","fontSize","color","prompt","promptColor","bold","italic","smooth","align","leading","font","wordWrap","restrict","inputMode","maxChars","shadowEnabled","shadowColor","shadowDx","shadowDy","onInputFragEvent","onEnterFragEvent"],"UICheckBox":["selected","image1","grid9img1","image2","grid9img2","onChangeFragEvent"],"UISwitch":["switchMode","selected","image1","grid9img1","image2","grid9img2","previewselected","onChangeFragEvent"],"UITabBox":["selectedIndex","itemImage1","grid9img1","itemImage2","grid9img2","itemWidth","itemHeight","items","rowMode","spacing","labelSize","labelColor","labelFont","labelBold","labelItalic","smooth","labelAlign","labelValign","labelLetterSpacing","labelSelectedColor","labelDx","labelDy","labelStroke","labelStrokeColor","onChangeFragEvent"],"UISlider":["image1","bgGrid9","image2","blockGrid9","image3","blockFillGrid9","step","min","max","value","transverseMode","blockFillMode","blockPosMode","fillStrething","isBindingVarID","bindingVarID","onChangeFragEvent"],"UIGUI":["guiID","instanceClassName"],"UIList":["itemModelGUI","previewSize","selectEnable","repeatX","itemWidth","itemHeight","spaceX","spaceY","scrollShowType","hScrollBar","hScrollBg","vScrollBar","vScrollBg","scrollWidth","selectImageURL","selectImageGrid9","selectedImageAlpha","selectedImageOnTop","overImageURL","overImageGrid9","overImageAlpha","overImageOnTop","overSelectMode","slowmotionType","onChangeFragEvent1","onChangeFragEvent2"],"UIComboBox":["itemLabels","selectedIndex","bgSkin","bgGrid9","fontSize","color","bold","italic","smooth","align","valign","letterSpacing","font","textDx","textStroke","textStrokeColor","displayItemSize","listScrollBg","listScrollBar","listAlpha","listBgColor","itemHeight","itemFontSize","itemColor","itemBold","itemItalic","itemAlign","itemValign","itemLetterSpacing","itemFont","itemOverColor","itemOverBgColor","itemTextDx","itemTextDy","itemTextStroke","itemTextStrokeColor","onChangeFragEvent"],"UIVideo":["videoURL","playType","volume","playbackRate","currentTime","muted","loop","pivotType","flip","onLoadedFragEvent","onErrorFragEvent","onCompleteFragEvent"]};
