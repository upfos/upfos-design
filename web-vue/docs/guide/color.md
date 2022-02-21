## Color 色彩

Upfos Design 使用一套特定的调色板来规定颜色，保证品牌的一致性，为品牌在客户群中打造强而有力的品牌识别度。

### 主色

Upfos 的主要品牌色是温暖与友好的橙色。

<div class="color-box is--primary" style="background: #EF5230; width: 33%;">
  Brand Color
  <div class="value">#EF5230</div>
  <div class="sub-box">
    <span class="sub-item" style="background: #F3826A">#F3826A</span>
    <span class="sub-item black-font" style="background: #FFF2EF">#FFF2EF</span>
  </div>
</div>

### 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<div class="color-box box-secondary" style="background: #2A7AFF;">
  Secondary
  <div class="value">#2A7AFF</div>
</div>
<div class="color-box box-secondary" style="background: #D10921;">
  Danger
  <div class="value">#D10921</div>
</div>
<div class="color-box box-secondary" style="background: #12CE66;">
  Success
  <div class="value">#12CE66</div>
</div>
<div class="color-box box-secondary" style="background: #F27029;">
  Warning
  <div class="value">#F27029</div>
</div>

### 中性色

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

<div class="box-wrap">
  <div class="color-box box-other" style="background: #2C2C2C;">
    Primary Text
    <div class="value">#2C2C2C</div>
  </div>
  <div class="color-box box-other" style="background: #606266;">
    Regular Text
    <div class="value">#606266</div>
  </div>
  <div class="color-box box-other" style="background: #919398;">
    Secondary Text
    <div class="value">#919398</div>
  </div>
  <div class="color-box box-other" style="background: #C1C4CB;">
    Placeholder Text
    <div class="value">#C1C4CB</div>
  </div>
</div>
<div class="box-wrap">
  <div class="color-box box-other black-font" style="background: #C0C4CC;">
    Basic Border
    <div class="value">#C0C4CC</div>
  </div>
  <div class="color-box box-other black-font" style="background: #DDDFE6;">
    Basic Border
    <div class="value">#DDDFE6</div>
  </div>
  <div class="color-box box-other black-font" style="background: #EBEFF5;">
    Basic Border
    <div class="value">#EBEFF5</div>
  </div>
</div>
<div class="box-wrap">
  <div class="color-box box-other black-font" style="background: #EDEFF3;">
    Basic Gray
    <div class="value">#EDEFF3</div>
  </div>
  <div class="color-box box-other black-font" style="background: #F5F7FA;">
    Light Gray
    <div class="value">#F5F7FA</div>
  </div>
</div>

<style lang="scss">
  .color-box {
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    height: 114px;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    line-height: 1;
    &.box-other {
      height: 78px;
    }
    &.box-secondary {
      width: 20%;
      display: inline-block;
      margin-right: 10px;
      height: 78px;
    }
    .value {
      font-size: 12px;
      line-height: 24px;
      opacity: .69;
    } 
  }
  .black-font {
    color: #2C2C2C;
  }
  .sub-box {
    display: flex;
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    position: absolute;
    line-height: 40px;
    text-align: center;
  }
  .sub-item {
    flex: 1;
    font-size: 12px;
    &:first-child {
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-bottom-right-radius: 4px;
    }
  }
  .box-wrap {
    width: 25%;
    display: inline-block;
    vertical-align: top;
  }
  .box-wrap + .box-wrap {
    padding-left: 10px;
  }
  .box-other + .box-other {
    margin-top: 10px;
  }
</style>
