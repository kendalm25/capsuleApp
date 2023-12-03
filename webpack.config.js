const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// https://github.com/gorhom/react-native-bottom-sheet/issues/819
module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(
        {
            ...env,
            babel: { dangerouslyAddModulePathsToTranspile: ['@gorhom'] },
        },
        argv
    );

    return config;
};