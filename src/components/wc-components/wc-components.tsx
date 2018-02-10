import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wc-components',
  styleUrl: 'wc-components.scss'
})
export class WcComponents {
  @Prop() pages: string[] = [];
  render() {
    return (
      <ion-page class='show-page'>
        <wc-top-toolbar></wc-top-toolbar>
        <ion-content>
          <wc-site-menu></wc-site-menu>
          <ion-grid>
            <ion-row>
              <ion-col col-2>
              </ion-col>
              <ion-col col-10>
                {this.pages.map(page => <app-marked doc={page} />)}
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
      </ion-page>
    );
  }
}
