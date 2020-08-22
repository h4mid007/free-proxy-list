
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
        return "PROXY 161.35.156.192:8080;PROXY 144.76.24.153:3128;PROXY 78.47.4.33:3129;PROXY 95.174.67.50:18080;PROXY 206.221.176.130:3128;PROXY 206.176.123.205:3128;PROXY 104.45.188.43:3128;PROXY 51.68.71.95:3128;PROXY 103.139.103.33:3133;PROXY 103.28.37.131:3128;PROXY 191.233.198.18:80;PROXY 191.233.194.88:8080;PROXY 77.55.218.3:3128;PROXY 1.255.48.197:8080;PROXY 80.23.125.226:3128;PROXY 139.99.61.171:8080;PROXY 104.244.77.254:8080;PROXY 139.99.91.192:8080;PROXY 202.69.48.122:3128;PROXY 202.157.176.212:3128;PROXY 103.28.121.58:80;PROXY 103.28.121.58:3128;PROXY 130.61.95.193:3128;PROXY 85.113.39.89:81;PROXY 118.163.83.21:3128;PROXY 161.97.84.178:8080;PROXY 181.119.158.1:3128;PROXY 157.230.155.18:10492;PROXY 52.221.219.230:3128;PROXY 177.220.136.22:80;";
}
