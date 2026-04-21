# Pinequest S3 E2 Update

`apps` дотор тусдаа project-ууд байрлах PNPM monorepo.

## Бүтэц

```txt
.github/
  workflows/
apps/
  api/
  web/
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
README.md
```

## Ажиллуулах

```bash
pnpm install
pnpm dev
```

Зөвхөн нэг app ажиллуулах бол:

```bash
pnpm --filter api dev
pnpm --filter web dev
```

Шинэ project нэмэхдээ `apps/<project-name>` дотор `package.json` үүсгэнэ.
