
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
        return "PROXY 91.200.101.227:5836;PROXY 46.218.155.194:3128;PROXY 95.179.216.64:3128;PROXY 51.158.70.105:5836;PROXY 217.163.28.105:80;PROXY 188.166.53.57:8080;PROXY 51.15.113.92:5836;PROXY 51.15.106.213:5836;PROXY 185.189.112.186:3128;PROXY 51.158.182.136:5836;PROXY 51.15.103.91:5836;PROXY 51.15.74.10:3128;PROXY 82.119.170.106:8080;PROXY 51.158.111.242:8811;PROXY 95.179.200.223:32923;PROXY 51.158.68.133:8811;PROXY 195.133.48.134:5836;PROXY 93.186.251.135:3128;PROXY 163.172.190.160:8811;PROXY 194.87.234.179:5836;PROXY 91.237.203.238:53281;PROXY 134.249.158.34:81;PROXY 51.158.98.121:8811;PROXY 198.98.54.241:8080;PROXY 159.203.44.177:3128;PROXY 159.89.50.191:3128;PROXY 91.214.179.25:8080;PROXY 51.158.163.159:5836;PROXY 95.173.168.45:5836;PROXY 51.158.111.229:8811;PROXY 207.148.116.241:3128;PROXY 51.158.123.250:8811;PROXY 45.77.32.82:8080;PROXY 165.22.62.8:3128;PROXY 167.71.192.96:3128;PROXY 167.71.192.42:3128;PROXY 45.32.117.83:3128;PROXY 178.17.170.15:5836;PROXY 178.17.170.28:5836;PROXY 51.158.172.165:8811;PROXY 42.188.108.172:8080;PROXY 178.238.227.104:5836;PROXY 202.67.8.214:8080;PROXY 139.180.220.81:8080;PROXY 144.217.101.242:3129;";
}
