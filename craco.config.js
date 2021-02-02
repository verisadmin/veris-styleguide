const ORG_NAME = "veris";
const APP_NAME = "styleguide";

const isEnvProduction = process.env.NODE_ENV === "production";
const ASSET_PATH = isEnvProduction ? `/apps/${APP_NAME}/` : "/";

// COMMON FOR ALL ##############################

const webpack = require("webpack");

// DUMP and check the WEBPACK config
const { WebpackConfigDumpPlugin } = require("webpack-config-dump-plugin");

// https://github.com/joeldenning/systemjs-webpack-interop#setting-public-path
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");

// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// https://www.keycdn.com/blog/brotli-with-webpack
// better compression algo
// var BrotliGzipPlugin = require("brotli-gzip-webpack-plugin");

// https://stackoverflow.com/a/41041580/362574
// remove console prints
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

//new IgnorePlugin(/^\.\/locale$/, /moment$/),
// const webpack = require("webpack");
const path = require("path");

const tailwindcss_plugin = require("tailwindcss");
const autoprefixer_plugin = require("autoprefixer");

// COMMON FOR ALL ##############################

const fileUUID = require("uuid")().slice(0, 8);

module.exports = {
    style: {
        modules: {
            localIdentName: `${APP_NAME}-[local]-[hash:base64:5]`,
        },
        postcss: {
            plugins: [tailwindcss_plugin, autoprefixer_plugin],
        },
    },
    babel: {
        presets: [],
        plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-transform-react-jsx",
            "@babel/plugin-proposal-class-properties",
            [
                "import",
                {
                    libraryName: "antd",
                    libraryDirectory: "es",
                    style: false,
                },
                "antd",
            ],
            [
                "import",
                {
                    libraryName: "@ant-design/icons",
                    libraryDirectory: "es/icons",
                    camel2DashComponentName: false,
                },
                "@ant-design/icons",
            ],
            [
                "import",
                {
                    libraryName: "lodash",
                    libraryDirectory: "",
                    camel2DashComponentName: false, // default: true
                },
                "lodash",
            ],
            [
                "import",
                {
                    libraryName: "@material-ui/core",
                    // Use "'libraryDirectory': ''," if your bundler does not support ES modules
                    libraryDirectory: "esm",
                    camel2DashComponentName: false,
                },
                "material-core",
            ],
            [
                "import",
                {
                    libraryName: "@material-ui/icons",
                    // Use "'libraryDirectory': ''," if your bundler does not support ES modules
                    libraryDirectory: "esm",
                    camel2DashComponentName: false,
                },
                "material-icons",
            ],
        ],
    },
    webpack: {
        plugins: [
            // webpack define plugin would overwrite
            // any env vars
            // so it's important to unpack the existing process.env
            new webpack.DefinePlugin({
                "process.env.ASSET_UUID": JSON.stringify(fileUUID),
                "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
                "process.env": JSON.stringify(process.env),
            }),

            // https://github.com/joeldenning/systemjs-webpack-interop#background--other-work
            // https://github.com/systemjs/systemjs#compatibility-with-webpack
            new SystemJSPublicPathWebpackPlugin({
                // optional: defaults to 1
                // If you need the webpack public path to "chop off" some of the directories in the current module's url, you can specify a "root directory level". Note that the root directory level is read from right-to-left, with `1` indicating "current directory" and `2` indicating "up one directory":
                rootDirectoryLevel: 1,

                // ONLY NEEDED FOR WEBPACK 1-4. Not necessary for webpack@5
                systemjsModuleName: `@${ORG_NAME}/${APP_NAME}`,
            }),

            new ImageMinimizerPlugin({
                minimizerOptions: {
                    // Lossless optimization with custom option
                    // Feel free to experiment with options for better result for you
                    plugins: [
                        ["gifsicle", { interlaced: true }],
                        ["jpegtran", { progressive: true }],
                        ["optipng", { optimizationLevel: 5 }],
                        [
                            "svgo",
                            {
                                plugins: [
                                    {
                                        removeViewBox: false,
                                    },
                                ],
                            },
                        ],
                    ],
                },
            }),

            new MiniCssExtractPlugin({
                filename: `static/css/[name].${APP_NAME}.${fileUUID}.css`,
                chunkFilename: `static/css/[name].${APP_NAME}.${fileUUID}.css`,
            }),

            new WebpackConfigDumpPlugin({
                depth: 8,
            }),
        ],
        configure: {
            module: {
                rules: [
                    // https://github.com/systemjs/systemjs#compatibility-with-webpack
                    { parser: { system: false } },
                    // https://webpack.js.org/plugins/image-minimizer-webpack-plugin/#root
                    {
                        test: /\.(jpe?g|png|gif|svg)$/i,
                        exclude: /\assets\/icons/,
                        use: [
                            {
                                loader: path.resolve(
                                    __dirname,
                                    "node_modules/file-loader"
                                ),
                                // loader: "file-loader", // Or `url-loader` or your other loader
                            },
                        ],
                    },
                    {
                        test: /\.(svg)$/i,
                        include: /\assets\/icons$/,
                        exclude: /\assets\/images/,
                        use: [
                            {
                                loader: path.resolve(
                                    __dirname,
                                    "node_modules/file-loader"
                                ), // loader: "file-loader", // Or `url-loader` or your other loader
                                options: {
                                    name: "assets/icons/[name].[ext]",
                                },
                            },
                        ],
                    },
                ],
            },
            externals: [
                {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react-router-dom": "react-router-dom",
                },
                /^@veris\/.+/,
            ],
            entry: {
                main: "./src/index.js",
            },
            output: {
                // https://github.com/single-spa/single-spa/issues/387
                libraryTarget: "system", //"umd",//"window",
                filename: `[name].${APP_NAME}.js`,
                path: path.resolve(__dirname, "build"),
                crossOriginLoading: "anonymous",
                publicPath: ASSET_PATH,
                devtoolNamespace: `${APP_NAME}`,
            },
            // https://github.com/single-spa/single-spa/issues/387
            optimization: {},
        },
    },
    devServer: {
        clientLogLevel: "debug",
        compress: true,
        contentBase: path.join(__dirname, "public"),
        disableHostCheck: true,
        host: "localhost",
        port: 4999,
        hot: true,
        hotOnly: true,
        open: false,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
                "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
                "X-Requested-With, content-type, Authorization",
        },
        proxy: {
            "/api": {
                target: "https://local.veris.in",
                changeOrigin: true,
                secure: false,
            },
        },
        // public: "http://localhost:3000",
        // open: false,
    },
    plugins: [
        // Webpack config override
        {
            plugin: {
                overrideWebpackConfig: ({
                    webpackConfig,
                    cracoConfig,
                    pluginOptions,
                    context: { env, paths },
                }) => {
                    // https://github.com/single-spa/single-spa/issues/387
                    delete webpackConfig.optimization;
                    webpackConfig.optimization = {};

                    // remove console prints from production
                    //https://stackoverflow.com/questions/41040266/remove-console-logs-with-webpack-uglify
                    if (
                        env === "production" ||
                        webpackConfig.mode === "production"
                    ) {
                        webpackConfig.optimization.minimize = true;
                        webpackConfig.optimization.minimizer = [
                            new CssMinimizerPlugin(),
                            new TerserPlugin({
                                sourceMap:
                                    process.env.GENERATE_SOURCEMAP === "true"
                                        ? true
                                        : false, // Must be set to true if using source-maps in production
                                terserOptions: {
                                    compress: {
                                        drop_console: true,
                                    },
                                },
                            }),
                        ];
                    }

                    // need to deduplicate the webpack plugins
                    // so as to make sure that the plugin package version matches
                    // first filter out the plugins that match
                    webpackConfig.plugins = webpackConfig.plugins.filter(
                        (plugin) => {
                            return cracoConfig.webpack.plugins
                                .map((cp) => {
                                    return cp.constructor.name;
                                })
                                .filter((cpn) => {
                                    return cpn !== plugin.constructor.name;
                                });
                        }
                    );
                    // but this generates an array that has multiple entries of the same plugin
                    // so the following code filters out the repeated entries
                    let dedupPlugins = [];
                    for (let i = 0; i < webpackConfig.plugins.length; i++) {
                        if (
                            dedupPlugins
                                .map((p) => p.constructor.name)
                                .includes(
                                    webpackConfig.plugins[i].constructor.name
                                )
                        ) {
                            continue;
                        } else {
                            dedupPlugins.push(webpackConfig.plugins[i]);
                        }
                    }
                    webpackConfig.plugins = dedupPlugins;

                    // ########################################################################
                    // this helps inline the CSS <link> within JS
                    // the single-spa module loads <script> and not <links>
                    // so the css files won't get loaded unless they are emedded into JS
                    //////####
                    const rules = webpackConfig.module.rules;
                    let i = 0;
                    for (i; i < rules.length; i++) {
                        if (rules[i].oneOf !== undefined) break;
                    }
                    let oneOfs = webpackConfig.module.rules[i].oneOf;

                    for (let z = 0; z < oneOfs.length; z++) {
                        let item = oneOfs[z];
                        if (item.test !== undefined) {
                            if (
                                String(item.test) === String(/\.css$/) ||
                                String(item.test) ===
                                    String(/\.module\.css$/) ||
                                String(item.test) ===
                                    String(/\.(scss|sass)$/) ||
                                String(item.test) ===
                                    String(/\.module\.(scss|sass)$/)
                            ) {
                                // for production env
                                // try to use MiniCssExtractPlugin
                                // else use style loader
                                // have to basially duplicate the implemetation
                                // of craco, because of the version change
                                item.use[0] =
                                    env === "production" ||
                                    webpackConfig.mode === "production"
                                        ? {
                                              loader:
                                                  MiniCssExtractPlugin.loader,
                                          }
                                        : path.resolve(
                                              __dirname,
                                              "node_modules/style-loader"
                                          );
                            }
                        }
                        webpackConfig.module.rules[i].oneOf[z] = item;
                    }
                    return webpackConfig;
                },
            },
        },
    ],
};
