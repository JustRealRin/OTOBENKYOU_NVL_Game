/**
 * #1 preloadAsset
 */
class DataStructure_preloadAsset {
    assetType: number; // = 0; 資源類型
    asset0: string; // = ""; 圖片
    asset1: string; // = ""; [#GAME_AUDIO]
    asset2: number; // = 1; 行走圖
    asset3: number; // = 1; 立繪
    asset4: number; // = 1; 動畫
    asset5: number; // = 1; 界面
    asset6: number; // = 1; 對話框
}
/**
 * #2 dialogRecordInfo
 */
class DataStructure_dialogRecordInfo {
    tsURL: string; // = ""; 語音
    dialogName: string; // = ""; 名字
    dialogContent: string; // = ""; 臺詞
}
/**
 * #6 
 */
class DataStructure_unnamed6 {
}
/**
 * #7 inputMessage
 */
class DataStructure_inputMessage {
    type: number; // = 0; 類別
    numberValue: any; // 遊戲數值
    booleanValue: any; // 遊戲開關
    stringValue: any; // 遊戲字符串
}
