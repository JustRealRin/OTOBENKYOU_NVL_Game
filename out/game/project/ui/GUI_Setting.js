var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GUI_Setting = (function (_super) {
    __extends(GUI_Setting, _super);
    function GUI_Setting() {
        var _this = _super.call(this) || this;
        if (!_this.bgmSlider) {
            return _this;
        }
        if (!_this.bgsSlider) {
            return _this;
        }
        if (!_this.seSlider) {
            return _this;
        }
        if (!_this.tsSlider) {
            return _this;
        }
        _this.bgmSlider.on(EventObject.CHANGE, _this, _this.onAudioSliderChange, [_this.bgmSlider, 0]);
        _this.bgsSlider.on(EventObject.CHANGE, _this, _this.onAudioSliderChange, [_this.bgsSlider, 1]);
        _this.seSlider.on(EventObject.CHANGE, _this, _this.onAudioSliderChange, [_this.seSlider, 2]);
        _this.tsSlider.on(EventObject.CHANGE, _this, _this.onAudioSliderChange, [_this.tsSlider, 3]);
        _this.on(EventObject.DISPLAY, _this, _this.onDisplay);
        return _this;
    }
    GUI_Setting.prototype.onDisplay = function () {
        this.bgmSlider.setValueForce(GameAudio.bgmVolume);
        this.bgsSlider.setValueForce(GameAudio.bgsVolume);
        this.seSlider.setValueForce(GameAudio.seVolume);
        this.tsSlider.setValueForce(GameAudio.tsVolume);
    };
    GUI_Setting.prototype.onAudioSliderChange = function (slider, mode) {
        if (mode == 0)
            GameAudio.bgmVolume = slider.value;
        else if (mode == 1)
            GameAudio.bgsVolume = slider.value;
        else if (mode == 2)
            GameAudio.seVolume = slider.value;
        else if (mode == 3)
            GameAudio.tsVolume = slider.value;
    };
    GUI_Setting.init = function () {
        SinglePlayerGame.saveConfig.audioVolume = false;
        var settingData = SinglePlayerGame.getSaveCustomGlobalData("Setting");
        if (settingData) {
            GameAudio.bgmVolume = settingData.bgmVolume;
            GameAudio.bgsVolume = settingData.bgsVolume;
            GameAudio.seVolume = settingData.seVolume;
            GameAudio.tsVolume = settingData.tsVolume;
        }
        SinglePlayerGame.regSaveCustomGlobalData("Setting", Callback.New(this.getGlobalData, this));
    };
    GUI_Setting.getGlobalData = function () {
        return {
            bgmVolume: GameAudio.bgmVolume,
            bgsVolume: GameAudio.bgsVolume,
            seVolume: GameAudio.seVolume,
            tsVolume: GameAudio.tsVolume
        };
    };
    return GUI_Setting;
}(GUI_6));
//# sourceMappingURL=GUI_Setting.js.map