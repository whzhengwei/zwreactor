# Cloudflare Pages 配置说明

**站点：** https://zhengweireactor.com
**部署方式：** 手动上传（直接上传 zip，无需 GitHub Actions）

---

## 当前配置状态

| 项目 | 状态 |
|------|------|
| 域名 zhengweireactor.com | ✅ 已绑定 |
| SSL 证书 | ✅ Cloudflare 自动签发 |
| 站点项目 | Cloudflare Pages → 已创建 |
| GitHub Actions | ❌ 未使用（采用直接上传方式） |

---

## 手动部署步骤

1. 登录 https://dash.cloudflare.com
2. **Workers & Pages** → **Create** → **Pages** → **Upload assets manually**
3. 选择 `F:\zw` 文件夹的压缩文件（排除 `.git` 目录）
4. 构建命令留空，输出目录填 `./`
5. 点击 **Deploy site**

每次更新内容后重复上述步骤即可。

---

## 域名与 DNS

Cloudflare Dashboard → **DNS** → **Records**：

| 类型 | 名称 | 内容 | TTL |
|------|------|------|-----|
| CNAME | www | `*.pages.dev` 分配的域名 | Auto |
| A | @ | Cloudflare 提供的 IP（或 CNAME 到 pages.dev） | Auto |

SSL/TLS 模式建议设为 **Full** 或 **Full (strict)**。

---

## 备用方案：Git 自动部署

如需改为 Git 触发自动部署，可参考原 GitHub Workflow：

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: zhengwei-machinery
          directory: .
```

需配置的 Secrets：
- `CLOUDFLARE_API_TOKEN` — Cloudflare API Token（Pages Edit 权限）
- `CLOUDFLARE_ACCOUNT_ID` — Cloudflare Account ID

> ⚠️ 当前采用直接上传方式，此 workflow 仅作参考，暂不启用。

---

## 验证部署

- Cloudflare Pages：https://dash.cloudflare.com/pages → 查看部署日志
- 网站访问：https://zhengweireactor.com
- Sitemap：https://zhengweireactor.com/sitemap.xml（31 个 URL）
