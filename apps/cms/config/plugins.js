module.exports = {
  //
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  suneditor: {
    enabled: true,
    resolve: './src/plugins/suneditor',
  },
};
