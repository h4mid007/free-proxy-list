
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
        return "PROXY 161.35.68.137:3128;PROXY 64.227.120.4:3128;PROXY 95.179.130.83:8080;PROXY 51.159.52.163:5836;PROXY 35.233.5.198:3128;PROXY 34.65.135.59:3128;PROXY 95.179.221.19:8080;PROXY 51.159.29.113:5836;PROXY 35.228.51.23:3128;PROXY 149.28.237.191:8080;PROXY 45.63.6.172:8080;PROXY 167.99.54.39:8888;PROXY 79.110.164.22:8080;PROXY 163.172.136.226:8811;PROXY 164.132.98.80:3128;PROXY 45.77.151.65:8080;PROXY 91.214.179.25:8080;PROXY 185.8.2.242:8080;PROXY 149.248.51.132:80;PROXY 95.218.73.248:8080;PROXY 31.14.131.70:8080;PROXY 139.180.129.98:8080;PROXY 149.28.154.226:8080;PROXY 51.158.68.68:8811;PROXY 139.180.184.133:8080;PROXY 149.28.129.224:8080;PROXY 178.128.19.87:3128;PROXY 45.32.123.109:80;PROXY 167.71.198.204:8080;PROXY 139.180.130.27:8080;PROXY 128.199.84.86:3128;PROXY 45.77.32.32:8080;PROXY 128.199.71.230:8080;PROXY 139.180.153.119:8080;PROXY 206.189.156.2:3128;PROXY 70.37.164.245:8080;PROXY 139.180.146.251:8080;PROXY 207.148.22.139:8080;PROXY 117.121.213.107:9999;PROXY 134.236.150.90:8080;PROXY 171.96.78.201:8080;";
}
