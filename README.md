Component Library

# Component Library - v0.0.8

Component Library
A modern React component library with TypeScript support

## Table of contents

### Interfaces

- [ButtonProps](interfaces/ButtonProps.md)

### Functions

- [Button](README.md#button)

## Functions

### Button

▸ **Button**(`props`, `deprecatedLegacyContext?`): `ReactNode`

A customizable button component with different variants

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ButtonProps`](interfaces/ButtonProps.md) | - |
| `deprecatedLegacyContext?` | `any` | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

**`Example`**

```tsx
<Button variant="primary" onClick={() => console.log('clicked')}>
  Click me
</Button>
```

#### Defined in

[src/components/Button/Button.tsx:27](https://github.com/RandAOLabs/component-library/blob/4e3797d84adbb477dc72b653e51f1bf36f1c40c3/src/components/Button/Button.tsx#L27)
