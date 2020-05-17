
function FindProxyForURL(url, host) {
    //Bypass local
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0",  "255.255.0.0") ||
        isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"))
        return "DIRECT";
        
    //else
        return "PROXY 45.76.89.20:8080;PROXY 82.165.244.38:3128;PROXY 217.69.6.216:8080;PROXY 128.199.52.73:3128;PROXY 104.244.77.254:8080;PROXY 51.91.212.159:3128;PROXY 178.62.3.70:3128;PROXY 45.76.130.27:8080;PROXY 45.77.88.84:8080;PROXY 116.203.254.70:3129;PROXY 3.122.199.27:3128;PROXY 136.244.84.26:8080;PROXY 217.69.1.77:8080;PROXY 192.248.144.93:8080;PROXY 80.211.65.43:3128;PROXY 136.243.47.220:3128;PROXY 51.255.103.170:3129;PROXY 159.69.153.122:3128;PROXY 80.90.80.54:8080;PROXY 167.172.42.145:8080;PROXY 165.22.36.75:8888;PROXY 45.77.144.14:8080;PROXY 8.9.36.51:8080;PROXY 155.138.158.162:8080;PROXY 167.99.116.191:3128;PROXY 128.199.121.141:3128;PROXY 91.214.179.25:8080;PROXY 207.246.95.163:8080;PROXY 34.69.251.120:3128;PROXY 167.99.61.138:3128;PROXY 155.138.159.113:8080;PROXY 165.22.36.112:3128;PROXY 188.165.16.230:3129;PROXY 144.202.57.127:8080;PROXY 145.239.121.218:3129;PROXY 198.98.50.164:8080;PROXY 144.217.101.242:3129;PROXY 188.165.141.114:3129;PROXY 138.197.32.120:3128;PROXY 128.199.178.81:3128;PROXY 69.162.122.138:5836;PROXY 79.137.44.85:3129;PROXY 69.162.122.141:5836;PROXY 69.162.122.140:5836;PROXY 45.76.151.114:8080;";
}
