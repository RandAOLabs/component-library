import{j as r}from"./jsx-runtime-SKoiH9zj.js";import{S as e}from"./Spinner-DnEpM9Tv.js";import"./index-DJO9vBfz.js";const p={title:"Components/Spinner",component:e,parameters:{layout:"centered",docs:{description:{component:"A loading spinner component with customizable size and color."}}},tags:["autodocs"],argTypes:{size:{control:"number",description:"The size of the spinner in pixels"},color:{control:"color",description:"The color of the spinner"},className:{control:"text",description:"Additional CSS classes to apply"}}},o={args:{size:24}},s={render:()=>r.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[r.jsx(e,{size:16}),r.jsx(e,{size:24}),r.jsx(e,{size:32}),r.jsx(e,{size:48})]})},n={render:()=>r.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center",padding:"1rem",background:"var(--color-background)",borderRadius:"8px"},children:[r.jsx(e,{size:24,color:"var(--color-primary)"}),r.jsx(e,{size:24,color:"#ff6b6b"}),r.jsx(e,{size:24,color:"#4ecdc4"}),r.jsx(e,{size:24,color:"#ffd93d"})]})},a={render:()=>r.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[r.jsx("div",{style:{padding:"2rem",background:"var(--color-primary)",borderRadius:"8px"},children:r.jsx(e,{size:24,color:"white"})}),r.jsx("div",{style:{padding:"2rem",background:"#2c3e50",borderRadius:"8px"},children:r.jsx(e,{size:24,color:"#ecf0f1"})})]})},i={render:()=>r.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[r.jsxs("button",{style:{padding:"0.5rem 1rem",display:"flex",alignItems:"center",gap:"0.5rem",background:"var(--color-primary)",border:"none",borderRadius:"4px",color:"white",cursor:"not-allowed"},disabled:!0,children:[r.jsx(e,{size:16,color:"currentColor"}),"Loading..."]}),r.jsxs("div",{style:{padding:"2rem",background:"var(--color-background)",border:"1px solid var(--color-border)",borderRadius:"8px",display:"flex",alignItems:"center",gap:"0.5rem"},children:[r.jsx(e,{size:20}),"Loading content..."]})]})},d={args:{size:24,color:"var(--color-primary)"},parameters:{docs:{description:{story:"Try adjusting the size and color to see how the spinner changes."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 24
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  }}>
            <Spinner size={16} />
            <Spinner size={24} />
            <Spinner size={32} />
            <Spinner size={48} />
        </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    padding: '1rem',
    background: 'var(--color-background)',
    borderRadius: '8px'
  }}>
            <Spinner size={24} color="var(--color-primary)" />
            <Spinner size={24} color="#ff6b6b" />
            <Spinner size={24} color="#4ecdc4" />
            <Spinner size={24} color="#ffd93d" />
        </div>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
            <div style={{
      padding: '2rem',
      background: 'var(--color-primary)',
      borderRadius: '8px'
    }}>
                <Spinner size={24} color="white" />
            </div>
            <div style={{
      padding: '2rem',
      background: '#2c3e50',
      borderRadius: '8px'
    }}>
                <Spinner size={24} color="#ecf0f1" />
            </div>
        </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
            <button style={{
      padding: '0.5rem 1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'var(--color-primary)',
      border: 'none',
      borderRadius: '4px',
      color: 'white',
      cursor: 'not-allowed'
    }} disabled>
                <Spinner size={16} color="currentColor" />
                Loading...
            </button>
            <div style={{
      padding: '2rem',
      background: 'var(--color-background)',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
                <Spinner size={20} />
                Loading content...
            </div>
        </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 24,
    color: 'var(--color-primary)'
  },
  parameters: {
    docs: {
      description: {
        story: 'Try adjusting the size and color to see how the spinner changes.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const m=["Basic","Sizes","Colors","WithBackground","InContext","Interactive"];export{o as Basic,n as Colors,i as InContext,d as Interactive,s as Sizes,a as WithBackground,m as __namedExportsOrder,p as default};
