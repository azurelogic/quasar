webpackJsonp([14,95],{222:function(i,t,e){var n,a;n=e(291);var o=e(430);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,i.exports=n},291:function(i,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{anchorOrigin:{vertical:"bottom",horizontal:"middle"},selfOrigin:{vertical:"top",horizontal:"middle"}}},computed:{anchor:function(){return this.anchorOrigin.vertical+" "+this.anchorOrigin.horizontal},self:function(){return this.selfOrigin.vertical+" "+this.selfOrigin.horizontal}}}},430:function(i,t){i.exports={render:function(){var i=this,t=(i.$createElement,i._c);return t("div",[t("div",{staticClass:"layout-padding"},[i._m(0),i._v(" "),t("div",{staticStyle:{"margin-top":"40px",width:"200px",height:"70px","background-color":"#26A69A"}},[i._v("\n       \n      "),t("q-tooltip",[i._v("\n        Quasar Rulz!\n      ")])],1),i._v(" "),t("br"),t("br"),i._v(" "),t("div",{staticClass:"group"},[t("button",{staticClass:"indigo"},[i._v("\n        Hover\n        "),t("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle"}},[i._v("\n          Quasar Tooltip 1\n        ")])],1),i._v(" "),t("button",{staticClass:"red"},[i._v("\n        Over\n        "),t("q-tooltip",{attrs:{anchor:"center right",self:"center left"}},[i._v("\n          Quasar Tooltip 2\n        ")])],1),i._v(" "),t("button",{staticClass:"purple"},[i._v("\n        These\n        "),t("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},[i._v("\n          Quasar Tooltip 3\n        ")])],1),i._v(" "),t("button",{staticClass:"amber"},[i._v("\n        Buttons\n        "),t("q-tooltip",{attrs:{anchor:"bottom middle",self:"top middle"}},[i._v("\n          Quasar Tooltip 4\n        ")])],1)]),i._v(" "),t("div",{staticClass:"card",staticStyle:{"margin-top":"75px"}},[t("div",{staticClass:"card-title bg-primary text-center"},[t("button",{staticClass:"orange push",staticStyle:{padding:"35px"}},[t("span",{staticClass:"mobile-hide"},[i._v("Mouse Hover")]),i._v(" "),t("span",{staticClass:"mobile-only"},[i._v("Tap Me")]),i._v(" "),t("q-tooltip",{attrs:{anchor:i.anchor,self:i.self}},[i._v("\n            Quasar\n          ")])],1)]),i._v(" "),t("p",{staticClass:"caption text-center"},[i._v("Configure the Tooltip for button above.")]),i._v(" "),t("p",{staticClass:"text-center"},[t("span",{staticClass:"tag label bg-light"},[i._v('anchor="'+i._s(i.anchor)+'"')]),i._v(" "),t("span",{staticClass:"tag label bg-light"},[i._v('self="'+i._s(i.self)+'"')])]),i._v(" "),t("div",{staticClass:"card-content group row sm-column"},[t("div",{staticClass:"auto column items-center"},[t("p",{staticClass:"caption"},[i._v("Anchor Origin")]),i._v(" "),t("div",{staticClass:"flex"},[t("div",{staticClass:"column group"},[t("div",[i._v("Vertical")]),i._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.anchorOrigin.vertical,expression:"anchorOrigin.vertical"}],attrs:{val:"top"},domProps:{value:i.anchorOrigin.vertical},on:{input:function(t){i.anchorOrigin.vertical=t}}}),i._v("\n                Top\n              ")],1),i._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.anchorOrigin.vertical,expression:"anchorOrigin.vertical"}],attrs:{val:"center"},domProps:{value:i.anchorOrigin.vertical},on:{input:function(t){i.anchorOrigin.vertical=t}}}),i._v("\n                Center\n              ")],1),i._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.anchorOrigin.vertical,expression:"anchorOrigin.vertical"}],attrs:{val:"bottom"},domProps:{value:i.anchorOrigin.vertical},on:{input:function(t){i.anchorOrigin.vertical=t}}}),i._v("\n                Bottom\n              ")],1)]),i._v(" "),t("div",{staticClass:"column group"},[t("div",[i._v("Horizontal")]),i._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.anchorOrigin.horizontal,expression:"anchorOrigin.horizontal"}],attrs:{val:"left"},domProps:{value:i.anchorOrigin.horizontal},on:{input:function(t){i.anchorOrigin.horizontal=t}}}),i._v("\n                Left\n              ")],1),i._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.anchorOrigin.horizontal,expression:"anchorOrigin.horizontal"}],attrs:{val:"middle"},domProps:{value:i.anchorOrigin.horizontal},on:{input:function(t){i.anchorOrigin.horizontal=t}}}),i._v("\n                Middle\n              ")],1),i._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.anchorOrigin.horizontal,expression:"anchorOrigin.horizontal"}],attrs:{val:"right"},domProps:{value:i.anchorOrigin.horizontal},on:{input:function(t){i.anchorOrigin.horizontal=t}}}),i._v("\n                Right\n              ")],1)])])]),i._v(" "),t("div",{staticClass:"auto column items-center"},[t("p",{staticClass:"caption"},[i._v("Target Origin")]),i._v(" "),t("div",{staticClass:"flex"},[t("div",{staticClass:"column group"},[t("div",[i._v("Vertical")]),i._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.selfOrigin.vertical,expression:"selfOrigin.vertical"}],attrs:{val:"top"},domProps:{value:i.selfOrigin.vertical},on:{input:function(t){i.selfOrigin.vertical=t}}}),i._v("\n                Top\n              ")],1),i._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.selfOrigin.vertical,expression:"selfOrigin.vertical"}],attrs:{val:"center"},domProps:{value:i.selfOrigin.vertical},on:{input:function(t){i.selfOrigin.vertical=t}}}),i._v("\n                Center\n              ")],1),i._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.selfOrigin.vertical,expression:"selfOrigin.vertical"}],attrs:{val:"bottom"},domProps:{value:i.selfOrigin.vertical},on:{input:function(t){i.selfOrigin.vertical=t}}}),i._v("\n                Bottom\n              ")],1)]),i._v(" "),t("div",{staticClass:"column group"},[t("div",[i._v("Horizontal")]),i._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.selfOrigin.horizontal,expression:"selfOrigin.horizontal"}],attrs:{val:"left"},domProps:{value:i.selfOrigin.horizontal},on:{input:function(t){i.selfOrigin.horizontal=t}}}),i._v("\n                Left\n              ")],1),i._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.selfOrigin.horizontal,expression:"selfOrigin.horizontal"}],attrs:{val:"middle"},domProps:{value:i.selfOrigin.horizontal},on:{input:function(t){i.selfOrigin.horizontal=t}}}),i._v("\n                Middle\n              ")],1),i._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:i.selfOrigin.horizontal,expression:"selfOrigin.horizontal"}],attrs:{val:"right"},domProps:{value:i.selfOrigin.horizontal},on:{input:function(t){i.selfOrigin.horizontal=t}}}),i._v("\n                Right\n              ")],1)])])])])])])])},staticRenderFns:[function(){var i=this,t=(i.$createElement,i._c);return t("p",{staticClass:"caption"},[t("span",{staticClass:"mobile-hide"},[i._v("\n        Move mouse over the elements below. On a mobile device,\n        you need to tap the elements.\n      ")]),i._v(" "),t("span",{staticClass:"mobile-only"},[i._v("\n        Tap on elements below. On desktop you can move the mouse\n        over the elements.\n      ")])])}]}}});