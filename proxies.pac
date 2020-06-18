
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
        return "PROXY 95.179.163.43:8080;PROXY 209.250.248.154:8080;PROXY 161.35.29.11:3128;PROXY 34.91.135.38:80;PROXY 95.179.198.147:8080;PROXY 95.179.239.192:8080;PROXY 178.238.232.35:5836;PROXY 188.166.53.57:8080;PROXY 51.210.44.27:8080;PROXY 104.244.77.254:8080;PROXY 178.238.234.99:5836;PROXY 51.158.123.250:8811;PROXY 163.172.190.160:8811;PROXY 188.213.31.73:808;PROXY 51.158.98.121:8811;PROXY 51.158.123.35:8811;PROXY 80.90.80.54:8080;PROXY 104.156.227.8:8080;PROXY 140.82.2.106:8080;PROXY 45.32.1.75:8080;PROXY 108.61.23.231:8080;PROXY 85.113.39.89:81;PROXY 91.214.179.25:8080;PROXY 159.203.44.177:3128;PROXY 139.180.191.92:8080;PROXY 5.141.117.33:81;PROXY 167.71.201.161:8080;PROXY 167.71.195.139:8080;PROXY 178.128.28.29:8080;PROXY 149.248.59.26:8080;PROXY 68.183.86.202:3128;PROXY 145.239.121.218:3129;PROXY 134.209.148.117:3128;PROXY 13.66.19.201:80;PROXY 165.22.222.31:3128;PROXY 167.71.229.14:3128;PROXY 157.245.104.234:3128;PROXY 157.245.104.241:3128;PROXY 68.183.81.253:3128;PROXY 68.183.84.110:3128;PROXY 167.172.6.211:3128;PROXY 45.76.144.18:8080;PROXY 157.245.104.237:3128;PROXY 139.180.142.71:8080;PROXY 68.183.89.76:3128;PROXY 45.32.120.91:8080;PROXY 45.76.160.140:8080;PROXY 159.65.149.110:3128;";
}
