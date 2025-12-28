export const getPackageVersion = async () => {
  const packageJson = await import("../../package.json");
  return packageJson.default.version;
};

export const getPackageName = async () => {
  const packageJson = await import("../../package.json");
  return packageJson.default.name;
};
