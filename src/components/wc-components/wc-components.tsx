import { Component } from '@stencil/core';


@Component({
  tag: 'wc-components',
  styleUrl: 'wc-components.scss'
})
export class WcComponents {

  render() {
    return (
      <ion-page class='show-page'>
        <wc-top-toolbar></wc-top-toolbar>
        <ion-content>
          <main>
          <wc-site-menu></wc-site-menu>
          </main>
        </ion-content>
      </ion-page>
    );
  }
}
