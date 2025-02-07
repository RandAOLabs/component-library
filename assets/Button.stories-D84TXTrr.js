import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{B as n}from"./Button-CsbVqtWb.js";import"./index-DJO9vBfz.js";import"./ThemeProvider-DaJaB1Hs.js";import"./Spinner-DnEpM9Tv.js";const h={title:"Components/Button",component:n,parameters:{layout:"centered",docs:{description:{component:"A flexible button component with various styles and states."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline"],description:"The visual style of the button"},size:{control:"select",options:["small","medium","large"],description:"The size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},loading:{control:"boolean",description:"Whether to show a loading spinner"},onClick:{action:"clicked",description:"Function called when the button is clicked"},children:{control:"text",description:"The content to display inside the button"},startIcon:{control:"text",description:"Icon to display before the button text"},endIcon:{control:"text",description:"Icon to display after the button text"}}},t={args:{variant:"primary",children:"Primary Button"}},r={args:{variant:"secondary",children:"Secondary Button"}},s={args:{variant:"outline",children:"Outline Button"}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(n,{size:"small",children:"Small"}),e.jsx(n,{size:"medium",children:"Medium"}),e.jsx(n,{size:"large",children:"Large"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{disabled:!0,children:"Disabled"}),e.jsx(n,{loading:!0,children:"Loading"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{startIcon:e.jsx("span",{children:"🚀"}),children:"Start Icon"}),e.jsx(n,{endIcon:e.jsx("span",{children:"🎯"}),children:"End Icon"}),e.jsx(n,{startIcon:e.jsx("span",{children:"💫"}),endIcon:e.jsx("span",{children:"✨"}),children:"Both Icons"})]})},c={args:{variant:"primary",size:"medium",disabled:!1,loading:!1,children:"Interactive Button",startIcon:void 0,endIcon:void 0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
        </div>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
        </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
            <Button startIcon={<span>🚀</span>}>Start Icon</Button>
            <Button endIcon={<span>🎯</span>}>End Icon</Button>
            <Button startIcon={<span>💫</span>} endIcon={<span>✨</span>}>Both Icons</Button>
        </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    children: 'Interactive Button',
    startIcon: undefined,
    endIcon: undefined
  }
}`,...c.parameters?.docs?.source}}};const g=["Primary","Secondary","Outline","Sizes","States","WithIcons","Interactive"];export{c as Interactive,s as Outline,t as Primary,r as Secondary,o as Sizes,a as States,i as WithIcons,g as __namedExportsOrder,h as default};
