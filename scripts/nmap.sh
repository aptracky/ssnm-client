while read line: do
    printf("$line")
    nmap $line | grep -oN -i "host" 
done