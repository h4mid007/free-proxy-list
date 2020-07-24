
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
        return "PROXY 217.23.11.26:3128;PROXY 51.15.78.19:8080;PROXY 93.115.23.229:3128;PROXY 37.133.68.116:8888;PROXY 158.177.184.229:3128;PROXY 45.77.200.191:8080;PROXY 13.92.6.80:3128;PROXY 199.91.203.210:3128;PROXY 134.249.158.34:81;PROXY 185.245.85.123:3128;PROXY 137.220.52.72:8080;PROXY 185.116.236.215:3128;PROXY 185.116.236.209:3128;PROXY 185.117.9.210:8080;PROXY 128.199.113.192:3128;PROXY 128.199.170.159:443;PROXY 101.108.12.173:8080;PROXY 101.109.155.200:8080;PROXY 52.191.103.11:3128;PROXY 125.26.179.108:8080;PROXY 183.88.195.126:8080;PROXY 101.108.14.42:8080;PROXY 125.25.33.74:8080;PROXY 54.233.178.116:3128;PROXY 203.150.154.174:8080;PROXY 186.211.177.161:8082;PROXY 45.201.163.107:8080;PROXY 183.89.152.140:8080;PROXY 14.207.205.95:8080;PROXY 180.183.224.225:8080;PROXY 171.96.231.188:8080;PROXY 167.179.93.40:8080;PROXY 189.2.135.18:3128;PROXY 125.26.193.249:8080;PROXY 116.203.254.70:3129;PROXY 180.183.227.29:8080;PROXY 185.216.106.62:3128;PROXY 103.125.253.234:3128;PROXY 51.158.119.88:8761;";
}
