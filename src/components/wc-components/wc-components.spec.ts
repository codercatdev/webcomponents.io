import { render } from '@stencil/core/testing';
import { WcComponents } from './wc-components';

describe('app', () => {
  it('should build', () => {
    expect(new WcComponents()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [WcComponents],
        html: '<wc-components></wc-components>'
      });
    });
  });
});