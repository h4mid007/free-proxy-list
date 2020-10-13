
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
        return "PROXY 185.20.224.239:3128;PROXY 139.28.152.60:80;PROXY 134.249.134.41:3128;PROXY 51.75.147.33:3128;PROXY 161.97.72.126:3128;PROXY 193.183.217.93:8080;PROXY 51.75.147.43:3128;PROXY 80.90.80.54:8080;PROXY 51.75.147.41:3128;PROXY 51.75.147.35:3128;PROXY 185.203.7.8:56650;PROXY 51.75.147.44:3128;PROXY 35.185.16.35:80;PROXY 51.161.116.223:3128;PROXY 52.179.18.244:8080;PROXY 45.62.216.124:3128;PROXY 101.51.165.230:8080;PROXY 186.211.177.161:8082;PROXY 104.198.125.34:3128;PROXY 85.113.39.89:81;PROXY 202.147.206.98:8080;PROXY 212.87.220.2:3128;PROXY 13.251.221.173:8080;PROXY 181.119.69.153:3128;PROXY 82.200.233.4:3128;PROXY 144.217.101.245:3129;";
}
