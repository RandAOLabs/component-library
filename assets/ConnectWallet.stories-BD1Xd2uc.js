import{j as u}from"./jsx-runtime-SKoiH9zj.js";import{B as g}from"./Button-CsbVqtWb.js";import{r as a}from"./index-DJO9vBfz.js";import"./ThemeProvider-DaJaB1Hs.js";import"./Spinner-DnEpM9Tv.js";const C=a.createContext(void 0),x=({children:e})=>{const[m,o]=a.useState(!1),[p,r]=a.useState(null),n=a.useCallback(async()=>{if(window.arweaveWallet)try{const t=await window.arweaveWallet.getActiveAddress();t&&(o(!0),r(t))}catch(t){console.error("Error checking wallet connection:",t)}},[]),f=async()=>{if(window.arweaveWallet)try{await window.arweaveWallet.connect(["ACCESS_ADDRESS","SIGN_TRANSACTION"]),await n()}catch(t){console.error("Error connecting wallet:",t)}else console.warn("Arweave wallet extension not found")},h=()=>{o(!1),r(null)};a.useEffect(()=>{n()},[n]);const w={isConnected:m,address:p,connect:f,disconnect:h};return u.jsx(C.Provider,{value:w,children:e})},v=()=>{const e=a.useContext(C);if(e===void 0)throw new Error("useWallet must be used within a WalletProvider");return e};x.__docgenInfo={description:`Provider component that manages wallet connection state and provides
wallet-related functionality to child components.`,methods:[],displayName:"WalletProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const y=e=>e.length<6?e:`${e.slice(0,3)}...${e.slice(-3)}`,W=({connectText:e="Connect Wallet",formatAddress:m=y,variant:o="primary",...p})=>{const{isConnected:r,address:n,connect:f,disconnect:h}=v(),w=async()=>{r?h():await f()},t=r&&n?m(n):e;return u.jsx(g,{...p,variant:o,onClick:w,children:t})};W.__docgenInfo={description:`ConnectWallet component that extends the base Button component with wallet connection functionality.
Must be used within a WalletProvider component.`,methods:[],displayName:"ConnectWallet",props:{connectText:{required:!1,tsType:{name:"string"},description:`Text to show when wallet is not connected
@default "Connect Wallet"`,defaultValue:{value:"'Connect Wallet'",computed:!1}},formatAddress:{required:!1,tsType:{name:"signature",type:"function",raw:"(address: string) => string",signature:{arguments:[{type:{name:"string"},name:"address"}],return:{name:"string"}}},description:`Custom function to format the displayed address
@param address The full wallet address
@returns Formatted address string (default: shows first 3 and last 3 characters)`,defaultValue:{value:"(address: string) => {\n    if (address.length < 6) return address;\n    return `${address.slice(0, 3)}...${address.slice(-3)}`;\n}",computed:!1}},variant:{defaultValue:{value:"'primary'",computed:!1},required:!1}},composes:["Omit"]};const S={title:"Components/ConnectWallet",component:W,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>u.jsx(x,{children:u.jsx(e,{})})]},s={args:{}},c={args:{connectText:"Connect ArWeave"}},l={args:{variant:"outline",size:"large"}},d={args:{formatAddress:e=>`${e.slice(0,4)}...${e.slice(-4)}`}},i={parameters:{docs:{description:{component:`
# Connect Wallet Button

A button component that handles wallet connection and displays the connected wallet's address.

## Features

- Extends the base Button component functionality
- Integrates with WalletProvider context
- Displays truncated wallet address when connected (first 3 and last 3 characters)
- Customizable text and address formatting
- Theme-aware with all button variants

## Usage

First, wrap your app with the WalletProvider:

\`\`\`tsx
import { WalletProvider } from '@randaotoken/component-library';

function App() {
    return (
        <WalletProvider>
            <YourApp />
        </WalletProvider>
    );
}
\`\`\`

Then use the ConnectWallet component:

\`\`\`tsx
import { ConnectWallet } from '@randaotoken/component-library';

function YourComponent() {
    return (
        <ConnectWallet
            connectText="Connect Wallet"
            variant="primary"
            size="medium"
            formatAddress={(address) => \`\${address.slice(0, 3)}...\${address.slice(-3)}\`}
        />
    );
}
\`\`\`

## Props

Extends all Button props except \`onClick\`, plus:

- \`connectText\`: Text to show when wallet is not connected
- \`formatAddress\`: Function to customize how the address is displayed (default: shows first 3 and last 3 characters)
                `}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    connectText: 'Connect ArWeave'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'large'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  args: {\n    formatAddress: address => `${address.slice(0, 4)}...${address.slice(-4)}`\n  }\n}",...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        component: \`
# Connect Wallet Button

A button component that handles wallet connection and displays the connected wallet's address.

## Features

- Extends the base Button component functionality
- Integrates with WalletProvider context
- Displays truncated wallet address when connected (first 3 and last 3 characters)
- Customizable text and address formatting
- Theme-aware with all button variants

## Usage

First, wrap your app with the WalletProvider:

\\\`\\\`\\\`tsx
import { WalletProvider } from '@randaotoken/component-library';

function App() {
    return (
        <WalletProvider>
            <YourApp />
        </WalletProvider>
    );
}
\\\`\\\`\\\`

Then use the ConnectWallet component:

\\\`\\\`\\\`tsx
import { ConnectWallet } from '@randaotoken/component-library';

function YourComponent() {
    return (
        <ConnectWallet
            connectText="Connect Wallet"
            variant="primary"
            size="medium"
            formatAddress={(address) => \\\`\\\${address.slice(0, 3)}...\\\${address.slice(-3)}\\\`}
        />
    );
}
\\\`\\\`\\\`

## Props

Extends all Button props except \\\`onClick\\\`, plus:

- \\\`connectText\\\`: Text to show when wallet is not connected
- \\\`formatAddress\\\`: Function to customize how the address is displayed (default: shows first 3 and last 3 characters)
                \`
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const $=["Default","CustomText","CustomVariant","CustomAddressFormat","Documentation"];export{d as CustomAddressFormat,c as CustomText,l as CustomVariant,s as Default,i as Documentation,$ as __namedExportsOrder,S as default};
