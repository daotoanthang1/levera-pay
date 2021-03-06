module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: "levera-pay",
      script: "server.js",
      instances: 0,
      exec_mode: "cluster",
      env: {},
      env_production: {
        NODE_ENV: "production"
      },
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  // deploy: {
  //   production: {
  //     user: "cc",
  //     host: ["203.171.27.182"],
  //     ref: "origin/master",
  //     repo: "git@github.com:phongmh307/levera-ui.git",
  //     path: "/home/cc/levera",
  //     "post-deploy": "export PATH=$PATH:/home/cc/.nvm/versions/node/v14.2.0/bin && yarn && NODE_ENV=production yarn build && pm2 startOrRestart ecosystem.config.js --env production",
  //   },
  // },
};