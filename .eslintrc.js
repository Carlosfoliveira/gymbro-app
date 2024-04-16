module.exports = {
  root: true,
  extends: ["universe/native"],
  rules: {
    // Ensures props and state inside functions are always up-to-date
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-console": "warn",
    "node/handle-callback-err": 0,
  },
};
