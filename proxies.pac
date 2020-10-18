
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
        return "PROXY 85.14.243.31:3128;PROXY 95.217.186.24:3128;PROXY 80.90.80.54:8080;PROXY 91.214.179.5:8080;PROXY 35.231.123.86:80;PROXY 185.117.9.210:8080;PROXY 178.128.212.55:8080;PROXY 139.162.7.145:80;PROXY 194.5.188.193:3128;PROXY 159.203.44.177:3128;PROXY 188.166.209.251:8080;PROXY 191.235.71.181:8080;PROXY 186.211.177.161:8082;PROXY 85.113.39.89:81;PROXY 159.89.55.157:8080;PROXY 181.119.158.1:3128;PROXY 161.35.94.111:8080;PROXY 191.102.232.130:3128;PROXY 168.121.56.50:8080;PROXY 157.245.69.232:8080;PROXY 103.35.64.12:3128;PROXY 104.248.93.66:8080;PROXY 167.71.142.240:8080;";
}
