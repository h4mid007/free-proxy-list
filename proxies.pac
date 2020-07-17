
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
        return "PROXY 51.91.212.159:3128;PROXY 64.227.16.194:3128;PROXY 198.98.54.241:8080;PROXY 64.188.3.162:3128;PROXY 52.179.18.244:8080;PROXY 186.211.177.161:8082;PROXY 95.179.182.151:8080;PROXY 189.2.135.18:3128;PROXY 36.92.57.213:8080;PROXY 51.158.119.88:8761;PROXY 34.91.135.38:80;PROXY 178.33.251.230:3129;PROXY 140.238.17.59:80;PROXY 85.113.39.89:81;PROXY 105.112.8.53:3128;PROXY 79.137.44.85:3129;PROXY 128.199.149.7:8080;PROXY 5.141.117.33:81;PROXY 51.158.119.88:8811;PROXY 198.98.56.71:8080;PROXY 80.90.80.54:8080;PROXY 51.254.104.83:3190;";
}
