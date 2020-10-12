
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
        return "PROXY 159.203.44.177:3128;PROXY 45.62.216.124:3128;PROXY 51.161.116.223:3128;PROXY 210.212.227.70:3128;PROXY 185.117.9.210:8080;PROXY 46.246.80.10:3128;PROXY 91.214.179.5:8080;PROXY 35.185.16.35:80;";
}
