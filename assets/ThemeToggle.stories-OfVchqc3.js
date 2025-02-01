import{j as e}from"./jsx-runtime-CmIOflP4.js";import{u as y}from"./ThemeProvider-Cb6AzCgx.js";import"./index-KqYmeiyw.js";const d=({checked:t,onChange:o,label:n,className:m="",disabled:s=!1,size:u="medium",children:p})=>{const h=g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),s||o(!t))},x=["toggle",`toggle--${u}`,t&&"toggle--checked",s&&"toggle--disabled",m].filter(Boolean).join(" ");return e.jsxs("div",{className:"toggle-container",children:[n&&e.jsx("label",{className:"toggle__label",children:n}),e.jsx("div",{className:x,role:"switch","aria-checked":t,"aria-disabled":s,tabIndex:s?-1:0,onClick:()=>!s&&o(!t),onKeyDown:h,children:e.jsxs("div",{className:"toggle__track",children:[e.jsx("div",{className:"toggle__thumb"}),p]})})]})};d.__docgenInfo={description:"Base toggle switch component that provides core toggle functionality",methods:[],displayName:"BaseToggle",props:{checked:{required:!0,tsType:{name:"boolean"},description:"Whether the toggle is checked"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback when the toggle state changes"},label:{required:!1,tsType:{name:"string"},description:"Optional label for the toggle"},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is disabled",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the toggle - affects overall dimensions",defaultValue:{value:"'medium'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional children to render inside the toggle"}}};const a=({className:t="",size:o="medium"})=>{const{theme:n,setTheme:m}=y();return e.jsx(d,{checked:n==="dark",onChange:s=>m(s?"dark":"light"),className:`theme-toggle ${t}`,size:o,children:e.jsxs("div",{className:"theme-toggle__icons",children:[e.jsxs("svg",{className:"theme-toggle__icon theme-toggle__icon--sun",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),e.jsx("svg",{className:"theme-toggle__icon theme-toggle__icon--moon",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})]})})};a.__docgenInfo={description:"A specialized toggle switch for theme switching with sun/moon icons",methods:[],displayName:"ThemeToggle",props:{className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the toggle",defaultValue:{value:"'medium'",computed:!1}}}};const v={title:"Components/ThemeToggle",component:a,parameters:{layout:"centered",docs:{description:{component:"A toggle switch component for changing between light and dark themes."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"The size of the toggle switch"},className:{control:"text",description:"Additional CSS classes to apply"}}},r={args:{}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsx(a,{size:"small"}),e.jsx(a,{size:"medium"}),e.jsx(a,{size:"large"})]})},i={args:{className:"custom-theme-toggle"},parameters:{docs:{description:{story:"The ThemeToggle component can be customized using CSS classes."}}}},c={args:{size:"medium"},parameters:{docs:{description:{story:"Try toggling between light and dark themes. The theme change will affect the entire documentation."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  }}>
            <ThemeToggle size="small" />
            <ThemeToggle size="medium" />
            <ThemeToggle size="large" />
        </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'custom-theme-toggle'
  },
  parameters: {
    docs: {
      description: {
        story: 'The ThemeToggle component can be customized using CSS classes.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Try toggling between light and dark themes. The theme change will affect the entire documentation.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const j=["Basic","Sizes","CustomStyling","Interactive"];export{r as Basic,i as CustomStyling,c as Interactive,l as Sizes,j as __namedExportsOrder,v as default};
