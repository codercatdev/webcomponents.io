import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'wc-components',
  styleUrl: 'wc-components.scss'
})
export class WcComponents {
  @Prop() match: MatchResults;
  render() {
    return (
      <ion-page class='show-page'>
        <wc-top-toolbar></wc-top-toolbar>
        <ion-content>
          <main>
          <wc-site-menu></wc-site-menu>
          <h1>{this.match.params.name}</h1>
          </main>
        </ion-content>
      </ion-page>
    );
  }
}
