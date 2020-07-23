
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
        return "PROXY 35.242.216.40:3128;PROXY 46.101.140.153:8888;PROXY 95.179.182.151:8080;PROXY 46.101.101.193:8888;PROXY 134.122.81.241:3128;PROXY 51.158.119.88:8761;PROXY 51.254.104.83:3190;PROXY 116.202.177.172:3128;PROXY 34.91.135.38:80;PROXY 51.89.32.83:3128;PROXY 80.240.27.254:8080;PROXY 116.203.238.33:3128;PROXY 94.130.111.7:3128;PROXY 195.201.223.19:3128;PROXY 95.179.208.100:8080;PROXY 51.158.119.88:8811;PROXY 104.244.75.26:8080;PROXY 136.243.47.220:3128;PROXY 116.202.185.117:3128;PROXY 167.99.94.53:3128;PROXY 35.242.227.47:3128;PROXY 95.179.234.231:8080;PROXY 176.9.155.197:3128;PROXY 104.244.77.254:8080;PROXY 51.77.42.125:3128;PROXY 3.250.31.55:3128;PROXY 51.38.155.118:3128;PROXY 51.77.35.132:3128;PROXY 51.77.35.134:3128;PROXY 116.202.185.116:3128;PROXY 95.216.163.42:3128;PROXY 51.38.155.119:3128;PROXY 80.90.80.54:8080;PROXY 51.77.35.133:3128;PROXY 51.38.155.116:3128;PROXY 51.38.155.117:3128;PROXY 91.235.136.211:3128;PROXY 62.244.26.52:5836;PROXY 52.191.103.11:3128;PROXY 158.177.184.229:3128;PROXY 134.249.158.34:81;PROXY 52.179.18.244:8080;PROXY 207.246.89.154:8080;PROXY 45.63.14.189:8080;PROXY 198.98.58.62:8080;PROXY 85.117.235.141:33885;PROXY 64.227.5.88:3128;PROXY 185.184.208.189:5836;PROXY 194.87.190.118:5836;PROXY 68.183.121.227:3128;";
}
