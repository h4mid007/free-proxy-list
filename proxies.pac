
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
        return "PROXY 213.32.21.9:8080;PROXY 104.244.75.26:8080;PROXY 80.240.20.183:30002;PROXY 46.249.36.188:3128;PROXY 51.158.68.68:8811;PROXY 104.244.77.254:8080;PROXY 50.3.73.116:8080;PROXY 145.239.92.85:3128;PROXY 95.179.221.19:8080;PROXY 54.37.131.45:3128;PROXY 217.61.125.111:8080;PROXY 5.252.179.8:3128;PROXY 163.172.136.226:8811;PROXY 45.63.23.246:8080;PROXY 85.113.39.89:81;PROXY 207.246.80.29:8080;PROXY 185.8.2.242:8080;PROXY 158.222.90.2:8080;PROXY 5.141.117.33:81;PROXY 94.96.157.115:8080;PROXY 167.71.236.3:1080;PROXY 159.255.163.73:57708;PROXY 104.215.192.224:8080;PROXY 45.77.32.32:8080;PROXY 45.77.171.50:8080;PROXY 165.22.57.152:8080;PROXY 128.199.71.230:8080;PROXY 139.180.210.87:80;PROXY 178.128.108.98:3128;PROXY 103.129.192.218:41451;PROXY 178.128.24.20:11;PROXY 178.128.96.50:3128;PROXY 178.128.111.37:3128;PROXY 178.128.53.246:8080;PROXY 178.128.24.20:8080;PROXY 94.237.65.251:3128;PROXY 94.237.65.154:3128;PROXY 167.99.75.87:8080;";
}
