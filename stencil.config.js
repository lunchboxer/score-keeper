exports.config = {
  bundles: [
    { components: ['my-main', 'my-groups', 'my-student-list', 'my-star'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
