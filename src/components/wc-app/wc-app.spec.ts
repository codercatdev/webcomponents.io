import { render } from '@stencil/core/testing';
import { MyApp } from './wc-app';

describe('wc-app', () => {
  it('should build', () => {
    expect(new WcApp()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [WcApp],
        html: '<wc-app></wc-app>'
      });
    });
  });
});