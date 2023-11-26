/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    globals: {
        __IS_DEV__: true,
        __PROJECT__: 'jest',
        __API__: '',
    },
    clearMocks: true,
    testEnvironment: 'jsdom',

    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    rootDir: '../../',
    moduleDirectories: ['node_modules', 'src'],

    modulePaths: [
        '<rootdir>src',
    ],

    // The glob patterns Jest uses to detect test files
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],

    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],

    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '^.+\\.svg$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
    setupFilesAfterEnv: ['<rootDir>/config/jest/jest-setup.ts'],

};
