window.__ModuleLoader__.load({
  id: "dsh-web-mobile-kimi",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;

    var CSS = [
      "/* ── mobile UI fixes (≤700px) ── */",
      "@media (max-width: 700px) {",
      "  /* 1. Settings panel: stacked full-screen layout */",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] {",
      "    flex-direction: column !important;",
      "    width: 100vw !important;",
      "    max-width: 100vw !important;",
      "    height: 100vh !important;",
      "    height: 100dvh !important;",
      "    max-height: 100vh !important;",
      "    max-height: 100dvh !important;",
      "    border-radius: 0 !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav {",
      "    flex: none !important;",
      "    flex-direction: column !important;",
      "    width: 100% !important;",
      "    box-sizing: border-box !important;",
      "    padding: 12px 12px 6px !important;",
      "    gap: 8px !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav > div:last-child {",
      "    flex-direction: row !important;",
      "    flex-wrap: nowrap !important;",
      "    gap: 6px !important;",
      "    overflow-x: auto !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav button {",
      "    flex: 0 0 auto !important;",
      "    height: 36px !important;",
      "    padding: 6px 12px !important;",
      "    gap: 6px !important;",
      "    justify-content: center !important;",
      "  }",
      "  /* Keep every tab label visible: the stock label is flex:1 with",
      "        flex-basis 0, which collapses to zero width inside a content-sized",
      "        button; let the text drive the button width instead (0 1 auto). */",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav button > :last-child {",
      "    flex: 0 1 auto !important;",
      "    min-width: 0 !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav button[aria-current=\"true\"] {",
      "    background: var(--dsw-specific-sidebar-nav-item-active, #e8ebf1) !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav + div {",
      "    flex: 1 1 0 !important;",
      "    min-height: 0 !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav + div > div:first-child {",
      "    padding: 12px 12px 6px !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav + div > div:last-child {",
      "    padding: 0 16px 16px !important;",
      "  }",
      "  /* 2. Session log header button: compact icon-only circle */",
      "  [data-slot=\"conversation.session.header.utilities\"] button {",
      "    width: 32px !important;",
      "    min-width: 32px !important;",
      "    height: 32px !important;",
      "    padding: 0 !important;",
      "    border-radius: 50% !important;",
      "    justify-content: center !important;",
      "  }",
      "  [data-slot=\"conversation.session.header.utilities\"] button span {",
      "    position: absolute !important;",
      "    width: 1px !important;",
      "    height: 1px !important;",
      "    margin: -1px !important;",
      "    padding: 0 !important;",
      "    border: 0 !important;",
      "    overflow: hidden !important;",
      "    clip: rect(0 0 0 0) !important;",
      "    white-space: nowrap !important;",
      "  }",
      "  /* 3. Composer model select: hide the model name / effort text, keep the",
      "        chevron; the click still opens the model + effort picker */",
      "  [data-slot=\"conversation.input.model\"] > div > button {",
      "    padding: 0 6px !important;",
      "    gap: 0 !important;",
      "  }",
      "  [data-slot=\"conversation.input.model\"] > div > button > span {",
      "    display: none !important;",
      "  }",
      "  /* 4. Anchored dropdowns → centered popups */",
      "  [data-slot=\"conversation.composer.bar\"] [role=\"menu\"],",
      "  [data-slot=\"conversation.composer.bar\"] [role=\"dialog\"],",
      "  [data-slot=\"conversation.session.header.actions\"] ul[aria-label] {",
      "    position: fixed !important;",
      "    left: 50% !important;",
      "    top: 50% !important;",
      "    right: auto !important;",
      "    bottom: auto !important;",
      "    transform: translate(-50%, -50%) !important;",
      "    min-width: 0 !important;",
      "    max-width: calc(100vw - 32px) !important;",
      "    max-height: min(480px, calc(100dvh - 96px)) !important;",
      "    z-index: 1200 !important;",
      "  }",
      "  /* 5. Hide the session title breadcrumbs in the top bar */",
      "  [data-slot=\"conversation.session.header\"] nav {",
      "    display: none !important;",
      "  }",
      "  /* 6. Directory picker footer: pin Cancel/Open to one stable bottom row */",
      "  [role=\"dialog\"]:has(> div:last-child > button[aria-pressed]) > div:last-child {",
      "    display: grid !important;",
      "    grid-template-columns: minmax(0, 1fr) auto auto !important;",
      "    gap: 8px !important;",
      "    align-items: center !important;",
      "  }",
      "  [role=\"dialog\"]:has(> div:last-child > button[aria-pressed]) > div:last-child > :nth-child(1) {",
      "    grid-area: 1 / 1 !important;",
      "    justify-self: start !important;",
      "  }",
      "  [role=\"dialog\"]:has(> div:last-child > button[aria-pressed]) > div:last-child > :nth-child(2) {",
      "    grid-area: 1 / 2 !important;",
      "    justify-self: start !important;",
      "  }",
      "  [role=\"dialog\"]:has(> div:last-child > button[aria-pressed]) > div:last-child > :nth-child(3) {",
      "    grid-area: 2 / 1 !important;",
      "  }",
      "  [role=\"dialog\"]:has(> div:last-child > button[aria-pressed]) > div:last-child > :nth-child(4) {",
      "    grid-area: 2 / 2 !important;",
      "    justify-self: end !important;",
      "  }",
      "  [role=\"dialog\"]:has(> div:last-child > button[aria-pressed]) > div:last-child > :nth-child(5) {",
      "    grid-area: 2 / 3 !important;",
      "    justify-self: end !important;",
      "  }",
      "  /* 7. Left sidebar on narrow screens: keep the grid fixed at 56px rail in",
      "        BOTH states (center column never moves or squeezes) and let the",
      "        expanded sidebar OVERFLOW its 56px column to float over the center",
      "        (z-index 60 on the grid item) instead of positioning it absolutely.",
      "        No transform is applied: a transform on the sidebar column would",
      "        become the containing block for its position:fixed descendants —",
      "        the settings modal renders inside the sidebar DOM and would be",
      "        trapped/positioned relative to the drawer instead of the viewport.",
      "        The product's own wide-sidebar interactions (rail buttons, search",
      "        focus, settings dialog) keep working natively, and the stock",
      "        wide-content fade-in remains the only animation. */",
      "  [data-details-collapsed] {",
      "    grid-template-columns: 56px minmax(0, 1fr) 0 !important;",
      "  }",
      "  [data-details-collapsed]:not([data-sidebar-collapsed]) > div:first-child {",
      "    overflow: visible !important;",
      "    z-index: 60 !important;",
      "  }",
      "",
      "  /* ── kimi additions (fork) ── */",
      "  /* 8. Collapsed rail fully hidden: the injected whale toggle owns sidebar",
      "        access, so the 56px rail no longer eats the row in the collapsed",
      "        state. The track widths are set inline by the host (AppFrame",
      "        style=gridTemplateColumns) — !important beats the inline style.",
      "        overflow hidden (NOT display:none) so the settings modal, which",
      "        renders inside the sidebar DOM as position:fixed, keeps working;",
      "        overflow never traps fixed descendants (no transform involved). */",
      "  [data-sidebar-collapsed][data-details-collapsed] {",
      "    grid-template-columns: 0 minmax(0, 1fr) 0 !important;",
      "  }",
      "  [data-sidebar-collapsed]:not([data-details-collapsed]) {",
      "    grid-template-columns: 0 minmax(0, 1fr) auto !important;",
      "  }",
      "  [data-sidebar-collapsed] > div:first-child {",
      "    overflow: hidden !important;",
      "    min-width: 0 !important;",
      "  }",
      "  /* 9. User-question composer card (ask_user_question / plan review): on",
      "        narrow screens the card can ride a wider-than-viewport composer",
      "        axis and bleed past the right edge, clipping the footer buttons.",
      "        Clip the conversation column's x axis (clip, not hidden: keeps the",
      "        sticky composer seat's containing-block behavior), cap the frame,",
      "        and let the footer wrap so 跳过本题/确认 stay reachable.",
      "        [data-question-key] is QuestionComposer's stable frame attribute;",
      "        the footer classes are CSS-module hashes that retain their names. */",
      "  [data-conversation-scroll] {",
      "    overflow-x: clip !important;",
      "  }",
      "  [data-question-key] {",
      "    max-width: 100% !important;",
      "    padding-left: 8px !important;",
      "    padding-right: 8px !important;",
      "    box-sizing: border-box !important;",
      "  }",
      "  [data-question-key] > * {",
      "    max-width: 100% !important;",
      "    min-width: 0 !important;",
      "  }",
      "  [data-question-key] [class*=\"footer\"] {",
      "    flex-wrap: wrap !important;",
      "    row-gap: 8px !important;",
      "  }",
      "  /* 10. Rail footer plugin buttons (sidebar.footer.action, e.g. disk-",
      "        browser / bizcard): the host lays them in one horizontal nowrap",
      "        row, so two 36px buttons crush each other in the 56px rail —",
      "        stack them vertically. Only the collapsed rail; the expanded",
      "        sidebar keeps the horizontal row. (On ≤700px the collapsed rail",
      "        is hidden by rule 8, so this serves tablets / desktop rails.) */",
      "  [data-sidebar-collapsed] div:has(> [data-slot=\"sidebar.footer.action\"]) {",
      "    flex-direction: column !important;",
      "    align-items: center !important;",
      "  }",
      "}",
      "",
      "/* ── whale sidebar toggle (kimi addition) ──",
      "   Fixed floating switch for the hidden rail: white circle + dark whale,",
      "   visually paired with the dsh-mobile Android app's native host-switch",
      "   button stacked below it. z-index 70 stays above the floating expanded",
      "   sidebar (60) so it can close the drawer, below the centered popups",
      "   (1200) and modals. */",
      ".dshwm-whale {",
      "  position: fixed;",
      "  left: 10px;",
      "  top: 64px;",
      "  z-index: 70;",
      "  display: none;",
      "  width: 52px;",
      "  height: 52px;",
      "  padding: 0;",
      "  border: 1px solid rgba(0, 0, 0, 0.18);",
      "  border-radius: 50%;",
      "  background: rgba(255, 255, 255, 0.94);",
      "  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.22);",
      "  cursor: pointer;",
      "  place-items: center;",
      "  -webkit-tap-highlight-color: transparent;",
      "}",
      ".dshwm-whale svg {",
      "  width: 30px;",
      "  height: 30px;",
      "  display: block;",
      "}",
      "@media (max-width: 700px) {",
      "  .dshwm-whale {",
      "    display: grid;",
      "  }",
      "}",
    ].join("\n");

    var WHALE_SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><path d=\"M48.8354 10.0479C48.3232 9.79199 48.1025 10.2798 47.8032 10.5278C47.7007 10.6079 47.6143 10.7119 47.5273 10.8076C46.7793 11.624 45.9048 12.1597 44.7622 12.0957C43.0923 12 41.666 12.5356 40.4058 13.8398C40.1377 12.2319 39.2476 11.272 37.8926 10.6558C37.1836 10.3359 36.4668 10.0156 35.9702 9.31982C35.6235 8.82373 35.5293 8.27197 35.356 7.72754C35.2456 7.3999 35.1353 7.06396 34.7651 7.00781C34.3633 6.94385 34.2056 7.2876 34.0479 7.57568C33.418 8.75195 33.1733 10.0479 33.1973 11.3599C33.2524 14.312 34.4736 16.6641 36.8999 18.3359C37.1758 18.5278 37.2466 18.7197 37.1597 19C36.9946 19.5757 36.7974 20.1357 36.624 20.7119C36.5137 21.0801 36.3486 21.1597 35.9624 21C34.6309 20.4321 33.481 19.5918 32.4644 18.5757C30.7393 16.8721 29.1792 14.9917 27.2334 13.52C26.7764 13.1758 26.3193 12.856 25.8467 12.5518C23.8618 10.584 26.1069 8.96777 26.627 8.77588C27.1704 8.57568 26.8159 7.8877 25.0591 7.896C23.3022 7.90381 21.6953 8.50391 19.647 9.30371C19.3477 9.42383 19.0322 9.51172 18.7095 9.58398C16.8501 9.22363 14.9199 9.14355 12.9033 9.37598C9.10596 9.80762 6.07275 11.6396 3.84326 14.7681C1.16455 18.5278 0.53418 22.7998 1.30664 27.2559C2.11768 31.9521 4.46582 35.8398 8.07373 38.8799C11.8159 42.0322 16.1255 43.5762 21.041 43.2803C24.0269 43.104 27.3516 42.6963 31.1016 39.4561C32.0469 39.936 33.0396 40.1279 34.686 40.272C35.9546 40.3921 37.1758 40.208 38.1211 40.0078C39.6021 39.688 39.4995 38.2881 38.9639 38.0322C34.623 35.9678 35.5762 36.8081 34.71 36.1279C36.9155 33.4639 40.2402 30.6958 41.54 21.728C41.6426 21.0161 41.5557 20.5679 41.54 19.9917C41.5322 19.6396 41.6108 19.5039 42.0049 19.4639C43.0923 19.3359 44.1479 19.0317 45.1167 18.4878C47.9292 16.9199 49.064 14.3438 49.3315 11.2559C49.3711 10.7837 49.3237 10.2959 48.8354 10.0479ZM24.3262 37.8398C20.1196 34.4639 18.0791 33.3521 17.2358 33.3999C16.4482 33.4482 16.5898 34.3682 16.7632 34.9678C16.9443 35.5601 17.1812 35.9683 17.5117 36.4878C17.7402 36.832 17.8979 37.3442 17.2832 37.728C15.9282 38.584 13.5728 37.4399 13.4624 37.3838C10.7207 35.7358 8.42822 33.5601 6.81348 30.584C5.25342 27.7197 4.34766 24.6479 4.19775 21.3677C4.1582 20.5757 4.38672 20.2959 5.15869 20.1519C6.17529 19.96 7.22314 19.9199 8.23926 20.0718C12.5327 20.7119 16.1885 22.6719 19.2529 25.7759C21.002 27.5439 22.3252 29.6558 23.6885 31.7202C25.1377 33.9121 26.6978 36 28.6831 37.7119C29.3843 38.312 29.9434 38.7681 30.479 39.104C28.8643 39.2881 26.1699 39.3281 24.3262 37.8398ZM26.3433 24.6001C26.3433 24.248 26.6191 23.9678 26.9658 23.9678C27.0444 23.9678 27.1152 23.9839 27.1782 24.0078C27.2651 24.04 27.3438 24.0879 27.4067 24.1602C27.5171 24.272 27.5801 24.4321 27.5801 24.6001C27.5801 24.9521 27.3042 25.2319 26.9575 25.2319C26.6108 25.2319 26.3433 24.9521 26.3433 24.6001ZM32.6064 27.8799C32.2046 28.0479 31.8027 28.1919 31.4165 28.208C30.8179 28.2397 30.1641 27.9922 29.8096 27.688C29.2583 27.2158 28.8643 26.9521 28.6987 26.1279C28.6279 25.7759 28.6675 25.2319 28.7305 24.9199C28.8721 24.248 28.7144 23.8159 28.2495 23.4238C27.8716 23.104 27.3911 23.0161 26.8633 23.0161C26.666 23.0161 26.4849 22.9277 26.3511 22.856C26.1304 22.7441 25.9492 22.4639 26.1226 22.1201C26.1777 22.0078 26.4458 21.7358 26.5088 21.688C27.2256 21.272 28.0527 21.4077 28.8169 21.7197C29.5259 22.0161 30.0615 22.5601 30.834 23.3281C31.6216 24.2559 31.7632 24.5117 32.2124 25.208C32.5669 25.752 32.8901 26.312 33.1104 26.9521C33.2446 27.3521 33.0713 27.6802 32.6064 27.8799Z\" fill=\"#1f2933\"/></svg>";

    function apply(ctx) {
      var tag = document.createElement("style");
      tag.dataset.plugin = "dsh-web-mobile-kimi";
      tag.textContent = CSS;
      document.head.append(tag);

      /* The layout service is fetched via ctx.get() (optional lookup) because
         direct ctx.layout access is gated behind the plugin's inject
         declaration by the guarded ctx facade — a plain function-form plugin
         has no declaration site, so ctx.layout would throw. */
      var getLayout = function () {
        try {
          return ctx.get ? ctx.get("layout") : void 0;
        } catch (e) {
          return void 0;
        }
      };

      /* Whale toggle (kimi addition): with the collapsed rail hidden on narrow
         viewports, this fixed button is THE sidebar switch — one tap toggles
         the floating expanded sidebar, the same layout-service action as the
         product's own rail button. */
      var whale = document.createElement("button");
      whale.type = "button";
      whale.className = "dshwm-whale";
      whale.setAttribute("aria-label", "切换侧边栏");
      whale.title = "切换侧边栏";
      whale.innerHTML = WHALE_SVG;
      whale.addEventListener("click", function (event) {
        event.stopPropagation();
        var layout = getLayout();
        if (layout && layout.toggleSidebar) layout.toggleSidebar();
      });
      document.body.append(whale);

      /* Tap-outside-to-collapse: on narrow viewports, when the expanded sidebar
         is floating over the center, any click landing outside the sidebar
         column collapses it (same action as the toggle button). Capture phase:
         fires before target handlers and before any stopPropagation, and scroll
         gestures never produce clicks. Clicks inside the sidebar (including the
         settings dialog, which renders inside the sidebar DOM) and on the
         whale toggle are ignored — the whale is outside the sidebar column, so
         without the exclusion one tap would toggle twice (capture + click). */
      var onCaptureClick = function (event) {
        if (window.innerWidth > 768) return;
        if (whale.contains(event.target)) return;
        var frame = document.querySelector("[data-details-collapsed]");
        if (!frame || frame.hasAttribute("data-sidebar-collapsed")) return;
        var sidebarCol = frame.firstElementChild;
        if (!sidebarCol || sidebarCol.contains(event.target)) return;
        var layout = getLayout();
        if (layout && layout.toggleSidebar) layout.toggleSidebar();
      };
      document.addEventListener("click", onCaptureClick, true);

      ctx.effect(function () {
        return function () {
          tag.remove();
          whale.remove();
          document.removeEventListener("click", onCaptureClick, true);
        };
      });
    }

    exports.apply = apply;
    return module.exports;
  }
});
