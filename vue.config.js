
module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8012,
        https: false,
        proxy: {
            '/api/': {
                target: 'http://127.0.0.1:8001',
                ws: true,
                changeOrigin: true,
                pathRewite: {
                    '^/api': ''
                }
            },
        }
    }
}