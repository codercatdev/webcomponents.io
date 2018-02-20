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
                <li><stencil-route-link url="/components/ion-action-sheet-controller">action-sheet-controller</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-action-sheet">action-sheet</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-alert-controller">alert-controller</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-alert">alert</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-animation-controller">animation-controller</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-app">app</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-avatar">avatar</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-back-button">back-button</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-backdrop">backdrop</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-badge">badge</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-button">button</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-buttons">buttons</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-card-content">card-content</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-card-header">card-header</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-card-subtitle">card-subtitle</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-card-title">card-title</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-card">card</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-checkbox">checkbox</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-chip-button">chip-button</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-chip">chip</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-col">col</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-content">content</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-datetime">datetime</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-fab-button">fab-button</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-fab-list">fab-list</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-fab">fab</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-footer">footer</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-gesture-controller">gesture-controller</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-gesture">gesture</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-grid">grid</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-header">header</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-icon">icon</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-infinite-scroll-content">infinite-scroll-content</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-infinite-scroll">infinite-scroll</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-input">input</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-item-divider">item-divider</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-item-option">item-option</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-item-options">item-options</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-item-sliding">item-sliding</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-item">item</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-keyboard-controller">keyboard-controller</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-label">label</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-list-header">list-header</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-list">list</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-loading-controller">loading-controller</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-loading">loading</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-menu-controller">menu-controller</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-menu">menu</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-modal-controller">modal-controller</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-modal">modal</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-nav">nav</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-navbar">navbar</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-note">note</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-page">page</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-picker-column">picker-column</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-picker-controller">picker-controller</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-picker">picker</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-popover-controller">popover-controller</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-popover">popover</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-radio-group">radio-group</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-radio">radio</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-range-knob">range-knob</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-range">range</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-reorder-group">reorder-group</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-reorder">reorder</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-route-link">route-link</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-route">route</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-router-controller">router-controller</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-row">row</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-scroll">scroll</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-searchbar">searchbar</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-segment-button">segment-button</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-segment">segment</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-select-option">select-option</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-select-popover">select-popover</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-select">select</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-skeleton-text">skeleton-text</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-slide">slide</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-slides">slides</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-spinner">spinner</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-split-pane">split-pane</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-tab-button">tab-button</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-tab">tab</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-tabbar">tabbar</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-tabs">tabs</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-textarea">textarea</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-thumbnail">thumbnail</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-title">title</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-toast-controller">toast-controller</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-toast">toast</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-toggle">toggle</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-toolbar">toolbar</stencil-route-link></li>
                <li><stencil-route-link url="/components/ion-util">util</stencil-route-link></li>
              </ul>
            </li>

            <li>
              <h4>Other</h4>
              <ul>

                <li>
                  <stencil-route-link url="/components/ion-my-first-component">
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