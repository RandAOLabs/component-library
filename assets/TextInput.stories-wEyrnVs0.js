import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as y}from"./index-DJO9vBfz.js";import{u as I}from"./ThemeProvider-DaJaB1Hs.js";const T=y.forwardRef(({variant:i="default",size:n="medium",error:a=!1,success:s=!1,fullWidth:r=!1,disabled:l=!1,className:o="",...x},v)=>{const{theme:b}=I(),g=["base-input",`base-input--${i}`,`base-input--${n}`,a&&"base-input--error",s&&"base-input--success",r&&"base-input--full-width",l&&"base-input--disabled",o].filter(Boolean).join(" ");return e.jsx("input",{ref:v,className:g,disabled:l,"data-theme":b,...x})});T.__docgenInfo={description:`Base input component that provides core input functionality and styling.
Used as the foundation for all input variants in the component library.`,methods:[],displayName:"BaseInput",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"Input variant",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Input size",defaultValue:{value:"'medium'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},success:{required:!1,tsType:{name:"boolean"},description:"Success state",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the input is full width",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const t=y.forwardRef(({label:i,helperText:n,startIcon:a,endIcon:s,error:r=!1,success:l=!1,fullWidth:o=!1,className:x="",id:v,...b},g)=>{const w=v||`text-input-${Math.random().toString(36).slice(2,11)}`,j=["text-input",o&&"text-input--full-width",r&&"text-input--error",l&&"text-input--success",x].filter(Boolean).join(" ");return e.jsxs("div",{className:j,children:[i&&e.jsx("label",{htmlFor:w,className:"text-input__label",children:i}),e.jsxs("div",{className:"text-input__container",children:[a&&e.jsx("span",{className:"text-input__icon text-input__icon--start",children:a}),e.jsx(T,{ref:g,id:w,error:r,success:l,fullWidth:o,className:`text-input__field ${a?"text-input__field--with-start-icon":""} ${s?"text-input__field--with-end-icon":""}`,...b}),s&&e.jsx("span",{className:"text-input__icon text-input__icon--end",children:s})]}),n&&e.jsx("span",{className:`text-input__helper ${r?"text-input__helper--error":""} ${l?"text-input__helper--success":""}`,children:n})]})});t.__docgenInfo={description:`TextInput component for short-form text input with optional label,
helper text, and icons.`,methods:[],displayName:"TextInput",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"Input variant"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Input size"},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},success:{required:!1,tsType:{name:"boolean"},description:"Success state",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the input is full width",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label for the input"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display below the input"},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Start icon or element"},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"End icon or element"}},composes:["Omit"]};const E={title:"Components/TextInput",component:t,parameters:{layout:"centered",docs:{description:{component:"A versatile text input component with support for labels, helper text, and icons."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","filled","outlined"],description:"The visual style variant of the input"},size:{control:"select",options:["small","medium","large"],description:"The size of the input"},label:{control:"text",description:"Label text displayed above the input"},helperText:{control:"text",description:"Helper text displayed below the input"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"},error:{control:"boolean",description:"Whether to show error state"},success:{control:"boolean",description:"Whether to show success state"},fullWidth:{control:"boolean",description:"Whether the input should take up full width"}}},d={args:{placeholder:"Enter text..."}},p={args:{label:"Email",helperText:"Enter your email address",placeholder:"example@email.com",type:"email"}},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"},children:[e.jsx(t,{label:"Default",placeholder:"Default variant",variant:"default"}),e.jsx(t,{label:"Filled",placeholder:"Filled variant",variant:"filled"}),e.jsx(t,{label:"Outlined",placeholder:"Outlined variant",variant:"outlined"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"},children:[e.jsx(t,{label:"Small",placeholder:"Small input",size:"small"}),e.jsx(t,{label:"Medium",placeholder:"Medium input",size:"medium"}),e.jsx(t,{label:"Large",placeholder:"Large input",size:"large"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{label:"Search",placeholder:"Search...",startIcon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),e.jsx(t,{label:"Password",type:"password",placeholder:"Enter password",endIcon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}),e.jsx(t,{label:"Email",type:"email",placeholder:"example@email.com",startIcon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]})})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{label:"Error State",placeholder:"Error input",error:!0,helperText:"This field is required"}),e.jsx(t,{label:"Success State",placeholder:"Success input",success:!0,helperText:"Looks good!",value:"Valid input"}),e.jsx(t,{label:"Disabled State",placeholder:"Disabled input",disabled:!0,helperText:"This field is disabled"})]})},f={args:{label:"Full Width Input",placeholder:"This input takes up the full width",helperText:"Helper text for full width input",fullWidth:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    helperText: 'Enter your email address',
    placeholder: 'example@email.com',
    type: 'email'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  }}>
            <TextInput label="Default" placeholder="Default variant" variant="default" />
            <TextInput label="Filled" placeholder="Filled variant" variant="filled" />
            <TextInput label="Outlined" placeholder="Outlined variant" variant="outlined" />
        </div>
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  }}>
            <TextInput label="Small" placeholder="Small input" size="small" />
            <TextInput label="Medium" placeholder="Medium input" size="medium" />
            <TextInput label="Large" placeholder="Large input" size="large" />
        </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
            <TextInput label="Search" placeholder="Search..." startIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>} />
            <TextInput label="Password" type="password" placeholder="Enter password" endIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>} />
            <TextInput label="Email" type="email" placeholder="example@email.com" startIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>} />
        </div>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
            <TextInput label="Error State" placeholder="Error input" error helperText="This field is required" />
            <TextInput label="Success State" placeholder="Success input" success helperText="Looks good!" value="Valid input" />
            <TextInput label="Disabled State" placeholder="Disabled input" disabled helperText="This field is disabled" />
        </div>
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes up the full width',
    helperText: 'Helper text for full width input',
    fullWidth: true
  }
}`,...f.parameters?.docs?.source}}};const q=["Basic","WithLabelAndHelper","Variants","Sizes","WithIcons","States","FullWidth"];export{d as Basic,f as FullWidth,c as Sizes,h as States,u as Variants,m as WithIcons,p as WithLabelAndHelper,q as __namedExportsOrder,E as default};
