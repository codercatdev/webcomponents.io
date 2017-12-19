import { Component } from '@stencil/core';


@Component({
  tag: 'wc-top-toolbar',
  styleUrl: 'wc-top-toolbar.scss'
})
export class WcTopToolbar {

  render() {
    return (
      <ion-toolbar color='primary'>

        <stencil-route-link url='/'>
          <ion-title>Webcomponents.io</ion-title>
        </stencil-route-link>

        <ion-buttons slot='end'>
          <stencil-route-link url='/components/ionic-core'>
            <ion-button>
              Components
            </ion-button>
          </stencil-route-link>
        </ion-buttons>
      </ion-toolbar>
    );
  }
}
