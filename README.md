# dsh-web-mobile-kimi

**English** | [简体中文](README.zh.md)

Mobile layout fixes for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web UI.

Fork of [AcidGr/dsh-web-mobile-fix](https://github.com/AcidGr/dsh-web-mobile-fix) (MIT), keeping all upstream fixes and adding, on narrow (≤700px viewport) screens:

- **Collapsed sidebar rail fully hidden** — the 56px rail no longer eats the row; the expanded sidebar still floats over the conversation and collapses on tap-outside
- **Floating whale toggle** — a fixed white-circle button (top-left) opens/closes the sidebar; visually paired with the [dsh-mobile](https://github.com/yanJ26/dsh-mobile) Android app's native host-switch button stacked below it
- **User-question card overflow fix** — the `ask_user_question` / plan-review card no longer bleeds past the right viewport edge; footer buttons (skip / confirm) wrap and stay reachable
- **Rail footer plugin buttons stacked vertically** — `sidebar.footer.action` buttons (e.g. disk-browser, bizcard) no longer crush each other in the narrow rail

Upstream fixes kept intact:

- Settings panel becomes a full-screen column layout instead of a squeezed desktop layout
- Directory-picker footer (Cancel / Confirm) pinned to one bottom row
- Sidebar opens full-screen instead of squeezing the conversation
- Settings plugin navigation (4 buttons) fits on a single row
- Session-log button collapses to an icon
- Model name hidden in the composer (chevron only)
- Dropdowns / popups / menus render centered

## How it works

The plugin ships a browser half (`exports["./client"]`, declared via `dsh.client.platform: "web"`), discovered by the client-modules scanner and loaded from the boot manifest. It injects one `<style>` tag with overrides targeting the product's stable `data-slot` / `data-*-collapsed` attributes plus one floating toggle button, and removes both on unload — fully reversible.

## Requirements

- DeepSeek Harness Web profile (`dsh --profile web`), any recent 0.1.x release
- Selectors target product slot contracts; they are stable within a version line but may need small updates after a major product revamp

## Install

```sh
dsh plugin --profile web add github:yanJ26/dsh-web-mobile-kimi
```

If the upstream `dsh-web-mobile-fix` is installed, remove it first — the two manage the same layout and will fight each other:

```sh
dsh plugin --profile web remove dsh-web-mobile-fix
```

Restart `dsh web` (or wait for the profile hot-reload), then hard-refresh the browser.

## Verify

Open the Web UI on a phone-width window — the rail should be gone, a whale button floats top-left and toggles the sidebar; the settings panel, question cards, and popups should be mobile-adapted.

## Rollback

`dsh plugin --profile web remove dsh-web-mobile-kimi`

No product source is modified; upgrades do not overwrite it.

## License

MIT (upstream © AcidGr, additions © yanJ26)
