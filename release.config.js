const config = {
  branches: ["master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [{ path: "firmware/firmware.zip", label: "Firmware ZIP" }],
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["dist/**/*.{js,css}", "docs", "package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};

export default config;
