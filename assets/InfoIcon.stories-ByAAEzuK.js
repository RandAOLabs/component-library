import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{T as m}from"./Tooltip-Btu6z7YV.js";import"./index-DJO9vBfz.js";const o=({content:t,position:l="top",size:p=16,className:c="",disabled:d=!1})=>e.jsx(m,{content:t,position:l,disabled:d,className:c,children:e.jsx("div",{className:"info-icon",role:"button",tabIndex:0,style:{width:p,height:p},"aria-label":"More information",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]})})});o.__docgenInfo={description:"An information icon that shows a tooltip on hover",methods:[],displayName:"InfoIcon",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The tooltip content to show"},position:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"Position of the tooltip",defaultValue:{value:"'top'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"Size of the icon in pixels",defaultValue:{value:"16",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the tooltip is disabled",defaultValue:{value:"false",computed:!1}}}};const f={title:"Components/InfoIcon",component:o,parameters:{layout:"centered",docs:{description:{component:"An information icon component that displays a tooltip on hover."}}},tags:["autodocs"],argTypes:{content:{control:"text",description:"The content to display in the tooltip"},position:{control:"select",options:["top","right","bottom","left"],description:"The position of the tooltip relative to the icon"},size:{control:"number",description:"The size of the icon in pixels"},className:{control:"text",description:"Additional CSS classes to apply"}}},n={args:{content:"This is a helpful tooltip message"}},s={args:{content:"Tooltip content",position:"top"},render:t=>e.jsxs("div",{style:{display:"inline-grid",gridTemplateColumns:"repeat(3, auto)",gap:"2rem",alignItems:"center",justifyItems:"center"},children:[e.jsx("div",{}),e.jsx(o,{...t,content:"Tooltip appears above",position:"top"}),e.jsx("div",{}),e.jsx(o,{...t,content:"Tooltip appears to the left",position:"left"}),e.jsx("div",{style:{padding:"1rem"},children:"Hover over the icons"}),e.jsx(o,{...t,content:"Tooltip appears to the right",position:"right"}),e.jsx("div",{}),e.jsx(o,{...t,content:"Tooltip appears below",position:"bottom"}),e.jsx("div",{})]})},i={args:{content:"Tooltip content",position:"right"},render:t=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsx(o,{...t,content:"Small icon",size:12}),e.jsx(o,{...t,content:"Medium icon",size:16}),e.jsx(o,{...t,content:"Large icon",size:20})]})},a={args:{content:"This is a longer tooltip message that demonstrates how the component handles multiple lines of text. It automatically wraps and sizes the tooltip appropriately.",position:"right"}},r={args:{content:"Try changing my position and size!",position:"top",size:16},parameters:{docs:{description:{story:"Experiment with different positions and sizes to see how the tooltip behaves."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is a helpful tooltip message'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip content',
    position: 'top'
  },
  render: args => <div style={{
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(3, auto)',
    gap: '2rem',
    alignItems: 'center',
    justifyItems: 'center'
  }}>
            <div />
            <InfoIcon {...args} content="Tooltip appears above" position="top" />
            <div />
            <InfoIcon {...args} content="Tooltip appears to the left" position="left" />
            <div style={{
      padding: '1rem'
    }}>
                Hover over the icons
            </div>
            <InfoIcon {...args} content="Tooltip appears to the right" position="right" />
            <div />
            <InfoIcon {...args} content="Tooltip appears below" position="bottom" />
            <div />
        </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip content',
    position: 'right'
  },
  render: args => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  }}>
            <InfoIcon {...args} content="Small icon" size={12} />
            <InfoIcon {...args} content="Medium icon" size={16} />
            <InfoIcon {...args} content="Large icon" size={20} />
        </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is a longer tooltip message that demonstrates how the component handles multiple lines of text. It automatically wraps and sizes the tooltip appropriately.',
    position: 'right'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Try changing my position and size!',
    position: 'top',
    size: 16
  },
  parameters: {
    docs: {
      description: {
        story: 'Experiment with different positions and sizes to see how the tooltip behaves.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const v=["Basic","Positions","Sizes","LongContent","Interactive"];export{n as Basic,r as Interactive,a as LongContent,s as Positions,i as Sizes,v as __namedExportsOrder,f as default};
