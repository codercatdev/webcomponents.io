import { Component } from '@stencil/core';

@Component({
  tag: 'wc-site-menu',
  styleUrl: 'wc-site-menu.scss'
})
export class SiteMenu {
  render() {
    return (
      <div>
        <ul id="menu-list">
          <li>
            <h4><stencil-route-link url="/components/ionic-core">Ionic Core</stencil-route-link></h4>
            <ul>
            <li><stencil-route-link url="/components/action-sheet-controller">action-sheet-controller</stencil-route-link></li>
            <li><stencil-route-link url="/components/action-sheet">action-sheet</stencil-route-link></li>
            <li><stencil-route-link url="/components/alert-controller">alert-controller</stencil-route-link></li>
            <li><stencil-route-link url="/components/alert">alert</stencil-route-link></li>
            <li><stencil-route-link url="/components/animation-controller">animation-controller</stencil-route-link></li>
            <li><stencil-route-link url="/components/app">app</stencil-route-link></li>
            <li><stencil-route-link url="/components/avatar">avatar</stencil-route-link></li>
            <li><stencil-route-link url="/components/backdrop">backdrop</stencil-route-link></li>
            <li><stencil-route-link url="/components/badge">badge</stencil-route-link></li>
            <li><stencil-route-link url="/components/button">button</stencil-route-link></li>
            <li><stencil-route-link url="/components/buttons">buttons</stencil-route-link></li>
            <li><stencil-route-link url="/components/card-content">card-content</stencil-route-link></li>
            <li><stencil-route-link url="/components/card-header">card-header</stencil-route-link></li>
            <li><stencil-route-link url="/components/card-subtitle">card-subtitle</stencil-route-link></li>
            <li><stencil-route-link url="/components/card-title">card-title</stencil-route-link></li>
            <li><stencil-route-link url="/components/card">card</stencil-route-link></li>
            <li><stencil-route-link url="/components/checkbox">checkbox</stencil-route-link></li>
            <li><stencil-route-link url="/components/chip-button">chip-button</stencil-route-link></li>
            <li><stencil-route-link url="/components/chip">chip</stencil-route-link></li>
            <li><stencil-route-link url="/components/col">col</stencil-route-link></li>
            <li><stencil-route-link url="/components/content">content</stencil-route-link></li>
            <li><stencil-route-link url="/components/datetime">datetime</stencil-route-link></li>
            <li><stencil-route-link url="/components/fab-button">fab-button</stencil-route-link></li>
            <li><stencil-route-link url="/components/fab-list">fab-list</stencil-route-link></li>
            <li><stencil-route-link url="/components/fab">fab</stencil-route-link></li>
            <li><stencil-route-link url="/components/footer">footer</stencil-route-link></li>
            <li><stencil-route-link url="/components/gesture-controller">gesture-controller</stencil-route-link></li>
            <li><stencil-route-link url="/components/gesture">gesture</stencil-route-link></li>
            <li><stencil-route-link url="/components/grid">grid</stencil-route-link></li>
            <li><stencil-route-link url="/components/header">header</stencil-route-link></li>
            <li><stencil-route-link url="/components/icon">icon</stencil-route-link></li>
            <li><stencil-route-link url="/components/infinite-scroll-content">infinite-scroll-content</stencil-route-link></li>
            <li><stencil-route-link url="/components/infinite-scroll">infinite-scroll</stencil-route-link></li>
            <li><stencil-route-link url="/components/input">input</stencil-route-link></li>
            <li><stencil-route-link url="/components/item-divider">item-divider</stencil-route-link></li>
            <li><stencil-route-link url="/components/item-option">item-option</stencil-route-link></li>
            <li><stencil-route-link url="/components/item-options">item-options</stencil-route-link></li>
            <li><stencil-route-link url="/components/item-sliding">item-sliding</stencil-route-link></li>
            <li><stencil-route-link url="/components/item">item</stencil-route-link></li>
            <li><stencil-route-link url="/components/keyboard-controller">keyboard-controller</stencil-route-link></li>
            <li><stencil-route-link url="/components/label">label</stencil-route-link></li>
            <li><stencil-route-link url="/components/list-header">list-header</stencil-route-link></li>
            <li><stencil-route-link url="/components/list">list</stencil-route-link></li>
            <li><stencil-route-link url="/components/loading-controller">loading-controller</stencil-route-link></li>
            <li><stencil-route-link url="/components/loading">loading</stencil-route-link></li>
            <li><stencil-route-link url="/components/menu-controller">menu-controller</stencil-route-link></li>
            <li><stencil-route-link url="/components/menu">menu</stencil-route-link></li>
            <li><stencil-route-link url="/components/modal-controller">modal-controller</stencil-route-link></li>
            <li><stencil-route-link url="/components/modal">modal</stencil-route-link></li>
            <li><stencil-route-link url="/components/nav">nav</stencil-route-link></li>
            <li><stencil-route-link url="/components/navbar">navbar</stencil-route-link></li>
            <li><stencil-route-link url="/components/note">note</stencil-route-link></li>
            <li><stencil-route-link url="/components/page">page</stencil-route-link></li>
            <li><stencil-route-link url="/components/picker-column">picker-column</stencil-route-link></li>
            <li><stencil-route-link url="/components/picker-controller">picker-controller</stencil-route-link></li>
            <li><stencil-route-link url="/components/picker">picker</stencil-route-link></li>
            <li><stencil-route-link url="/components/popover-controller">popover-controller</stencil-route-link></li>
            <li><stencil-route-link url="/components/popover">popover</stencil-route-link></li>
            <li><stencil-route-link url="/components/radio-group">radio-group</stencil-route-link></li>
            <li><stencil-route-link url="/components/radio">radio</stencil-route-link></li>
            <li><stencil-route-link url="/components/range-knob">range-knob</stencil-route-link></li>
            <li><stencil-route-link url="/components/range">range</stencil-route-link></li>
            <li><stencil-route-link url="/components/reorder-group">reorder-group</stencil-route-link></li>
            <li><stencil-route-link url="/components/reorder">reorder</stencil-route-link></li>
            <li><stencil-route-link url="/components/route-link">route-link</stencil-route-link></li>
            <li><stencil-route-link url="/components/route">route</stencil-route-link></li>
            <li><stencil-route-link url="/components/router-controller">router-controller</stencil-route-link></li>
            <li><stencil-route-link url="/components/row">row</stencil-route-link></li>
            <li><stencil-route-link url="/components/scroll">scroll</stencil-route-link></li>
            <li><stencil-route-link url="/components/searchbar">searchbar</stencil-route-link></li>
            <li><stencil-route-link url="/components/segment-button">segment-button</stencil-route-link></li>
            <li><stencil-route-link url="/components/segment">segment</stencil-route-link></li>
            <li><stencil-route-link url="/components/select-option">select-option</stencil-route-link></li>
            <li><stencil-route-link url="/components/select-popover">select-popover</stencil-route-link></li>
            <li><stencil-route-link url="/components/select">select</stencil-route-link></li>
            <li><stencil-route-link url="/components/skeleton-text">skeleton-text</stencil-route-link></li>
            <li><stencil-route-link url="/components/slide">slide</stencil-route-link></li>
            <li><stencil-route-link url="/components/slides">slides</stencil-route-link></li>
            <li><stencil-route-link url="/components/spinner">spinner</stencil-route-link></li>
            <li><stencil-route-link url="/components/split-pane">split-pane</stencil-route-link></li>
            <li><stencil-route-link url="/components/tab-button">tab-button</stencil-route-link></li>
            <li><stencil-route-link url="/components/tab">tab</stencil-route-link></li>
            <li><stencil-route-link url="/components/tabbar">tabbar</stencil-route-link></li>
            <li><stencil-route-link url="/components/tabs">tabs</stencil-route-link></li>
            <li><stencil-route-link url="/components/textarea">textarea</stencil-route-link></li>
            <li><stencil-route-link url="/components/thumbnail">thumbnail</stencil-route-link></li>
            <li><stencil-route-link url="/components/title">title</stencil-route-link></li>
            <li><stencil-route-link url="/components/toast-controller">toast-controller</stencil-route-link></li>
            <li><stencil-route-link url="/components/toast">toast</stencil-route-link></li>
            <li><stencil-route-link url="/components/toggle">toggle</stencil-route-link></li>
            <li><stencil-route-link url="/components/toolbar">toolbar</stencil-route-link></li>
            <li><stencil-route-link url="/components/util">util</stencil-route-link></li>
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