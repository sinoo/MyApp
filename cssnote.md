* 当元素变成absolute时，hover效果出现问题，加上z-index可解决。待测
* text-indent可继承
* li/div中只放img会造成间隙，方法是设置img为block，目测ul与li之间也会产生间隙，方法是设置li的vertical-align为top，待测。
* chrome://settings/fonts设置最小字号，默认为12px，造成设置的更小字号不可用。
* 两个inline-block，vertical-align是middle，会造成上间隙，不确定是否是因为img元素的关系。
* table 边框显示有bug在chrome上，计算后的布局和页面上不一致。
* chrome和firefox对collapse的table，border加的地方不同。
* chrome有字号12px的自带限制。
* 改变placeholder的样式
	&::-webkit-input-placeholder {
      color: #acacac;
      opacity: 1;
    }
    &::-moz-placeholder {
      color: #acacac;
      opacity: 1;
    }
    &:-ms-input-placeholder {
      color: #acacac;
      opacity: 1;
    }
    &:-moz-placeholder {
      color: #acacac;
      opacity: 1;
    }
    
    
* 为img设width和height，让浏览器为页面布局预留正确的空间
* FF不支持new Date('2013-5-7')这种形式，请用new Date(2013,5,7),数字、字符串都可以，safari不支持数组传入。
* collapse的table直接在td或th上加上背景，在FF上会覆盖边框。
* table的渲染在FF、chrome、safari上真心不一致，很容易出问题。
* button disabled 就不可点击了
* pointer-events
* 完全没有测出效果，数字没有被检测（iOS/Android），邮箱（被分隔符隔开）仍被检测（Android）

		<meta name="format-detection" content="telephone=yes">
		<meta name="format-detection" content="email=no">
* 参会人选择超过一行后再删除，由于中间部分已计算过高度，采用space-between会按需分隔。原来想上中一起flex-start，然后和下space-between。后来发现上变高度时，中间不会重算高度，想想有什么更好的办法。【chrome有问题，FF、安卓大象无问题，不处理，已选参会人不会超过一行】