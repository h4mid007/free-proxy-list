
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
        return "PROXY 165.227.157.84:3128;PROXY 18.134.0.219:80;PROXY 135.181.36.161:8888;PROXY 95.216.196.233:3128;PROXY 85.14.243.31:3128;PROXY 176.9.85.13:3128;PROXY 144.91.83.174:3128;PROXY 144.91.82.218:80;PROXY 95.217.186.24:3128;PROXY 161.97.65.52:3128;PROXY 51.75.74.162:8080;PROXY 80.90.80.54:8080;PROXY 51.15.158.217:3128;PROXY 46.101.120.155:8080;PROXY 89.187.177.182:3128;PROXY 51.75.147.33:3128;PROXY 165.22.36.75:8888;PROXY 51.161.116.223:3128;PROXY 167.99.156.77:8080;PROXY 198.12.253.103:3128;PROXY 216.250.236.11:3128;PROXY 23.101.191.47:8080;PROXY 129.237.33.27:8080;PROXY 104.149.139.206:3128;PROXY 178.128.118.8:8080;PROXY 92.244.99.229:3128;PROXY 51.89.94.21:3128;PROXY 128.199.169.61:8080;PROXY 137.117.214.111:3128;PROXY 170.39.103.37:3128;PROXY 80.23.125.226:3128;PROXY 64.137.175.85:3128;PROXY 139.0.6.46:8080;PROXY 23.237.74.98:3128;PROXY 1.20.229.177:8080;PROXY 171.6.75.160:8080;PROXY 183.89.147.135:8080;PROXY 13.251.221.173:8080;PROXY 186.211.177.161:8082;PROXY 210.195.250.125:8080;PROXY 43.250.248.254:3838;PROXY 36.230.232.95:3128;";
}
