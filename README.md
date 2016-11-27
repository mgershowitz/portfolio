#Commands to Make Updates to eReverse AWS server

##After any changes please perform the followings commands
`git add .`
`git commit -m`
`npm run build`
###This is to sync to the development site
`rsync -avz --exclude '*.git' . ec2-user@ec2-54-161-43-113.compute-1.amazonaws.com:/home/ec2-user/ereverse`
###This is to sync to the production site
`rsync -avz --exclude '*.git' . ec2-user@ec2-52-1-64-116.compute-1.amazonaws.com:/home/ec2-user/ereverse`

###If permission is denied, enter the following commands and then repeat the above
`cd ~/.ssh`
###This is to sync to the development site
`chmod 400 ereverse.pem`
`ssh-add ereverse.pem`
###If this command allows you into the linux server, the key works correctly
`ssh -i "ereverse.pem" ec2-user@ec2-54-161-43-113.compute-1.amazonaws.com`
###This is to sync to the production site
`chmod 400 ereverseKey.pem`
`ssh-add ereverseKey.pem`
###If this command allows you into the linux server, the key works correctly
`ssh -i "ereverseKey.pem" ec2-user@ec2-52-1-64-116.compute-1.amazonaws.com`
