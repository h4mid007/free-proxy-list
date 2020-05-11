
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
        return "PROXY 108.61.190.167:8080;PROXY 136.244.84.26:8080;PROXY 157.245.66.51:8080;PROXY 108.61.170.136:8080;PROXY 104.244.75.26:8080;PROXY 151.80.199.89:3128;PROXY 5.9.252.251:3128;PROXY 212.129.1.232:80;PROXY 46.249.36.188:3128;PROXY 51.178.59.37:3128;PROXY 51.178.56.198:3128;PROXY 45.77.229.208:8080;PROXY 95.179.167.232:8080;PROXY 80.187.140.26:8080;PROXY 46.218.155.194:3128;PROXY 80.240.25.134:8080;PROXY 95.179.217.204:8080;PROXY 194.5.207.124:3128;PROXY 45.76.32.236:8080;PROXY 136.244.100.81:8080;PROXY 51.158.68.68:8811;PROXY 178.238.232.35:5836;PROXY 78.141.220.173:8080;PROXY 163.172.136.226:8811;PROXY 209.97.138.116:8080;PROXY 37.187.3.175:3128;PROXY 176.120.110.58:8080;PROXY 198.98.50.164:8080;PROXY 104.45.188.43:3128;PROXY 91.214.179.25:8080;PROXY 45.77.101.237:8080;PROXY 80.90.80.54:8080;PROXY 165.22.36.75:8888;PROXY 109.197.188.34:58080;PROXY 104.248.11.7:8080;PROXY 45.77.100.215:8080;PROXY 167.172.254.176:8080;PROXY 185.8.2.242:8080;PROXY 207.148.23.141:8080;PROXY 5.141.117.33:81;PROXY 35.224.98.199:3128;PROXY 216.125.249.232:8080;PROXY 138.197.131.172:3128;PROXY 2.87.117.225:8080;PROXY 159.203.17.5:3128;";
}
