exports.config = {
  bundles: [
    { components: ['my-groups', 'my-student-list'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
