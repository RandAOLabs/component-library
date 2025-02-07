import{j as t}from"./jsx-runtime-SKoiH9zj.js";import{T as o}from"./Tooltip-Btu6z7YV.js";import"./index-DJO9vBfz.js";const m={title:"Components/Tooltip",component:o,parameters:{layout:"centered",docs:{description:{component:"A tooltip component that displays content on hover."}}},tags:["autodocs"],argTypes:{content:{control:"text",description:"The content to display in the tooltip"},position:{control:"select",options:["top","right","bottom","left"],description:"The position of the tooltip relative to its trigger"},children:{control:"text",description:"The trigger element that shows the tooltip on hover"}}},p=()=>t.jsx("button",{style:{padding:"0.5rem 1rem"},children:"Hover me"}),n={args:{content:"This is a tooltip",children:t.jsx(p,{})}},r={args:{content:"Tooltip content",children:t.jsx(p,{})},render:e=>t.jsxs("div",{style:{display:"inline-grid",gridTemplateColumns:"repeat(3, auto)",gap:"2rem",alignItems:"center",justifyItems:"center"},children:[t.jsx("div",{}),t.jsx(o,{...e,position:"top",children:t.jsx("button",{style:{padding:"0.5rem 1rem"},children:"Top"})}),t.jsx("div",{}),t.jsx(o,{...e,position:"left",children:t.jsx("button",{style:{padding:"0.5rem 1rem"},children:"Left"})}),t.jsx("div",{style:{padding:"1rem"},children:"Hover the buttons"}),t.jsx(o,{...e,position:"right",children:t.jsx("button",{style:{padding:"0.5rem 1rem"},children:"Right"})}),t.jsx("div",{}),t.jsx(o,{...e,position:"bottom",children:t.jsx("button",{style:{padding:"0.5rem 1rem"},children:"Bottom"})}),t.jsx("div",{})]})},i={args:{content:"This is a longer tooltip message that demonstrates how the component handles multiple lines of text. It automatically wraps and sizes the tooltip appropriately.",position:"right",children:t.jsx("button",{style:{padding:"0.5rem 1rem"},children:"Hover for long content"})}},s={args:{content:"Custom trigger element",position:"top",children:t.jsx(p,{})},render:e=>t.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[t.jsx(o,{...e,children:t.jsx("div",{style:{padding:"1rem",background:"linear-gradient(45deg, #ff6b6b, #feca57)",borderRadius:"8px",color:"white",cursor:"pointer"},children:"Custom Element"})}),t.jsx(o,{...e,content:"Icon tooltip",children:t.jsx("span",{style:{fontSize:"24px",cursor:"pointer"},children:"🎯"})}),t.jsx(o,{...e,content:"Image tooltip",children:t.jsx("img",{src:"https://via.placeholder.com/40",alt:"Placeholder",style:{borderRadius:"50%",cursor:"pointer"}})})]})},a={args:{content:"Try changing my position!",position:"top",children:t.jsx("button",{style:{padding:"0.5rem 1rem"},children:"Interactive Example"})},parameters:{docs:{description:{story:"Experiment with different positions and content to see how the tooltip behaves."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    children: <DefaultButton />
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip content',
    children: <DefaultButton />
  },
  render: args => <div style={{
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(3, auto)',
    gap: '2rem',
    alignItems: 'center',
    justifyItems: 'center'
  }}>
            <div />
            <Tooltip {...args} position="top">
                <button style={{
        padding: '0.5rem 1rem'
      }}>Top</button>
            </Tooltip>
            <div />
            <Tooltip {...args} position="left">
                <button style={{
        padding: '0.5rem 1rem'
      }}>Left</button>
            </Tooltip>
            <div style={{
      padding: '1rem'
    }}>
                Hover the buttons
            </div>
            <Tooltip {...args} position="right">
                <button style={{
        padding: '0.5rem 1rem'
      }}>Right</button>
            </Tooltip>
            <div />
            <Tooltip {...args} position="bottom">
                <button style={{
        padding: '0.5rem 1rem'
      }}>Bottom</button>
            </Tooltip>
            <div />
        </div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is a longer tooltip message that demonstrates how the component handles multiple lines of text. It automatically wraps and sizes the tooltip appropriately.',
    position: 'right',
    children: <button style={{
      padding: '0.5rem 1rem'
    }}>Hover for long content</button>
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Custom trigger element',
    position: 'top',
    children: <DefaultButton />
  },
  render: args => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
            <Tooltip {...args}>
                <div style={{
        padding: '1rem',
        background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
        borderRadius: '8px',
        color: 'white',
        cursor: 'pointer'
      }}>
                    Custom Element
                </div>
            </Tooltip>
            <Tooltip {...args} content="Icon tooltip">
                <span style={{
        fontSize: '24px',
        cursor: 'pointer'
      }}>
                    🎯
                </span>
            </Tooltip>
            <Tooltip {...args} content="Image tooltip">
                <img src="https://via.placeholder.com/40" alt="Placeholder" style={{
        borderRadius: '50%',
        cursor: 'pointer'
      }} />
            </Tooltip>
        </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Try changing my position!',
    position: 'top',
    children: <button style={{
      padding: '0.5rem 1rem'
    }}>Interactive Example</button>
  },
  parameters: {
    docs: {
      description: {
        story: 'Experiment with different positions and content to see how the tooltip behaves.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const g=["Basic","Positions","LongContent","CustomTrigger","Interactive"];export{n as Basic,s as CustomTrigger,a as Interactive,i as LongContent,r as Positions,g as __namedExportsOrder,m as default};
