import { render } from '@stencil/core/testing';
import { WcHome } from './wc-home';

describe('app', () => {
  it('should build', () => {
    expect(new WcHome()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [WcHome],
        html: '<wc-home></wc-home>'
      });
    });
  });
});