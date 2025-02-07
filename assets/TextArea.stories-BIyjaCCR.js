import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as y,R as S}from"./index-DJO9vBfz.js";import{u as N}from"./ThemeProvider-DaJaB1Hs.js";const a=y.forwardRef(({variant:z="default",size:A="medium",error:p=!1,success:m=!1,fullWidth:W=!1,label:h,helperText:x,rows:f=3,maxRows:j=10,autoResize:R=!1,className:M="",id:_,onChange:q,...V},E)=>{const{theme:L}=N(),r=S.useRef(null),[F,D]=S.useState(f);y.useImperativeHandle(E,()=>r.current,[]);const g=_||`textarea-${Math.random().toString(36).slice(2,11)}`,H=["textarea",`textarea--${z}`,`textarea--${A}`,p&&"textarea--error",m&&"textarea--success",W&&"textarea--full-width",M].filter(Boolean).join(" "),I=C=>{if(R&&r.current){const t=r.current;t.style.height="auto";const b=parseInt(getComputedStyle(t).lineHeight),T=parseInt(getComputedStyle(t).paddingTop),v=parseInt(getComputedStyle(t).paddingBottom),w=Math.min(Math.max(f,Math.ceil((t.scrollHeight-T-v)/b)),j);D(w),t.style.height=`${w*b+T+v}px`}q?.(C)};return e.jsxs("div",{className:H,children:[h&&e.jsx("label",{htmlFor:g,className:"textarea__label",children:h}),e.jsx("textarea",{ref:r,id:g,className:"textarea__field",rows:F,onChange:I,"data-theme":L,...V}),x&&e.jsx("span",{className:`textarea__helper ${p?"textarea__helper--error":""} ${m?"textarea__helper--success":""}`,children:x})]})});a.__docgenInfo={description:`TextArea component for long-form text input with auto-resize capability
and support for labels and helper text.`,methods:[],displayName:"TextArea",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"TextArea variant",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"TextArea size",defaultValue:{value:"'medium'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},success:{required:!1,tsType:{name:"boolean"},description:"Success state",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea is full width",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label for the textarea"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display below the textarea"},rows:{required:!1,tsType:{name:"number"},description:"Number of visible text rows",defaultValue:{value:"3",computed:!1}},maxRows:{required:!1,tsType:{name:"number"},description:"Maximum number of visible text rows",defaultValue:{value:"10",computed:!1}},autoResize:{required:!1,tsType:{name:"boolean"},description:"Whether to auto-resize based on content",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}}},composes:["Omit"]};const $={title:"Components/TextArea",component:a,parameters:{layout:"centered",docs:{description:{component:"A versatile textarea component with auto-resize capability and support for labels and helper text."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","filled","outlined"],description:"The visual style variant of the textarea"},size:{control:"select",options:["small","medium","large"],description:"The size of the textarea"},label:{control:"text",description:"Label text displayed above the textarea"},helperText:{control:"text",description:"Helper text displayed below the textarea"},placeholder:{control:"text",description:"Placeholder text"},rows:{control:"number",description:"Number of visible text rows"},maxRows:{control:"number",description:"Maximum number of visible text rows when auto-resizing"},autoResize:{control:"boolean",description:"Whether to auto-resize based on content"},disabled:{control:"boolean",description:"Whether the textarea is disabled"},error:{control:"boolean",description:"Whether to show error state"},success:{control:"boolean",description:"Whether to show success state"},fullWidth:{control:"boolean",description:"Whether the textarea should take up full width"}}},l={args:{placeholder:"Enter text...",rows:3}},s={args:{label:"Message",helperText:"Enter your message here",placeholder:"Type your message...",rows:4}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"},children:[e.jsx(a,{label:"Default",placeholder:"Default variant",variant:"default"}),e.jsx(a,{label:"Filled",placeholder:"Filled variant",variant:"filled"}),e.jsx(a,{label:"Outlined",placeholder:"Outlined variant",variant:"outlined"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"},children:[e.jsx(a,{label:"Small",placeholder:"Small textarea",size:"small"}),e.jsx(a,{label:"Medium",placeholder:"Medium textarea",size:"medium"}),e.jsx(a,{label:"Large",placeholder:"Large textarea",size:"large"})]})},n={args:{label:"Auto-resize Textarea",placeholder:"Type to see auto-resize in action...",helperText:"This textarea will grow up to 10 rows",rows:2,maxRows:10,autoResize:!0}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{label:"Error State",placeholder:"Error textarea",error:!0,helperText:"This field is required"}),e.jsx(a,{label:"Success State",placeholder:"Success textarea",success:!0,helperText:"Looks good!",value:"Valid input"}),e.jsx(a,{label:"Disabled State",placeholder:"Disabled textarea",disabled:!0,helperText:"This field is disabled"})]})},u={args:{label:"Full Width Textarea",placeholder:"This textarea takes up the full width",helperText:"Helper text for full width textarea",fullWidth:!0}},c={args:{label:"Blog Post",placeholder:"Write your blog post here...",helperText:"Markdown formatting is supported",rows:10,fullWidth:!0,variant:"outlined"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    rows: 3
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    helperText: 'Enter your message here',
    placeholder: 'Type your message...',
    rows: 4
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  }}>
            <TextArea label="Default" placeholder="Default variant" variant="default" />
            <TextArea label="Filled" placeholder="Filled variant" variant="filled" />
            <TextArea label="Outlined" placeholder="Outlined variant" variant="outlined" />
        </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  }}>
            <TextArea label="Small" placeholder="Small textarea" size="small" />
            <TextArea label="Medium" placeholder="Medium textarea" size="medium" />
            <TextArea label="Large" placeholder="Large textarea" size="large" />
        </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Auto-resize Textarea',
    placeholder: 'Type to see auto-resize in action...',
    helperText: 'This textarea will grow up to 10 rows',
    rows: 2,
    maxRows: 10,
    autoResize: true
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
            <TextArea label="Error State" placeholder="Error textarea" error helperText="This field is required" />
            <TextArea label="Success State" placeholder="Success textarea" success helperText="Looks good!" value="Valid input" />
            <TextArea label="Disabled State" placeholder="Disabled textarea" disabled helperText="This field is disabled" />
        </div>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Textarea',
    placeholder: 'This textarea takes up the full width',
    helperText: 'Helper text for full width textarea',
    fullWidth: true
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Blog Post',
    placeholder: 'Write your blog post here...',
    helperText: 'Markdown formatting is supported',
    rows: 10,
    fullWidth: true,
    variant: 'outlined'
  }
}`,...c.parameters?.docs?.source}}};const P=["Basic","WithLabelAndHelper","Variants","Sizes","AutoResize","States","FullWidth","LongForm"];export{n as AutoResize,l as Basic,u as FullWidth,c as LongForm,i as Sizes,d as States,o as Variants,s as WithLabelAndHelper,P as __namedExportsOrder,$ as default};
