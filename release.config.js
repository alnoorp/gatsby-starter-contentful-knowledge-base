module.exports = {
  release: {
    branches: ['master'],
  },
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/changelog',
    [
      '@semantic-release/git',
      {
        assets: [],
      },
    ],
  ],
};
