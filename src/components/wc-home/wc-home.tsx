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
              Hey welcome to webcomponents.io, you can find several <stencil-route-link url="/components/ionic-core">Components</stencil-route-link> with documentation.
            </h1>
          </main>
          <iframe class="star-button" src="https://ghbtns.com/github-btn.html?user=ajonp&repo=webcomponents.io&type=star&count=true" frameBorder="0" scrolling="0" width="170px" height="20px"></iframe>
        </ion-content>
      </ion-page>
    );
  }
}
