
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
        return "PROXY 46.218.155.194:3128;PROXY 51.195.45.230:8080;PROXY 80.90.80.54:8080;PROXY 134.249.158.34:81;PROXY 51.158.119.88:8811;PROXY 52.179.18.244:8080;PROXY 167.172.150.24:8080;PROXY 52.191.103.11:3128;PROXY 5.141.117.33:81;PROXY 50.201.158.110:8080;PROXY 104.244.77.254:8080;PROXY 159.203.44.177:3128;PROXY 51.158.119.88:8761;PROXY 139.180.184.112:8080;PROXY 178.128.127.145:3128;PROXY 157.230.155.18:10492;PROXY 128.199.214.87:3128;PROXY 180.183.6.250:8080;PROXY 202.67.8.214:8080;PROXY 183.89.43.164:8080;PROXY 89.223.28.195:3128;PROXY 45.182.24.227:8080;PROXY 191.239.247.125:3128;PROXY 110.78.23.194:3128;PROXY 189.2.135.18:3128;PROXY 177.87.154.106:8080;PROXY 136.243.47.220:3128;PROXY 46.233.236.91:8080;PROXY 34.91.135.38:80;PROXY 144.217.101.245:3129;PROXY 158.247.195.39:8080;PROXY 62.75.216.44:5836;PROXY 104.244.75.26:8080;PROXY 139.59.129.114:3128;PROXY 149.28.226.17:33444;PROXY 64.71.145.122:3128;PROXY 187.130.75.77:3128;PROXY 182.253.70.163:80;PROXY 206.205.114.235:8888;PROXY 198.98.59.87:8080;PROXY 171.97.171.155:8080;PROXY 167.250.65.246:8080;";
}
