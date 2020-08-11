
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
        return "PROXY 37.48.92.101:5836;PROXY 104.244.75.26:8080;PROXY 35.179.26.16:80;PROXY 46.166.139.113:5836;PROXY 46.218.155.194:3128;PROXY 13.53.45.173:80;PROXY 51.89.32.83:3128;PROXY 89.223.28.195:3128;PROXY 80.90.80.54:8080;PROXY 161.35.101.185:8888;PROXY 198.98.54.241:8080;PROXY 88.150.236.115:3128;PROXY 167.99.230.48:8888;PROXY 52.179.18.244:8080;PROXY 82.114.98.25:1256;PROXY 159.203.44.177:3128;PROXY 5.141.117.33:81;PROXY 128.199.189.183:8080;PROXY 52.220.114.14:3128;PROXY 14.140.131.82:3128;PROXY 176.113.82.88:3128;PROXY 54.214.52.181:80;PROXY 51.255.103.170:3129;PROXY 1.64.75.130:3128;PROXY 205.185.115.100:8080;PROXY 191.232.170.36:80;PROXY 191.232.176.188:80;PROXY 191.234.163.104:3128;PROXY 190.165.164.76:8080;PROXY 206.176.121.181:8080;PROXY 200.73.131.150:80;PROXY 172.104.115.51:3128;PROXY 193.178.146.5:5836;PROXY 183.88.13.28:8080;PROXY 152.231.27.18:8080;PROXY 42.113.52.21:8080;PROXY 183.88.3.32:8080;PROXY 95.179.178.172:8080;PROXY 103.14.17.72:8080;PROXY 95.179.128.75:8080;PROXY 167.250.65.246:8080;PROXY 34.64.151.70:3128;PROXY 1.255.48.197:8080;";
}
