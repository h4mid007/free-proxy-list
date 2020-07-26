
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
        return "PROXY 199.247.20.246:8080;PROXY 95.179.229.51:8080;PROXY 94.23.253.212:8080;PROXY 46.218.155.194:3128;PROXY 136.243.47.220:3128;PROXY 139.59.129.114:3128;PROXY 83.166.243.111:3128;PROXY 83.166.243.152:3128;PROXY 46.173.163.250:8080;PROXY 91.237.200.90:53281;PROXY 95.179.182.151:8080;PROXY 104.207.135.63:8080;PROXY 45.77.223.152:8080;PROXY 52.179.18.244:8080;PROXY 5.141.117.33:81;PROXY 71.174.241.157:3128;PROXY 104.244.75.26:8080;PROXY 159.203.44.177:3128;PROXY 157.230.155.18:10492;PROXY 128.199.214.87:3128;PROXY 101.108.13.218:8080;PROXY 105.112.8.53:3128;PROXY 1.0.183.150:8080;PROXY 188.165.16.230:3129;PROXY 209.141.52.48:8080;PROXY 183.89.154.64:8080;PROXY 191.239.247.125:3128;PROXY 180.183.123.189:8080;PROXY 92.112.10.172:8080;PROXY 119.42.121.3:8080;PROXY 58.8.143.188:8080;PROXY 189.2.135.18:3128;PROXY 34.91.135.38:80;PROXY 14.207.3.244:8080;PROXY 180.183.155.223:8080;PROXY 186.225.243.163:8080;PROXY 146.88.36.208:8080;PROXY 79.137.44.85:3129;PROXY 13.125.126.174:3128;PROXY 51.79.173.190:3128;PROXY 200.255.122.170:8080;PROXY 139.180.133.103:8080;";
}
