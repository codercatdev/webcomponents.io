import { render } from '@stencil/core/testing';
import { WcTopToolbar } from './wc-top-toolbar';

describe('app', () => {
  it('should build', () => {
    expect(new WcTopToolbar()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [WcTopToolbar],
        html: '<wc-top-toolbar></wc-top-toolbar>'
      });
    });
  });
});