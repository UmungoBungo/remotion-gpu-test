# Remotion gpu render tester

[Remotion documentation on GPU use](https://www.remotion.dev/docs/gpu)

> GPU-accelerated CSS properties such as box-shadow, text-shadow, background-image: linear-gradient(), background-image: radial-gradient(), filter: blur(), filter: drop-shadow()

This repo makes use of
- box-shadow
- text-shadow
- background-image: linear-gradient()
- filter: blur()
- filter: drop-shadow()

This also makes use of react-three-fiber for a 3d scene.

## Commands

**Install Dependencies**

```console
pnpm i
```

**Start Preview**

```console
pnpm start
```

**Render video without GPU, using swangle**

```console
pnpm render-swangle
```

**Render video w/GPU, using angle**

```console
pnpm render-angle
```
