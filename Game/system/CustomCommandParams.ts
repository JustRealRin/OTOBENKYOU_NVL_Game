/**
 * 該檔案為GameCreator編輯器自動生成的程式碼，請勿修改
 */
/**
* 自定義命令 1-預加載資源
*/
class CustomCommandParams_1 {
    preloadAssets: DataStructure_preloadAsset[]; // = [];
    isShowLoadingUI: boolean; // = false; 顯示加載界面
    bindingUI: { uiID: number, compName:string, compID:string, varName:string }; // 加載組件
}
/**
* 自定義命令 2-等待玩家輸入文本
*/
class CustomCommandParams_2 {
    inputUI: number; // = 8; 彈出的界面
    defText: string; // = ""; 默認文本
    defTextVarID: number; // = 1; 默認文本
    useVar: number; // = 0; 模式
}
/**
* 自定義命令 3-按鍵事件
*/
class CustomCommandParams_3 {
    type: number; // = 0; 生命周期
    isMulKey: number; // = 0;
    recordListen: boolean; // = false; 記錄監聽
    key: number; // = 0; 按鍵
    systemKey: number; // = 0; 系統按鍵
    evType: number; // = 0; 類別
    evType2: number; // = 0; 類別
    keys: number[]; // = [];
    systemKeys: number[]; // = [];
    CTRL: boolean; // = false;
    SHIFT: boolean; // = false;
    ALT: boolean; // = false;
    eventPage: string; // = ""; 執行
    recordListenVar: number; // = 1; 記錄至
}
/**
* 自定義命令 4-鼠標事件
*/
class CustomCommandParams_4 {
    type: number; // = 0; 生命周期
    mouseType: number; // = 0; 鼠標
    eventPage: string; // = ""; 執行
    recordListen: boolean; // = false; 記錄監聽
    recordListenVar: number; // = 1; 記錄至
}
/**
* 自定義命令 5-取消按鍵事件
*/
class CustomCommandParams_5 {
    recordListenVar: number; // = 1; 指定監聽按鍵的標識
}
/**
* 自定義命令 6-取消鼠標事件
*/
class CustomCommandParams_6 {
    recordListenVar: number; // = 1; 指定監聽鼠標的標識
}
/**
* 自定義命令 7-獲得鑒賞圖片
*/
class CustomCommandParams_7 {
    cg: number; // = 1; CG鑒賞圖
}
/**
* 自定義命令 8-獲得鑒賞音樂
*/
class CustomCommandParams_8 {
    bgm: string; // = ""; 選擇
}
/**
* 自定義命令 9-
*/
class CustomCommandParams_9 {
}
/**
* 自定義命令 10-
*/
class CustomCommandParams_10 {
}
/**
* 自定義命令 11-提交信息
*/
class CustomCommandParams_11 {
    messages: DataStructure_inputMessage[]; // = [];
}
/**
* 自定義命令 2001-發送消息
*/
class CustomCommandParams_2001 {
    useVar: number; // = 0; 模式
    actor: number; // = 1; 角色
    actorVarID: number; // = 1; 角色
    mode: number; // = 0; 位置
    content: string; // = ""; 內容
    continueByClick: boolean; // = true; 點擊後繼續執行
}
/**
* 自定義命令 2002-發送圖片
*/
class CustomCommandParams_2002 {
    useVar: number; // = 0; 模式
    actor: number; // = 1; 角色
    actorVarID: number; // = 1; 角色
    mode: number; // = 0; 位置
    content: string; // = ""; 圖片
    continueByClick: boolean; // = true; 點擊後繼續執行
}
/**
* 自定義命令 2003-發送動畫
*/
class CustomCommandParams_2003 {
    useVar: number; // = 0; 模式
    actor: number; // = 1; 角色
    actorVarID: number; // = 1; 角色
    mode: number; // = 0; 位置
    content: number; // = 1; 動畫
    continueByClick: boolean; // = true; 點擊後繼續執行
}
/**
* 自定義命令 2004-發送語音消息
*/
class CustomCommandParams_2004 {
    useVar: number; // = 0; 模式
    actor: number; // = 1; 角色
    actorVarID: number; // = 1; 角色
    mode: number; // = 0; 位置
    content: string; // = "1"; 語音
    continueByClick: boolean; // = true; 點擊後繼續執行
}
/**
* 自定義命令 2005-發送系統消息
*/
class CustomCommandParams_2005 {
    content: string; // = ""; 內容
    continueByClick: boolean; // = true; 點擊後繼續執行
}
/**
* 自定義命令 2006-發送視頻
*/
class CustomCommandParams_2006 {
    useVar: number; // = 0; 模式
    actor: number; // = 1; 角色
    actorVarID: number; // = 1; 角色
    mode: number; // = 0; 位置
    content: string; // = ""; 視頻
    continueByClick: boolean; // = true; 點擊後繼續執行
}
/**
* 自定義命令 2007-
*/
class CustomCommandParams_2007 {
}
/**
* 自定義命令 2008-
*/
class CustomCommandParams_2008 {
}
/**
* 自定義命令 2009-清理消息
*/
class CustomCommandParams_2009 {
}
/**
* 自定義命令 2010-更換背景
*/
class CustomCommandParams_2010 {
    content: string; // = ""; 背景
    continueByClick: boolean; // = true; 點擊後繼續執行
    time: number; // = 0.3; 變化時間
}
/**
* 自定義命令 2011-更換標題
*/
class CustomCommandParams_2011 {
    title: string; // = ""; 標題內容
}
/**
* 自定義命令 3001-
*/
class CustomCommandParams_3001 {
}
/**
* 自定義命令 3002-
*/
class CustomCommandParams_3002 {
}
/**
* 自定義命令 3003-
*/
class CustomCommandParams_3003 {
}
/**
* 自定義命令 3004-
*/
class CustomCommandParams_3004 {
}
/**
* 自定義命令 3005-
*/
class CustomCommandParams_3005 {
}
/**
* 自定義命令 3006-
*/
class CustomCommandParams_3006 {
}
/**
* 自定義命令 3007-
*/
class CustomCommandParams_3007 {
}
/**
* 自定義命令 3008-
*/
class CustomCommandParams_3008 {
}
/**
* 自定義命令 3009-
*/
class CustomCommandParams_3009 {
}
/**
* 自定義命令 3010-顯示界面
*/
class CustomCommandParams_3010 {
    showType: number; // = 0; 層級
    passageID: number; // = 1; 編號
    passageIDVar: number; // = 1; 編號
    uiID: number; // = 1; 界面
    uiVar: number; // = 1; 界面
    setAttr: boolean; // = true; 設置屬性
    dpX: number; // = 0; x
    dpXVar: number; // = 1; x
    dpY: number; // = 0; y
    dpYVar: number; // = 1; y
    dpZ: number; // = 100; z
    dpZVar: number; // = 1; z
    dpScaleX: number; // = 1; 水平縮放
    dpScaleXVar: number; // = 1; 水平縮放
    dpScaleY: number; // = 1; 垂直縮放
    dpScaleYVar: number; // = 1; 垂直縮放
    rotation: number; // = 0; 旋轉度
    rotationVar: number; // = 1; 旋轉度
    opacity: number; // = 1; 透明度
    opacityVar: number; // = 1; 透明度
    refObjectEnabled: boolean; // = false; 模擬參考界面
    higher: boolean; // = false; 高級設定
    refObject: number; // = 1; 參考界面
    objectUseVar: boolean; // = false; 界面使用變量
    posUseVar: boolean; // = false; 坐標使用變量
    sizeUseVar: boolean; // = false; 縮放使用變量
    zUseVar: boolean; // = false; 深度使用變量
    opacityUseVar: boolean; // = false; 透明度使用變量
    rotationUseVar: boolean; // = false; 旋轉度使用變量
    passageIDUseVar: boolean; // = false; 編號使用變量
}
/**
* 自定義命令 3011-移動界面
*/
class CustomCommandParams_3011 {
    showType: number; // = 0; 層級
    passageID: number; // = 1; 編號
    passageIDVar: number; // = 1; 編號
    uiID: number; // = 1; 界面
    uiVar: number; // = 1; 界面
    timeType: number; // = 1; 變更方式
    time: number; // = 30; 持續幀數
    trans: string; // = ""; 過渡
    dpX: number; // = 0; x
    dpXVar: number; // = 1; x
    dpY: number; // = 0; y
    dpYVar: number; // = 1; y
    dpZ: number; // = 100; z
    dpZVar: number; // = 1; z
    dpScaleX: number; // = 1; 水平縮放
    dpScaleXVar: number; // = 1; 水平縮放
    dpScaleY: number; // = 1; 垂直縮放
    dpScaleYVar: number; // = 1; 垂直縮放
    rotation: number; // = 0; 旋轉度
    rotationVar: number; // = 1; 旋轉度
    opacity: number; // = 1; 透明度
    opacityVar: number; // = 1; 透明度
    refObjectEnabled: boolean; // = false; 模擬參考界面
    higher: boolean; // = false; 高級設定
    refObject: number; // = 0; 參考界面
    posUseVar: boolean; // = false; 坐標使用變量
    sizeUseVar: boolean; // = false; 尺寸使用變量
    zUseVar: boolean; // = false; 深度使用變量
    opacityUseVar: boolean; // = false; 透明度使用變量
    rotationUseVar: boolean; // = false; 旋轉度使用變量
    passageIDUseVar: boolean; // = false; 編號使用變量
    objectUseVar: boolean; // = false; 界面使用變量
}
/**
* 自定義命令 3012-關閉界面
*/
class CustomCommandParams_3012 {
    showType: number; // = 0; 層級
    passageID: number; // = 1; 編號
    passageIDVar: number; // = 1; 編號
    uiID: number; // = 1; 界面
    uiVar: number; // = 1; 界面
    passageIDUseVar: boolean; // = false; 編號使用變量
    objectUseVar: boolean; // = false; 界面使用變量
}
/**
* 自定義命令 3013-移動界面內的元件
*/
class CustomCommandParams_3013 {
    changeUIAttr: any; // 修改界面元件
}
/**
* 自定義命令 3014-
*/
class CustomCommandParams_3014 {
}
/**
* 自定義命令 3015-
*/
class CustomCommandParams_3015 {
}
/**
* 自定義命令 3016-
*/
class CustomCommandParams_3016 {
}
/**
* 自定義命令 3017-更換場景
*/
class CustomCommandParams_3017 {
    scene: number; // = 0; 場景
}
/**
* 自定義命令 3018-
*/
class CustomCommandParams_3018 {
}
/**
* 自定義命令 3019-
*/
class CustomCommandParams_3019 {
}
/**
* 自定義命令 3020-等待關閉界面
*/
class CustomCommandParams_3020 {
    useVar: number; // = 0; 類別
    uiID: number; // = 1; 界面
    uiVar: number; // = 1; 界面
}
/**
* 自定義命令 4001-全屏設置
*/
class CustomCommandParams_4001 {
    fullScreen: boolean; // = false; 全屏化
}
/**
* 自定義命令 4002-
*/
class CustomCommandParams_4002 {
}
/**
* 自定義命令 4003-
*/
class CustomCommandParams_4003 {
}
/**
* 自定義命令 4004-
*/
class CustomCommandParams_4004 {
}
/**
* 自定義命令 4005-開始遊戲
*/
class CustomCommandParams_4005 {
}
/**
* 自定義命令 4006-存檔
*/
class CustomCommandParams_4006 {
    saveType: number; // = 0; 檔案類別
    saveID: number; // = 1; 編號
    silenceMode: boolean; // = false; 靜默執行
}
/**
* 自定義命令 4007-
*/
class CustomCommandParams_4007 {
}
/**
* 自定義命令 4008-返回標題界面
*/
class CustomCommandParams_4008 {
}
/**
* 自定義命令 4009-
*/
class CustomCommandParams_4009 {
}
/**
* 自定義命令 4010-
*/
class CustomCommandParams_4010 {
}
/**
* 自定義命令 4011-關閉遊戲窗口
*/
class CustomCommandParams_4011 {
}
/**
* 自定義命令 4012-設置世界屬性
*/
class CustomCommandParams_4012 {
    worldData: CustomCompData; // 世界設定
}
/**
* 自定義命令 5001-播放背景音樂
*/
class CustomCommandParams_5001 {
    bgm: string; // = ""; 選擇
    bgmVarID: number; // = 1; 選擇
    fadeInTime: number; // = 0; 淡入效果
    fadeInTimeVarID: number; // = 1; 淡入效果
    advanceSetting: boolean; // = false; 高級設置
    bgmUseVar: boolean; // = false; 音樂地址使用變量
    fadeInTimeUseVar: boolean; // = false; 淡入效果使用變量
}
/**
* 自定義命令 5002-停止背景音樂
*/
class CustomCommandParams_5002 {
    fadeOutTime: number; // = 0; 淡出效果
    fadeOutTimeVarID: number; // = 1; 淡出效果
    fadeOutTimeUseVar: boolean; // = false; 使用變量
}
/**
* 自定義命令 5003-播放環境聲效
*/
class CustomCommandParams_5003 {
    bgs: string; // = ""; 選擇
    bgsVarID: number; // = 1; 選擇
    fadeInTime: number; // = 0; 淡入效果
    fadeInTimeVarID: number; // = 1; 淡入效果
    advanceSetting: boolean; // = false; 高級設置
    bgsUseVar: boolean; // = false; 音樂地址使用變量
    fadeInTimeUseVar: boolean; // = false; 淡入效果使用變量
}
/**
* 自定義命令 5004-停止環境聲效
*/
class CustomCommandParams_5004 {
    fadeOutTime: number; // = 0; 淡出效果
    fadeOutTimeVarID: number; // = 1; 淡出效果
    fadeOutTimeUseVar: boolean; // = false; 使用變量
}
/**
* 自定義命令 5005-播放音效
*/
class CustomCommandParams_5005 {
    se: string; // = ""; 選擇
    seVarID: number; // = 1; 選擇
    systemSEType: number; // = 1; 選擇
    systemSE: boolean; // = false; 系統音效
    seUseVar: boolean; // = false; 使用變量
}
/**
* 自定義命令 5006-停止音效
*/
class CustomCommandParams_5006 {
}
/**
* 自定義命令 5007-播放語音
*/
class CustomCommandParams_5007 {
    ts: string; // = ""; 選擇
    tsVarID: number; // = 1; 選擇
    tsUseVar: boolean; // = false; 使用變量
}
/**
* 自定義命令 5008-停止語音
*/
class CustomCommandParams_5008 {
}
/**
* 自定義命令 15001-
*/
class CustomCommandParams_15001 {
}
/**
* 自定義命令 15002-
*/
class CustomCommandParams_15002 {
}
