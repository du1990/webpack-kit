const App = require('../app/App.jsx');

const rootRoute = {
  childRoutes: [
    {
      path: '/',
      component: App,
      childRoutes: [
        {
          path: 'reddit',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('../reddit/RedditContainer.jsx'));
            });
          },
        },
      ],
    },
  ],
};

export default rootRoute;
