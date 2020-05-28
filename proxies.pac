
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
        return "PROXY 95.179.200.223:32923;PROXY 37.59.61.18:8080;PROXY 217.163.28.105:80;PROXY 185.189.112.186:3128;PROXY 45.76.89.253:8080;PROXY 78.141.216.220:8080;PROXY 163.172.146.119:8811;PROXY 45.76.85.249:8080;PROXY 80.240.27.110:8080;PROXY 51.158.123.35:8811;PROXY 209.222.30.220:8080;PROXY 95.179.216.64:3128;PROXY 178.62.110.236:8080;PROXY 78.141.194.144:8080;PROXY 104.238.174.198:8080;PROXY 217.69.12.25:8080;PROXY 209.250.250.231:8080;PROXY 104.238.185.126:8080;PROXY 37.120.192.154:8080;PROXY 91.214.179.25:8080;PROXY 95.179.246.123:8080;PROXY 82.119.170.106:8080;PROXY 93.186.251.135:3128;PROXY 95.179.253.125:8080;PROXY 51.158.123.250:8811;PROXY 46.235.53.26:3128;PROXY 163.172.190.160:8811;PROXY 51.158.172.165:8811;PROXY 51.158.108.135:8811;PROXY 81.183.86.142:8080;PROXY 159.203.44.177:3128;PROXY 51.158.111.242:8811;PROXY 46.218.155.194:3128;PROXY 46.53.191.128:8080;PROXY 46.249.36.188:3128;PROXY 159.89.50.191:3128;PROXY 104.238.132.80:8080;PROXY 51.158.119.88:8811;PROXY 8.9.8.232:8080;PROXY 95.179.221.149:3128;PROXY 157.245.251.117:8080;PROXY 134.249.158.34:81;PROXY 51.158.186.242:8811;PROXY 198.98.54.241:8080;PROXY 8.9.4.26:8080;PROXY 198.98.58.178:8080;PROXY 14.140.131.82:3128;";
}
