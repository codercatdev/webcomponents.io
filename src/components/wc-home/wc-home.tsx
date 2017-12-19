import { Component } from '@stencil/core';


@Component({
  tag: 'wc-home',
  styleUrl: 'wc-home.scss'
})
export class WcHome {

  render() {
    return (
      <ion-page class='show-page'>
        <wc-top-toolbar></wc-top-toolbar>
        <ion-content>
          <main>
            <h1 id="action-call">
              Hey welcome to webcomponents.io, you can find several components with documentation.
            </h1>
          </main>
        </ion-content>
      </ion-page>
    );
  }
}
