# dsh-web-mobile-kimi

[English](README.md) | **简体中文**

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web UI 的移动端布局修复插件。

Fork 自 [AcidGr/dsh-web-mobile-fix](https://github.com/AcidGr/dsh-web-mobile-fix)（MIT），保留上游全部修复，并在窄屏（视口 ≤700px）下追加：

- **收起态侧边栏彻底隐藏**：56px 常驻栏不再占行；展开时侧边栏照旧悬浮在对话区之上，点击外部收起
- **悬浮鲸鱼开关**：左上角白底圆形按钮，点按展开/收起侧边栏；与 [dsh-mobile](https://github.com/yanJ26/dsh-mobile) 安卓 app 叠在其下方的原生切主机按钮同一视觉语言
- **交互提问卡片溢出修复**：`ask_user_question` / 计划评审卡片不再超出视口右缘，底部按钮（跳过本题 / 确认）可换行、完整可达
- **窄栏底部插件按钮纵向排列**：`sidebar.footer.action` 槽位的按钮（如文件夹、名片插件）在窄栏里不再互相挤压

保留的上游修复：

- 设置面板改为全屏纵向布局，不再被挤成桌面布局
- 目录选择器底部（取消/确定）固定在同一个底部行
- 侧边栏打开时全屏显示，不再挤压对话区
- 设置页插件导航（4 个按钮）单行排满
- 会话日志按钮收成图标
- 输入框模型名隐藏（只留下拉箭头）
- 下拉菜单/弹层/菜单居中显示

## 工作原理

插件带一个浏览器端（`exports["./client"]`，通过 `dsh.client.platform: "web"` 声明），由 client-modules 扫描器发现并随启动清单加载。它注入一个 `<style>` 标签（针对产品稳定 `data-slot` / `data-*-collapsed` 属性的覆盖）和一个悬浮切换按钮；插件卸载时两者自动移除——完全可逆。

## 兼容性

- 需要 Harness Web profile（`dsh --profile web`），0.1.x 系列均可
- 选择器针对产品槽位契约，同版本线内稳定；产品大改版后可能需要小幅调整

## 安装

```sh
dsh plugin --profile web add github:yanJ26/dsh-web-mobile-kimi
```

如已安装上游 `dsh-web-mobile-fix`，请先卸载——两者管同一块布局，会互相冲突：

```sh
dsh plugin --profile web remove dsh-web-mobile-fix
```

重启 `dsh web`（或等 profile 热加载），浏览器硬刷新即可。

## 验证

用手机宽度窗口打开 Web UI——常驻栏应已消失，左上角出现鲸鱼按钮可开关侧边栏；设置面板、提问卡片、弹层应已适配移动端。

## 回滚

`dsh plugin --profile web remove dsh-web-mobile-kimi`

不修改任何产品源码，升级不覆盖、无残留。

## 许可证

MIT（上游 © AcidGr，新增部分 © yanJ26）
