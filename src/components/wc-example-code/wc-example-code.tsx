import { Component, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'wc-example-code',
  styleUrl: 'wc-example-code.scss'
})
export class WcExampleCode {

  @Prop() doc: string;
  @Prop({ context: 'isServer' }) private isServer: boolean;

  @State() content: string;

  componentWillLoad() {
      return this.fetchNewContent();
  }

  @Watch('doc')
  fetchNewContent() {
    return fetch(`${this.doc}`)
      .then(response => {
        return response.text()
      })
      .then(data => {
        this.content = data;

        const el = document.createElement('div');
        el.innerHTML = data;

        const headerEl = el.querySelector('h1');
        document.title = (headerEl && headerEl.textContent + ' - Stencil') || 'Stencil';

        // requestAnimationFrame is not available for preRendering
        // or SSR, so only run this in the browser
        if (!this.isServer) {
          window.requestAnimationFrame(() => {
            window.scrollTo(0, 0);
          })
        }

      });
  }

  render() {
    return (
      <div innerHTML={this.content}></div>
    )
  }
}
