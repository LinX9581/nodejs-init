
#! /bin/bash
sudo apt update
sudo apt upgrade -y
sudo apt install ca-certificates apt-transport-https -y 
sudo apt upgrade -y
sudo apt install wget -y
wget -q https://packages.sury.org/php/apt.gpg -O- | sudo apt-key add -
echo deb https://packages.sury.org/php/ stretch main | sudo tee /etc/apt/sources.list.d/php.list
sh -c 'echo "deb https://packages.sury.org/php/ buster main" > /etc/apt/sources.list.d/php.list'
sudo apt update
sudo apt upgrade -y
sudo apt-get install ca-certificates apt-transport-https -y
#sudo apt-get install php7.2 php7.2-fpm php7.2-cli php7.2-common php7.2-opcache php7.2-mbstring php7.2-mysql php7.2-zip php7.2-xml php7.2-curl php7.2-gd php7.2-bz2 git nginx mariadb-server mariadb-client -y
sudo apt install php7.4 php7.4-fpm php7.4-cli php7.4-common php7.4-xmlrpc php7.4-opcache php7.4-mysql php7.4-gd php7.4-zip php7.4-xml php7.4-cli php7.4-dev php7.4-imap php7.4-soap php7.4-intl php7.4-curl php7.4-mbstring git nginx mariadb-server mariadb-client -y
sudo systemctl start php7.4-fpm nginx mariadb
sudo systemctl enable php7.4-fpm nginx mariadb
cd /tmp
wget http://wordpress.org/latest.tar.gz
sudo tar -xvzf latest.tar.gz -C /var/www/html
sudo chown www-data: /var/www/html/wordpress/ -R
cd /var/www/html/wordpress/
cp wp-config-sample.php wp-config.php
sudo apt update
sudo apt -y upgrade
sudo apt update
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt -y install nodejs