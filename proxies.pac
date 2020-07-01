
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
        return "PROXY 195.154.221.27:5836;PROXY 95.179.202.40:8080;PROXY 78.47.106.195:3129;PROXY 185.122.57.238:3128;PROXY 95.217.34.209:3128;PROXY 185.166.215.63:8080;PROXY 80.211.159.173:3128;PROXY 51.158.119.88:8811;PROXY 206.81.10.180:10492;PROXY 4.14.219.157:3128;PROXY 176.215.58.67:8080;PROXY 51.91.212.159:3128;PROXY 52.179.18.244:8080;PROXY 159.203.44.177:3128;PROXY 64.188.3.162:3128;PROXY 157.230.155.18:10492;PROXY 40.65.136.31:8080;PROXY 107.155.56.235:80;PROXY 46.173.211.225:5836;PROXY 191.232.208.70:3128;PROXY 186.211.177.161:8082;PROXY 45.7.133.174:1985;PROXY 189.2.135.18:3128;PROXY 3.125.229.126:3128;PROXY 36.92.57.213:8080;PROXY 133.130.112.232:8080;PROXY 103.28.121.58:80;PROXY 177.22.21.246:3128;PROXY 103.28.121.58:3128;PROXY 200.255.122.170:8080;PROXY 113.196.140.162:8888;PROXY 139.99.88.3:3128;PROXY 91.214.179.25:8080;PROXY 198.98.50.164:8080;PROXY 209.141.52.48:8080;PROXY 205.185.127.8:8080;PROXY 145.239.121.218:3129;PROXY 177.22.24.234:3128;PROXY 1.229.137.26:3128;PROXY 103.141.64.250:8191;PROXY 187.130.75.77:3128;PROXY 105.112.8.53:3128;PROXY 140.82.36.154:31321;PROXY 45.76.83.137:33601;";
}
