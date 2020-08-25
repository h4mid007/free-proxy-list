
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
        return "PROXY 95.174.67.50:18080;PROXY 130.61.95.193:3128;PROXY 51.89.103.246:3128;PROXY 188.138.70.162:5836;PROXY 51.89.32.83:3128;PROXY 51.68.71.95:3128;PROXY 46.218.155.194:3128;PROXY 78.47.35.255:3128;PROXY 173.212.230.5:3128;PROXY 80.90.80.54:8080;PROXY 165.22.36.75:8888;PROXY 52.179.18.244:8080;PROXY 212.83.186.160:5836;PROXY 159.203.44.177:3128;PROXY 188.166.250.56:3128;PROXY 181.48.114.82:3128;PROXY 202.138.252.182:8080;PROXY 43.229.135.233:8080;PROXY 191.234.184.130:3128;PROXY 185.117.9.210:8080;PROXY 202.157.176.212:3128;PROXY 186.211.177.161:8082;PROXY 45.169.163.65:8080;PROXY 103.28.121.58:80;PROXY 103.28.121.58:3128;PROXY 200.255.122.170:8080;PROXY 45.175.174.29:8080;PROXY 1.255.48.197:8080;PROXY 125.162.62.141:8080;PROXY 167.250.65.246:8080;PROXY 139.59.129.114:3128;PROXY 51.15.151.188:5836;PROXY 51.15.152.94:5836;PROXY 186.225.110.166:8080;PROXY 110.139.112.7:8080;";
}
