
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
        return "PROXY 130.61.95.193:3128;PROXY 78.141.201.90:33723;PROXY 95.179.178.172:8080;PROXY 84.201.170.136:8081;PROXY 51.195.74.170:3128;PROXY 5.141.117.33:81;PROXY 173.249.30.74:8080;PROXY 45.141.130.11:3128;PROXY 51.83.248.155:3128;PROXY 168.63.251.65:8080;PROXY 137.116.129.170:8080;PROXY 199.26.60.29:80;PROXY 80.23.125.226:3128;PROXY 43.240.112.243:8080;PROXY 51.178.165.3:3128;PROXY 18.228.28.113:3128;PROXY 190.14.254.178:8080;PROXY 189.2.135.18:3128;PROXY 94.102.2.145:3128;PROXY 1.255.48.197:8080;PROXY 61.36.41.94:3128;PROXY 3.19.238.16:8080;PROXY 64.71.145.122:3128;PROXY 185.119.58.8:5836;PROXY 103.253.27.45:80;PROXY 206.198.131.172:80;PROXY 206.198.131.142:80;PROXY 122.10.14.120:3128;PROXY 180.243.208.3:8080;PROXY 103.28.121.58:3128;PROXY 144.91.88.109:5836;PROXY 202.67.8.214:8080;PROXY 165.227.36.43:3128;PROXY 196.43.180.10:3128;PROXY 34.87.241.30:8080;";
}
