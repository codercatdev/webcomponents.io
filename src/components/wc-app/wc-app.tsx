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

              <stencil-route url='/components/:name' component='wc-components'>
              </stencil-route>
            </stencil-router>
          </div>
        </div>
      </ion-app>
    );
  }
}
