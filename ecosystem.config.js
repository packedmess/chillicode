module.exports = {
  apps: [
    {
      name: 'chillicode-new-site',
      script: 'npm',
      args: 'run app:start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
