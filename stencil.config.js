exports.config = {
  bundles: [
    { components: ['wc-app', 'wc-home', 'wc-top-toolbar'] },
    { components: ['wc-components'] }
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@ionic/core' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
