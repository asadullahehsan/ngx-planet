const PROXY_CONFIG = {};

PROXY_CONFIG['/static/app1'] = {
    target: 'http://localhost:3001',
    secure: false,
    changeOrigin: false
};

PROXY_CONFIG['/static/app2'] = {
    target: 'http://localhost:3002',
    secure: false,
    changeOrigin: true
};

PROXY_CONFIG['/static/app4'] = {
    target: 'http://localhost:3004',
    secure: false,
    changeOrigin: true
};

module.exports = PROXY_CONFIG;
