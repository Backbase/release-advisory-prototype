"use strict";(self.webpackChunkrelease_advisory_prototype=self.webpackChunkrelease_advisory_prototype||[]).push([[879],{2879:(ae,f,r)=>{r.r(f),r.d(f,{UsecaseOneComponent:()=>te});var h=r(6814),u=r(2557),_=r(6381),v=r(2032),b=r(9157),d=r(6223),y=r(7921),C=r(7398),F=r(1175),p=r(2296),U=r(7222),l=r(3775),e=r(5879),m=r(3680),k=r(2495);const I=["input"],z=["label"],E=["*"],q=new e.OlP("mat-checkbox-default-options",{providedIn:"root",factory:T});function T(){return{color:"accent",clickAction:"check-indeterminate"}}const w={provide:d.JU,useExisting:(0,e.Gpc)(()=>Z),multi:!0};class L{}let J=0;const A=T(),V=(0,m.sb)((0,m.pj)((0,m.Kr)((0,m.Id)(class{constructor(t){this._elementRef=t}}))));let R=(()=>{var t;class a extends V{get inputId(){return`${this.id||this._uniqueId}-input`}get required(){return this._required}set required(o){this._required=(0,k.Ig)(o)}constructor(o,c,i,s,x,g,ne){super(c),this._changeDetectorRef=i,this._ngZone=s,this._animationMode=g,this._options=ne,this.ariaLabel="",this.ariaLabelledby=null,this.labelPosition="after",this.name=null,this.change=new e.vpe,this.indeterminateChange=new e.vpe,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=0,this._controlValueAccessorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||A,this.color=this.defaultColor=this._options.color||A.color,this.tabIndex=parseInt(x)||0,this.id=this._uniqueId=`${o}${++J}`}ngAfterViewInit(){this._syncIndeterminate(this._indeterminate)}get checked(){return this._checked}set checked(o){const c=(0,k.Ig)(o);c!=this.checked&&(this._checked=c,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(o){const c=(0,k.Ig)(o);c!==this.disabled&&(this._disabled=c,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(o){const c=o!=this._indeterminate;this._indeterminate=(0,k.Ig)(o),c&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(o){this.checked=!!o}registerOnChange(o){this._controlValueAccessorChangeFn=o}registerOnTouched(o){this._onTouched=o}setDisabledState(o){this.disabled=o}_transitionCheckState(o){let c=this._currentCheckState,i=this._getAnimationTargetElement();if(c!==o&&i&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(c,o),this._currentCheckState=o,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);const s=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(s)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){const o=this._options?.clickAction;this.disabled||"noop"===o?!this.disabled&&"noop"===o&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==o&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this._checked=!this._checked,this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}_onInteractionEvent(o){o.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(o,c){if("NoopAnimations"===this._animationMode)return"";switch(o){case 0:if(1===c)return this._animationClasses.uncheckedToChecked;if(3==c)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case 2:return 1===c?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case 1:return 2===c?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case 3:return 1===c?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(o){const c=this._inputElement;c&&(c.nativeElement.indeterminate=o)}}return(t=a).\u0275fac=function(o){e.$Z()},t.\u0275dir=e.lG2({type:t,viewQuery:function(o,c){if(1&o&&(e.Gf(I,5),e.Gf(z,5),e.Gf(m.wG,5)),2&o){let i;e.iGM(i=e.CRH())&&(c._inputElement=i.first),e.iGM(i=e.CRH())&&(c._labelElement=i.first),e.iGM(i=e.CRH())&&(c.ripple=i.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],id:"id",required:"required",labelPosition:"labelPosition",name:"name",value:"value",checked:"checked",disabled:"disabled",indeterminate:"indeterminate"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},features:[e.qOj]}),a})(),Z=(()=>{var t;class a extends R{constructor(o,c,i,s,x,g){super("mat-mdc-checkbox-",o,c,i,s,x,g),this._animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"}}focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(o){const c=new L;return c.source=this,c.checked=o,c}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_onInputClick(){super._handleInputClick()}_onTouchTargetClick(){super._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(o){o.target&&this._labelElement.nativeElement.contains(o.target)&&o.stopPropagation()}}return(t=a).\u0275fac=function(o){return new(o||t)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(e.R0b),e.$8M("tabindex"),e.Y36(e.QbO,8),e.Y36(q,8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["mat-checkbox"]],hostAttrs:[1,"mat-mdc-checkbox"],hostVars:12,hostBindings:function(o,c){2&o&&(e.Ikx("id",c.id),e.uIk("tabindex",null)("aria-label",null)("aria-labelledby",null),e.ekj("_mat-animation-noopable","NoopAnimations"===c._animationMode)("mdc-checkbox--disabled",c.disabled)("mat-mdc-checkbox-disabled",c.disabled)("mat-mdc-checkbox-checked",c.checked))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex"},exportAs:["matCheckbox"],features:[e._Bn([w]),e.qOj],ngContentSelectors:E,decls:15,vars:19,consts:[[1,"mdc-form-field",3,"click"],[1,"mdc-checkbox"],["checkbox",""],[1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"checked","indeterminate","disabled","id","required","tabIndex","blur","click","change"],["input",""],[1,"mdc-checkbox__ripple"],[1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","",1,"mat-mdc-checkbox-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"],["label",""]],template:function(o,c){if(1&o&&(e.F$t(),e.TgZ(0,"div",0),e.NdJ("click",function(s){return c._preventBubblingFromLabel(s)}),e.TgZ(1,"div",1,2)(3,"div",3),e.NdJ("click",function(){return c._onTouchTargetClick()}),e.qZA(),e.TgZ(4,"input",4,5),e.NdJ("blur",function(){return c._onBlur()})("click",function(){return c._onInputClick()})("change",function(s){return c._onInteractionEvent(s)}),e.qZA(),e._UZ(6,"div",6),e.TgZ(7,"div",7),e.O4$(),e.TgZ(8,"svg",8),e._UZ(9,"path",9),e.qZA(),e.kcU(),e._UZ(10,"div",10),e.qZA(),e._UZ(11,"div",11),e.qZA(),e.TgZ(12,"label",12,13),e.Hsn(14),e.qZA()()),2&o){const i=e.MAs(2);e.ekj("mdc-form-field--align-end","before"==c.labelPosition),e.xp6(4),e.ekj("mdc-checkbox--selected",c.checked),e.Q6J("checked",c.checked)("indeterminate",c.indeterminate)("disabled",c.disabled)("id",c.inputId)("required",c.required)("tabIndex",c.tabIndex),e.uIk("aria-label",c.ariaLabel||null)("aria-labelledby",c.ariaLabelledby)("aria-describedby",c.ariaDescribedby)("name",c.name)("value",c.value),e.xp6(7),e.Q6J("matRippleTrigger",i)("matRippleDisabled",c.disableRipple||c.disabled)("matRippleCentered",!0),e.xp6(1),e.Q6J("for",c.inputId)}},dependencies:[m.wG],styles:['.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox[hidden]{display:none}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-checkbox{padding:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:var(--mdc-checkbox-disabled-selected-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}@keyframes mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}}@keyframes mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}}.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:hover.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox .mdc-checkbox__background{top:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:focus:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color);background-color:var(--mdc-checkbox-selected-focus-icon-color)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}html{--mdc-checkbox-disabled-selected-checkmark-color:#fff;--mdc-checkbox-selected-focus-state-layer-opacity:0.16;--mdc-checkbox-selected-hover-state-layer-opacity:0.04;--mdc-checkbox-selected-pressed-state-layer-opacity:0.16;--mdc-checkbox-unselected-focus-state-layer-opacity:0.16;--mdc-checkbox-unselected-hover-state-layer-opacity:0.04;--mdc-checkbox-unselected-pressed-state-layer-opacity:0.16}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox .mdc-checkbox__background{-webkit-print-color-adjust:exact;color-adjust:exact}.mat-mdc-checkbox._mat-animation-noopable *,.mat-mdc-checkbox._mat-animation-noopable *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default}.mat-mdc-checkbox label:empty{display:none}.cdk-high-contrast-active .mat-mdc-checkbox.mat-mdc-checkbox-disabled{opacity:.5}.cdk-high-contrast-active .mat-mdc-checkbox .mdc-checkbox__checkmark{--mdc-checkbox-selected-checkmark-color: CanvasText;--mdc-checkbox-disabled-selected-checkmark-color: CanvasText}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:""}'],encapsulation:2,changeDetection:0}),a})(),O=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),a})(),D=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.BQ,m.si,O,m.BQ,O]}),a})();var S=r(5313),M=r(5940);const B=["paginator"];function P(t,a){if(1&t&&(e.TgZ(0,"mat-chip-option",24),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.Q6J("selected",n.isSelected),e.xp6(1),e.Oqu(n.name)}}function G(t,a){if(1&t&&(e.TgZ(0,"mat-chip-option",24),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.Q6J("selected",n.isSelected),e.xp6(1),e.Oqu(n.name)}}function Y(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"button",25),e.NdJ("click",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.clear(c.releaseAdivsorForm.controls.sourceVersion))}),e.TgZ(1,"mat-icon"),e._uU(2,"close"),e.qZA()()}}function j(t,a){if(1&t&&(e.TgZ(0,"mat-option",26),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",n," ")}}function H(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"button",25),e.NdJ("click",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.clear(c.releaseAdivsorForm.controls.targetVersion))}),e.TgZ(1,"mat-icon"),e._uU(2,"close"),e.qZA()()}}function X(t,a){if(1&t&&(e.TgZ(0,"mat-option",26),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",n," ")}}function $(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.showFilters=!c.showFilters)}),e.TgZ(1,"mat-icon"),e._uU(2,"filter_list"),e.qZA()()}}function K(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"section")(1,"mat-checkbox",31),e.NdJ("ngModelChange",function(c){const s=e.CHM(n).$implicit;return e.KtG(s.isChecked=c)}),e._uU(2),e.qZA()()}if(2&t){const n=a.$implicit;e.xp6(1),e.Q6J("ngModel",n.isChecked),e.xp6(1),e.hij(" ",n.name," ")}}function W(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"section")(1,"mat-checkbox",31),e.NdJ("ngModelChange",function(c){const s=e.CHM(n).$implicit;return e.KtG(s.isSelected=c)}),e._uU(2),e.qZA()()}if(2&t){const n=a.$implicit;e.xp6(1),e.Q6J("ngModel",n.isSelected),e.xp6(1),e.hij(" ",n.name," ")}}function ee(t,a){if(1&t&&(e.TgZ(0,"div",28)(1,"h3"),e._uU(2,"Filter Options"),e.qZA(),e.TgZ(3,"h4"),e._uU(4,"Change Type"),e.qZA(),e.YNc(5,K,3,2,"section",29),e.TgZ(6,"h4",30),e._uU(7,"Components"),e.qZA(),e.YNc(8,W,3,2,"section",29),e.qZA()),2&t){const n=e.oxw();e.xp6(5),e.Q6J("ngForOf",n.changeTypeList),e.xp6(3),e.Q6J("ngForOf",n.componentList)}}function ce(t,a){1&t&&(e.TgZ(0,"div",32),e._UZ(1,"mat-spinner"),e.qZA())}function oe(t,a){if(1&t&&e._UZ(0,"app-change-table",33),2&t){const n=e.oxw();e.Q6J("dataSource",n.dataSource)("displayedColumns",n.displayedColumns)}}let te=(()=>{var t;class a{constructor(o){this.fb=o,this.displayedColumns=l.lS,this.changeTypeList=l.XM,this.componentList=l.wx,this.dataSource=new S.by(l.mV),this.showFilters=!1,this.versionList=[...l.tq],this.productList=l.Uu,this.releaseAdivsorForm=this.fb.group({sourceVersion:["",d.kI.required],targetVersion:["",d.kI.required]}),this.isLoading=!1,this.disciplineList=l.yL}ngOnInit(){this.filteredSourceVersion=this.releaseAdivsorForm.controls.sourceVersion.valueChanges.pipe((0,y.O)(""),(0,C.U)(o=>this._filter(o||""))),this.filteredTargetVersion=this.releaseAdivsorForm.controls.targetVersion.valueChanges.pipe((0,y.O)(""),(0,C.U)(o=>this._filter(o||""))),this.releaseAdivsorForm.valueChanges.subscribe(o=>{o.sourceVersion&&o.targetVersion&&(this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},1500))})}_filter(o){return this.versionList.filter(c=>c?.toLowerCase().includes(o))}clear(o){o.setValue("")}}return(t=a).\u0275fac=function(o){return new(o||t)(e.Y36(d.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-usecase-one"]],viewQuery:function(o,c){if(1&o&&e.Gf(B,5),2&o){let i;e.iGM(i=e.CRH())&&(c.paginator=i.first)}},standalone:!0,features:[e.jDz],decls:47,vars:17,consts:[[1,"container"],[1,"product-list","margin-top-xs"],[1,"product"],["multiple","true"],[3,"selected",4,"ngFor","ngForOf"],[1,"discipline-list","margin-top-xs"],[1,"discipline"],[1,"version-selector","margin-top-xs",3,"formGroup"],[1,"current-version"],["type","text","placeholder","Pick one","aria-label","Number","matInput","","formControlName","sourceVersion",3,"matAutocomplete"],["type","button","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["autoActiveFirstOption",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"target-version"],["type","text","placeholder","Pick one","aria-label","Number","matInput","","formControlName","targetVersion",3,"matAutocomplete"],["auto1","matAutocomplete"],[1,"example-button-container"],["mat-mini-fab","","color","primary","aria-label","Example icon button with a filter list icon",3,"click",4,"ngIf"],[1,"content-container"],["class","filter",4,"ngIf"],[1,"release-details"],["class","loader center",4,"ngIf"],[3,"dataSource","displayedColumns",4,"ngIf"],[3,"selected"],["type","button","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[3,"value"],["mat-mini-fab","","color","primary","aria-label","Example icon button with a filter list icon",3,"click"],[1,"filter"],[4,"ngFor","ngForOf"],[1,"margin-top-xs"],[3,"ngModel","ngModelChange"],[1,"loader","center"],[3,"dataSource","displayedColumns"]],template:function(o,c){if(1&o&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Release Advisory"),e.qZA(),e.TgZ(3,"div",1)(4,"h2"),e._uU(5,"Select Products"),e.qZA(),e.TgZ(6,"div",2)(7,"mat-chip-listbox",3),e.YNc(8,P,2,2,"mat-chip-option",4),e.qZA()()(),e.TgZ(9,"div",5)(10,"h2"),e._uU(11,"Select Discipline"),e.qZA(),e.TgZ(12,"div",6)(13,"mat-chip-listbox",3),e.YNc(14,G,2,2,"mat-chip-option",4),e.qZA()()(),e.TgZ(15,"form",7)(16,"div",8)(17,"h2"),e._uU(18,"Current Version"),e.qZA(),e.TgZ(19,"mat-form-field")(20,"mat-label"),e._uU(21,"Current Version"),e.qZA(),e._UZ(22,"input",9),e.YNc(23,Y,3,0,"button",10),e.TgZ(24,"mat-autocomplete",11,12),e.YNc(26,j,2,2,"mat-option",13),e.ALo(27,"async"),e.qZA()()(),e.TgZ(28,"div",14)(29,"h2"),e._uU(30,"Target Version"),e.qZA(),e.TgZ(31,"mat-form-field")(32,"mat-label"),e._uU(33,"Target Version"),e.qZA(),e._UZ(34,"input",15),e.YNc(35,H,3,0,"button",10),e.TgZ(36,"mat-autocomplete",11,16),e.YNc(38,X,2,2,"mat-option",13),e.ALo(39,"async"),e.qZA()()()(),e.TgZ(40,"div",17),e.YNc(41,$,3,0,"button",18),e.qZA(),e.TgZ(42,"div",19),e.YNc(43,ee,9,2,"div",20),e.TgZ(44,"div",21),e.YNc(45,ce,2,0,"div",22),e.YNc(46,oe,1,2,"app-change-table",23),e.qZA()()()),2&o){const i=e.MAs(25),s=e.MAs(37);e.xp6(8),e.Q6J("ngForOf",c.productList),e.xp6(6),e.Q6J("ngForOf",c.disciplineList),e.xp6(1),e.Q6J("formGroup",c.releaseAdivsorForm),e.xp6(7),e.Q6J("matAutocomplete",i),e.xp6(1),e.Q6J("ngIf",c.releaseAdivsorForm.controls.sourceVersion.value),e.xp6(3),e.Q6J("ngForOf",e.lcZ(27,13,c.filteredSourceVersion)),e.xp6(8),e.Q6J("matAutocomplete",s),e.xp6(1),e.Q6J("ngIf",c.releaseAdivsorForm.controls.targetVersion.value),e.xp6(3),e.Q6J("ngForOf",e.lcZ(39,15,c.filteredTargetVersion)),e.xp6(3),e.Q6J("ngIf",c.releaseAdivsorForm.valid&&!c.isLoading),e.xp6(2),e.Q6J("ngIf",c.showFilters),e.xp6(2),e.Q6J("ngIf",c.isLoading),e.xp6(1),e.Q6J("ngIf",c.releaseAdivsorForm.valid&&!c.isLoading)}},dependencies:[h.ez,h.sg,h.O5,h.Ov,u.Hi,u.z2,u.iO,_.Bb,_.XC,m.ey,_.ZL,v.c,v.Nt,b.KE,b.hX,b.R9,b.lN,d.UX,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,F.Ps,F.Hw,p.ot,p.RK,p.nh,U.y,D,Z,d.u5,d.On,M.Cq,M.Ou],styles:[".margin-top-xs[_ngcontent-%COMP%]{margin-top:2rem}.version-selector[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:5rem}.calver-selector-form[_ngcontent-%COMP%]{display:flex}.mat-mdc-chip.mat-mdc-standard-chip[_ngcontent-%COMP%]{border-radius:3px;padding:.3rem}.filter[_ngcontent-%COMP%]{background-color:#fff;overflow-y:scroll;overflow-x:hidden;width:20%;padding:1em}.content-container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.5rem;padding:1rem}.release-details[_ngcontent-%COMP%]{width:100%}"]}),a})()}}]);