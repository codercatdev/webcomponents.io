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
                  'action-sheet-controller': 'ionic-core/action-sheet-controller.html',
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
