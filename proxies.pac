
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
        return "PROXY 199.247.16.166:8080;PROXY 51.89.32.83:3128;PROXY 194.5.192.127:3128;PROXY 176.9.63.62:3128;PROXY 104.244.77.254:8080;PROXY 37.120.168.223:8888;PROXY 116.203.192.146:3128;PROXY 94.23.30.184:3128;PROXY 212.83.169.144:5836;PROXY 46.218.155.194:3128;PROXY 167.99.147.238:8888;PROXY 147.75.51.179:3128;PROXY 5.141.117.33:81;PROXY 198.98.54.241:8080;PROXY 157.230.155.18:10492;PROXY 103.28.37.131:3128;PROXY 191.235.98.23:3128;PROXY 14.207.116.170:8080;PROXY 51.38.81.57:8080;PROXY 64.71.145.122:3128;PROXY 206.176.121.181:8080;PROXY 159.203.44.177:3128;PROXY 118.99.98.187:8080;PROXY 191.232.167.128:8080;PROXY 140.238.17.59:80;PROXY 151.106.55.189:5836;PROXY 118.163.83.21:3128;PROXY 188.165.141.114:3129;PROXY 198.98.56.71:8080;PROXY 68.183.121.227:3128;PROXY 103.122.164.195:5836;PROXY 52.179.18.244:8080;PROXY 202.69.48.122:3128;PROXY 51.79.146.106:8080;PROXY 212.83.166.78:5836;PROXY 85.113.39.89:81;PROXY 180.183.6.196:8080;PROXY 36.81.222.253:8080;";
}
