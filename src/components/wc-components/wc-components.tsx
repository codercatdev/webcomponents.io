import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wc-components',
  styleUrl: 'wc-components.scss'
})
export class WcComponents {
  @Prop() pages: string[] = [];
  @Prop() examples: string[] = [];
  public myheight = {
    height: "100vh"
  }
  render() {
    return (
      <ion-page class='show-page'>
        <wc-top-toolbar></wc-top-toolbar>
        <ion-content>
          <ion-grid>
            <ion-row>
              <ion-col col-2>
                <div style={this.myheight}>
                  <ion-scroll>
                    <wc-site-menu></wc-site-menu>
                  </ion-scroll>
                </div>
              </ion-col>
              <ion-col col-10>
                <ion-row>
                  <ion-col>
                    {this.pages.map(page => <app-marked doc={page} />)}
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col>
                    <ion-card>
                      <ion-card-header>Example</ion-card-header>
                      <ion-card-content>
                        {this.examples.map(example => <wc-example-code doc={example} />)}
                      </ion-card-content>
                    </ion-card>
                  </ion-col>
                </ion-row>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
      </ion-page>
    );
  }
}
