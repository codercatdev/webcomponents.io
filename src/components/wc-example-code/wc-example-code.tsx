import { Component, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'wc-example-code',
  styleUrl: 'wc-example-code.scss'
})
export class WcExampleCode {

  @Prop() doc: string;
  @State() content: string;

  componentWillLoad() {
      return this.fetchNewContent();
  }

  @Watch('doc')
  fetchNewContent() {
    this.content = this.doc;
    return this.content;
  }

  render() {
    return (
      <iframe src={this.content} height="480px" width="100%" ></iframe>
    )
  }
}
