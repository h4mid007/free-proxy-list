
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
        return "PROXY 178.128.243.206:8080;PROXY 45.77.61.114:8080;PROXY 95.179.167.122:8080;PROXY 45.76.85.249:8080;PROXY 136.243.47.220:3128;PROXY 104.244.77.254:8080;PROXY 95.179.187.168:8080;PROXY 51.91.212.159:3128;PROXY 116.203.254.70:3129;PROXY 3.8.226.158:8088;PROXY 95.179.189.61:8080;PROXY 95.179.140.49:8080;PROXY 167.86.66.178:3128;PROXY 185.80.129.162:3128;PROXY 217.61.124.51:80;PROXY 95.217.130.87:3128;PROXY 193.232.150.42:3128;PROXY 46.218.155.194:3128;PROXY 80.90.80.54:8080;PROXY 45.63.18.66:8080;PROXY 165.22.36.75:8888;PROXY 198.98.58.178:8080;PROXY 167.172.254.176:8080;PROXY 138.197.32.120:3128;PROXY 144.217.101.242:3129;PROXY 155.138.129.165:8080;PROXY 159.203.44.177:3128;PROXY 149.248.60.103:8080;PROXY 67.205.154.162:8080;PROXY 5.141.117.33:81;PROXY 185.117.9.210:8080;PROXY 198.255.114.82:3128;PROXY 128.199.220.218:3128;PROXY 192.41.13.71:3128;PROXY 178.128.113.84:3128;PROXY 14.140.131.82:3128;PROXY 178.128.109.22:8080;PROXY 128.199.121.141:3128;PROXY 139.180.147.149:8080;PROXY 45.76.152.180:8080;PROXY 209.97.164.67:3128;PROXY 178.128.28.150:8080;PROXY 206.189.153.58:8080;PROXY 165.22.254.139:8080;PROXY 51.254.237.77:3129;";
}
