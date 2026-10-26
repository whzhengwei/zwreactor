# Cloudflare Pages 部署说明

## 已配置的自动化部署

GitHub 推送 `main` 分支时，会自动部署到 Cloudflare Pages。

## GitHub Secrets 设置

需要在 GitHub 仓库设置中添加以下 Secrets：

1. 进入仓库 → **Settings** → **Secrets and variables** → **Actions**
2. 点击 **New repository secret**，添加：

| Secret 名称 | 值 | 说明 |
|-------------|-----|------|
| `CLOUDFLARE_API_TOKEN` | 你的 API Token | Cloudflare API Token（需 Pages Edit 权限）|
| `CLOUDFLARE_ACCOUNT_ID` | 你的 Account ID | Cloudflare 账户 ID |

### 获取 Account ID
- 登录 Cloudflare Dashboard
- 点击右上角账户图标 → **Account ID**
- 或在 URL 中看到：`dash.cloudflare.com/<account-id>/...`

### 创建 API Token
1. https://dash.cloudflare.com/profile/api-tokens
2. **Create Token** → **Custom Token**
3. Token name: `Cloudflare Pages Deploy`
4. Permissions:
   - **Account** → **Cloudflare Pages** → **Edit**
5. **Continue to summary** → **Create Token**

## 部署流程

```
git push origin main
    ↓
GitHub Actions 自动触发
    ↓
部署到 Cloudflare Pages
    ↓
访问 https://zhengwei-machinery.pages.dev
```

## 手动触发

在 GitHub Actions 页面点击 **Run workflow** 即可手动部署。

## 验证部署状态

- GitHub Actions: https://github.com/whzhengwei/zw/actions
- Cloudflare Pages: https://dash.cloudflare.com/pages/view/zhengwei-machinery
