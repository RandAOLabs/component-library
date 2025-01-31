Component Library

# Component Library - v0.0.9

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

[src/components/Button/Button.tsx:27](https://github.com/RandAOLabs/component-library/blob/a5627d44bc832c1c1d7724ac395996e0caaa7f84/src/components/Button/Button.tsx#L27)
