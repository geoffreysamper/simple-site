# simple-site
Contains a simple site to be used for playing with k8s. 

The k8s folder contains a follow k8s object
- a deployment for simple site 
- a service for the simple site
- a ingress so that the website is accessible via the nginx ingress controller


To install setup the sample
```bash 
k apply ./k8s/deployment.yaml
```

First run this script will do a curl to the site with a short url. A 200 is expected
```bash
SITE="<SET LOADBALANCER URL>" # im my case it http://xxxx.eu-west-1.elb.amazonaws.com
bash test_small.sh 
```

To get the 431 error run this script it  does a curl to the site with a longurl url. A 200 is expected
```bash
SITE="<SET LOADBALANCER URL>" # im my case it http://xxxx.eu-west-1.elb.amazonaws.com
bash test_longurl.sh 
```
