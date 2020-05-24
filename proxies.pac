
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
        return "PROXY 82.119.170.106:8080;PROXY 51.15.113.92:5836;PROXY 109.197.188.34:58080;PROXY 80.240.25.173:8080;PROXY 159.69.62.137:8080;PROXY 51.158.98.121:8811;PROXY 51.158.111.229:8811;PROXY 51.158.123.35:8811;PROXY 68.183.217.60:3128;PROXY 51.91.212.159:3128;PROXY 51.158.123.250:8811;PROXY 163.172.190.160:8811;PROXY 163.172.146.119:8811;PROXY 80.240.21.230:8080;PROXY 80.240.27.110:8080;PROXY 209.250.250.231:8080;PROXY 95.179.246.123:8080;PROXY 78.141.194.144:8080;PROXY 78.141.216.220:8080;PROXY 104.238.174.198:8080;PROXY 185.92.223.26:8080;PROXY 51.158.68.133:8811;PROXY 51.15.80.136:3128;PROXY 149.28.143.179:8080;PROXY 178.128.81.211:8080;PROXY 112.78.160.122:8080;PROXY 84.135.182.92:8080;PROXY 95.217.130.87:3128;PROXY 109.207.85.173:8080;PROXY 176.193.245.174:8080;PROXY 89.46.75.207:8080;PROXY 167.99.207.11:3128;PROXY 46.173.160.62:8080;PROXY 80.90.80.54:8080;PROXY 161.35.114.60:8080;PROXY 51.158.119.88:8811;PROXY 46.218.155.194:3128;PROXY 8.9.31.64:8080;PROXY 5.141.117.33:81;PROXY 144.217.83.160:8080;PROXY 101.109.103.131:8080;PROXY 3.91.5.167:8080;";
}
