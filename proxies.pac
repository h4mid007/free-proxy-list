
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
        return "PROXY 176.9.63.62:3128;PROXY 45.63.115.249:8080;PROXY 95.174.67.50:18080;PROXY 80.90.80.54:8080;PROXY 194.5.207.163:3128;PROXY 198.98.51.240:8080;PROXY 91.214.179.5:8080;PROXY 52.179.18.244:8080;PROXY 165.22.211.212:3128;PROXY 118.99.103.246:8080;PROXY 64.71.145.122:3128;PROXY 182.253.233.118:8080;PROXY 13.75.77.214:44355;PROXY 209.141.46.133:8080;PROXY 66.96.236.86:8080;PROXY 185.117.9.210:8080;PROXY 191.233.194.88:8080;PROXY 191.233.198.18:80;PROXY 191.233.194.88:3128;PROXY 199.195.248.24:8080;PROXY 202.182.104.60:8080;PROXY 202.182.104.222:8080;PROXY 139.162.109.91:3128;PROXY 130.61.95.193:3128;PROXY 118.163.83.21:3128;PROXY 36.78.86.190:8080;PROXY 51.89.32.83:3128;PROXY 52.251.120.221:3128;PROXY 51.75.147.43:3128;PROXY 12.105.130.3:3128;PROXY 1.10.235.31:8080;PROXY 95.179.209.63:8080;PROXY 202.147.206.98:8080;PROXY 157.245.69.232:8080;PROXY 200.52.77.36:80;PROXY 181.119.69.153:3128;PROXY 188.138.70.162:5836;PROXY 92.244.99.229:3128;PROXY 200.255.122.170:8080;PROXY 159.65.14.50:3128;";
}
