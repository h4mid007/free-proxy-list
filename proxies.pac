
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
        return "PROXY 130.61.95.193:3128;PROXY 51.75.147.43:3128;PROXY 95.211.168.90:5836;PROXY 51.75.147.33:3128;PROXY 194.5.207.163:3128;PROXY 104.248.141.139:3128;PROXY 95.211.171.6:5836;PROXY 95.211.171.5:5836;PROXY 51.89.103.246:3128;PROXY 78.47.4.33:3129;PROXY 188.138.70.162:5836;PROXY 62.171.177.125:5836;PROXY 62.171.177.184:5836;PROXY 51.77.229.110:3128;PROXY 51.89.32.83:3128;PROXY 95.174.67.50:18080;PROXY 15.188.22.231:3128;PROXY 51.68.71.95:3128;PROXY 51.75.147.41:3128;PROXY 62.210.139.110:5836;PROXY 188.165.141.114:3129;PROXY 52.179.18.244:8080;PROXY 165.22.36.75:8888;PROXY 91.214.179.5:8080;PROXY 217.182.253.119:3177;PROXY 80.90.80.54:8080;PROXY 159.203.44.177:3128;PROXY 85.113.39.89:81;PROXY 125.24.52.93:8080;PROXY 1.10.233.0:8080;PROXY 1.0.187.175:8080;PROXY 171.6.75.148:8080;PROXY 110.171.32.140:8080;PROXY 101.108.121.234:8080;PROXY 101.109.94.144:8080;PROXY 191.233.194.88:8080;PROXY 191.233.233.239:8080;PROXY 125.24.85.94:8080;PROXY 61.7.189.144:8080;PROXY 182.253.169.144:8080;PROXY 103.28.121.58:80;PROXY 191.252.221.79:8080;PROXY 14.207.183.65:8080;";
}
