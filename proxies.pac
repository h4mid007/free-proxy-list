
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
        return "PROXY 195.154.108.174:5836;PROXY 51.158.98.121:8811;PROXY 45.76.35.6:8080;PROXY 176.221.43.250:3128;PROXY 212.83.186.17:5836;PROXY 45.32.239.77:8080;PROXY 51.91.212.159:3128;PROXY 77.68.27.71:3128;PROXY 95.179.185.215:8080;PROXY 194.5.207.66:3128;PROXY 62.152.138.43:3128;PROXY 93.118.32.243:5836;PROXY 80.90.80.54:8080;PROXY 46.173.211.225:5836;PROXY 51.15.80.136:3128;PROXY 163.172.190.160:8811;PROXY 45.63.23.138:8080;PROXY 104.45.188.43:3128;PROXY 51.79.80.139:3128;PROXY 161.35.63.91:8080;PROXY 38.68.46.114:8080;PROXY 159.203.44.177:3128;PROXY 51.158.119.88:8811;PROXY 68.183.187.151:3128;PROXY 91.214.179.25:8080;PROXY 45.76.186.189:8080;PROXY 107.191.43.60:8080;PROXY 172.104.57.209:666;PROXY 128.199.187.70:3128;PROXY 139.162.39.216:3128;PROXY 45.77.241.41:8080;PROXY 207.148.65.38:8080;PROXY 117.53.47.209:8181;PROXY 103.146.203.237:3128;PROXY 182.253.170.12:8080;PROXY 207.148.117.103:8080;PROXY 31.44.12.65:5836;PROXY 54.255.214.216:3128;PROXY 203.130.21.234:3128;PROXY 45.76.160.191:8080;PROXY 103.139.103.34:3128;PROXY 207.148.125.136:8080;PROXY 182.53.26.236:8080;PROXY 223.206.69.187:8080;";
}
