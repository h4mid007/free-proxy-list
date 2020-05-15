
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
        return "PROXY 167.172.110.135:3128;PROXY 34.253.177.131:3128;PROXY 136.243.47.220:3128;PROXY 46.101.113.32:3128;PROXY 95.179.228.53:8080;PROXY 88.198.201.112:8888;PROXY 64.227.32.213:3128;PROXY 167.71.131.37:3128;PROXY 13.95.85.114:3128;PROXY 104.244.75.26:8080;PROXY 35.214.187.192:3128;PROXY 37.97.231.92:3128;PROXY 52.142.122.97:3128;PROXY 15.236.43.144:3128;PROXY 52.169.212.235:3128;PROXY 51.91.212.159:3128;PROXY 51.38.127.211:8080;PROXY 51.68.138.253:3128;PROXY 51.15.130.83:5836;PROXY 94.23.30.184:3128;PROXY 51.158.186.255:8811;PROXY 167.86.102.12:3129;PROXY 178.128.109.22:8080;PROXY 212.47.243.156:3128;PROXY 5.141.117.33:81;PROXY 54.186.68.197:3128;PROXY 182.253.86.94:8080;PROXY 182.253.86.103:8080;PROXY 95.179.217.226:8080;PROXY 159.203.44.177:3128;PROXY 124.122.152.217:8080;PROXY 80.90.80.54:8080;PROXY 157.245.250.212:3128;PROXY 189.2.135.18:3128;PROXY 176.123.7.22:5836;PROXY 34.204.217.214:3128;PROXY 188.165.16.230:3129;PROXY 142.93.176.125:8080;PROXY 45.63.18.66:8080;PROXY 198.199.77.39:3128;PROXY 138.197.32.120:3128;PROXY 165.22.36.75:8888;PROXY 149.28.44.208:8080;PROXY 45.33.70.113:8085;PROXY 34.69.37.186:3128;";
}
