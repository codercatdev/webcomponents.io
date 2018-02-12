import { Component } from '@stencil/core';


@Component({
  tag: 'wc-app',
  styleUrl: 'wc-app.scss'
})
export class WcApp {

  render() {
    return (
      <ion-app>
        <div id="main-div">
          <div class="app">
            <stencil-router>
              <stencil-route url='/' component='wc-home' exact={true}>
              </stencil-route>
              <stencil-route
                url="/components/:pageName"
                routeRender={(props: { [key: string]: any }) => {
                  const map = {
                    'ionic-core': 'ionic-core/ionic-core.html',
                    'ion-action-sheet': 'ionic-core/ion-action-sheet.html',
                    'ion-action-sheet-controller': 'ionic-core/ion-action-sheet-controller.html',
                    'ion-alert-controller': 'ionic-core/ion-alert-controller.html',
                    'ion-alert': 'ionic-core/ion-alert.html',
                    'ion-animation-controller': 'ionic-core/ion-animation-controller.html',
                    'ion-app': 'ionic-core/ion-app.html',
                    'ion-avatar': 'ionic-core/ion-avatar.html',
                    'ion-backdrop': 'ionic-core/ion-backdrop.html',
                    'ion-badge': 'ionic-core/ion-badge.html',
                    'ion-button': 'ionic-core/ion-button.html',
                    'ion-buttons': 'ionic-core/ion-buttons.html',
                    'ion-card-content': 'ionic-core/ion-card-content.html',
                    'ion-card-header': 'ionic-core/ion-card-header.html',
                    'ion-card-subtitle': 'ionic-core/ion-card-subtitle.html',
                    'ion-card-title': 'ionic-core/ion-card-title.html',
                    'ion-card': 'ionic-core/ion-card.html',
                    'ion-checkbox': 'ionic-core/ion-checkbox.html',
                    'ion-chip-button': 'ionic-core/ion-chip-button.html',
                    'ion-chip': 'ionic-core/ion-chip.html',
                    'ion-col': 'ionic-core/ion-col.html',
                    'ion-content': 'ionic-core/ion-content.html',
                    'ion-datetime': 'ionic-core/ion-datetime.html',
                    'ion-fab-button': 'ionic-core/ion-fab-button.html',
                    'ion-fab-list': 'ionic-core/ion-fab-list.html',
                    'ion-fab': 'ionic-core/ion-fab.html',
                    'ion-footer': 'ionic-core/ion-footer.html',
                    'ion-gesture-controller': 'ionic-core/ion-gesture-controller.html',
                    'ion-gesture': 'ionic-core/ion-gesture.html',
                    'ion-grid': 'ionic-core/ion-grid.html',
                    'ion-header': 'ionic-core/ion-header.html',
                    'ion-icon': 'ionic-core/ion-icon.html',
                    'ion-infinite-scroll-content': 'ionic-core/ion-infinite-scroll-content.html',
                    'ion-infinite-scroll': 'ionic-core/ion-infinite-scroll.html',
                    'ion-input': 'ionic-core/ion-input.html',
                    'ion-item-divider': 'ionic-core/ion-item-divider.html',
                    'ion-item-option': 'ionic-core/ion-item-option.html',
                    'ion-item-options': 'ionic-core/ion-item-options.html',
                    'ion-item-sliding': 'ionic-core/ion-item-sliding.html',
                    'ion-item': 'ionic-core/ion-item.html',
                    'ion-keyboard-controller': 'ionic-core/ion-keyboard-controller.html',
                    'ion-label': 'ionic-core/ion-label.html',
                    'ion-list-header': 'ionic-core/ion-list-header.html',
                    'ion-list': 'ionic-core/ion-list.html',
                    'ion-loading-controller': 'ionic-core/ion-loading-controller.html',
                    'ion-loading': 'ionic-core/ion-loading.html',
                    'ion-menu-controller': 'ionic-core/ion-menu-controller.html',
                    'ion-menu': 'ionic-core/ion-menu.html',
                    'ion-modal-controller': 'ionic-core/ion-modal-controller.html',
                    'ion-modal': 'ionic-core/ion-modal.html',
                    'ion-nav': 'ionic-core/ion-nav.html',
                    'ion-navbar': 'ionic-core/ion-navbar.html',
                    'ion-note': 'ionic-core/ion-note.html',
                    'ion-page': 'ionic-core/ion-page.html',
                    'ion-picker-column': 'ionic-core/ion-picker-column.html',
                    'ion-picker-controller': 'ionic-core/ion-picker-controller.html',
                    'ion-picker': 'ionic-core/ion-picker.html',
                    'ion-popover-controller': 'ionic-core/ion-popover-controller.html',
                    'ion-popover': 'ionic-core/ion-popover.html',
                    'ion-radio-group': 'ionic-core/ion-radio-group.html',
                    'ion-radio': 'ionic-core/ion-radio.html',
                    'ion-range-knob': 'ionic-core/ion-range-knob.html',
                    'ion-range': 'ionic-core/ion-range.html',
                    'ion-reorder-group': 'ionic-core/ion-reorder-group.html',
                    'ion-reorder': 'ionic-core/ion-reorder.html',
                    'ion-route-link': 'ionic-core/ion-route-link.html',
                    'ion-route': 'ionic-core/ion-route.html',
                    'ion-router-controller': 'ionic-core/ion-router-controller.html',
                    'ion-row': 'ionic-core/ion-row.html',
                    'ion-scroll': 'ionic-core/ion-scroll.html',
                    'ion-searchbar': 'ionic-core/ion-searchbar.html',
                    'ion-segment-button': 'ionic-core/ion-segment-button.html',
                    'ion-segment': 'ionic-core/ion-segment.html',
                    'ion-select-option': 'ionic-core/ion-select-option.html',
                    'ion-select-popover': 'ionic-core/ion-select-popover.html',
                    'ion-select': 'ionic-core/ion-select.html',
                    'ion-skeleton-text': 'ionic-core/ion-skeleton-text.html',
                    'ion-slide': 'ionic-core/ion-slide.html',
                    'ion-slides': 'ionic-core/ion-slides.html',
                    'ion-spinner': 'ionic-core/ion-spinner.html',
                    'ion-split-pane': 'ionic-core/ion-split-pane.html',
                    'ion-tab-button': 'ionic-core/ion-tab-button.html',
                    'ion-tab': 'ionic-core/ion-tab.html',
                    'ion-tabbar': 'ionic-core/ion-tabbar.html',
                    'ion-tabs': 'ionic-core/ion-tabs.html',
                    'ion-textarea': 'ionic-core/ion-textarea.html',
                    'ion-thumbnail': 'ionic-core/ion-thumbnail.html',
                    'ion-title': 'ionic-core/ion-title.html',
                    'ion-toast-controller': 'ionic-core/ion-toast-controller.html',
                    'ion-toast': 'ionic-core/ion-toast.html',
                    'ion-toggle': 'ionic-core/ion-toggle.html',
                    'ion-toolbar': 'ionic-core/ion-toolbar.html',
                    'ion-util': 'ionic-core/ion-util.html',
                  };
                  return (
                    <wc-components
                      pages={[map[props.match.params.pageName]]}
                    />
                  );
                }}
              />
            </stencil-router>
          </div>
        </div>
      </ion-app>
    );
  }
}
