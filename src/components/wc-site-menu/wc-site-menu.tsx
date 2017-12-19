import { Component } from '@stencil/core';

@Component({
  tag: 'wc-site-menu',
  styleUrl: 'wc-site-menu.scss'
})
export class SiteMenu {
  render() {
    return (
      <div>
        <iframe class="star-button" src="https://ghbtns.com/github-btn.html?user=ajonp&repo=webcomponents.io&type=star&count=true" frameBorder="0" scrolling="0" width="170px" height="20px"></iframe>
        <ul id="menu-list">
          <li>
            <h4>Ionic Core</h4>
            <ul>
              <li>
                <stencil-route-link url="/components/ionic-core">
                  Introduction
                </stencil-route-link>
              </li>
            </ul>
          </li>

          <li>
            <h4>Other</h4>
            <ul>

              <li>
                <stencil-route-link url="/components/my-first-component">
                  My First Component
                </stencil-route-link>
              </li>

            </ul>
          </li>
        </ul>
      </div>
    );
  }
}