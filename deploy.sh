#!/bin/bash

PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

#====================================================
#	Author: David Guo
#	Description: Galavatron Deployment Script
#	Version: 3.0
#	email: davidguo1998@hotmail.com
#====================================================

if [ ! -f /etc/lsb-release ];then
    if ! grep -Eqi "ubuntu" /etc/issue;then
        echo -e "[${red}Info${plain}] This script can only be run on Ubuntu!"
        exit 1
    fi
fi

red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
plain='\033[0m'

# Directories
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
CLIENT_DIR=${DIR}/client
SERVER_DIR=${DIR}/server

# Configuration File
CONFIG=${DIR}/prod.conf

# DB Scripts
DB_CREATE_SCRIPT=${DIR}/server/db_create.sql
DB_LOAD_SCRIPT=${DIR}/server/db_test.sql

# URLS
NODESOURCE_URL=https://deb.nodesource.com/setup_13.x
MYSQL_DEB_URL=https://dev.mysql.com/get/mysql-apt-config_0.8.15-1_all.deb

if [ -f ${CONFIG} ]; then
    source ${CONFIG}
else
    echo -e "[${red}Info${plain}] Configuration file not found!"
    exit 1
fi

pull_changes() {
    echo -e "[${green}Info${plain}] Pulling changes from git"
    git checkout master
    git pull
}

stop_frontend() {
    sudo systemctl status galclient.service > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo -e "[${green}Info${plain}] Stopping client service"
        sudo systemctl stop galclient.service
    else
        echo -e "[${green}Info${plain}] Client service already stopped"
    fi
}

stop_backend() {
    sudo systemctl status galserver.service > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo -e "[${green}Info${plain}] Stopping server service"
        sudo systemctl stop galserver.service
    else
        echo -e "[${green}Info${plain}] Server service already stopped"
    fi
    sudo systemctl status mysql.service > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo -e "[${green}Info${plain}] Stopping MySQL service"
        sudo systemctl stop mysql.service
    else
        echo -e "[${green}Info${plain}] MySQL service already stopped"
    fi
}

start_frontend() {
    echo -e "[${green}Info${plain}] Restarting client service"
    sudo systemctl start galclient.service
}

start_backend() {
    echo -e "[${green}Info${plain}] Restarting MySQL service"
    sudo systemctl start mysql.service
    echo -e "[${green}Info${plain}] Restarting server service"
    sudo systemctl start galserver.service
}

update_frontend_packages() {
    echo -e "[${yellow}Info${plain}] Frontend: check for new npm packages? [Y/N]?"
    read -r choice
    case $choice in
    [yY][eE][sS] | [yY])
        echo -e "[${green}Info${plain}] Frontend: checking for new npm packages"
        cd ${CLIENT_DIR} && npm install
        cd ${DIR}
        ;;
    *)
        echo -e "[${yellow}Info${plain}] Checking for new npm packages cancelled."
        ;;
    esac
}

update_backend_packages() {
    echo -e "[${yellow}Info${plain}] Backend: check for new npm packages? [Y/N]?"
    read -r choice
    case $choice in
    [yY][eE][sS] | [yY])
        echo -e "[${green}Info${plain}] Backend: checking for new npm packages"
        cd ${SERVER_DIR} && npm install
        cd ${DIR}
        ;;
    *)
        echo -e "[${yellow}Info${plain}] Checking for new npm packages cancelled."
        ;;
    esac
}

restore_db() {
    cat >_tmp.cnf << EOF
[client]
user = $DB_USERNAME
password = $DB_PASSWORD
EOF

    echo -e "[${green}Info${plain}] Dropping database"
    mysql --defaults-file=_tmp.cnf -e "drop database ${DB_NAME}"
    echo -e "[${green}Info${plain}] Creating database"
    mysql --defaults-file=_tmp.cnf -e "source ${DB_CREATE_SCRIPT}"
    echo -e "[${green}Info${plain}] Loading database"
    mysql --defaults-file=_tmp.cnf -e "use ${DB_NAME}; source ${DB_LOAD_SCRIPT};"
    rm _tmp.cnf
}

reset_database() {
    echo -e "[${yellow}Info${plain}] Reload database using scripts [Y/N]?"
    read -r choice
    case $choice in
    [yY][eE][sS] | [yY])
        echo -e "[${green}Info${plain}] Reloading database..."
        restore_db
        ;;
    *)
        echo -e "[${yellow}Info${plain}] Database unchanged."
        ;;
    esac
}

build() {
    echo -e "[${green}Info${plain}] Building client"
    cd ${DIR}/client && REACT_APP_SERVER_HOST=${REACT_APP_SERVER_HOST} \
                        REACT_APP_SERVER_PORT=${REACT_APP_SERVER_PORT} \
                        REACT_APP_GOOGLE_CLIENT_ID=${REACT_APP_GOOGLE_CLIENT_ID} \
                        npm run build
    cd ${DIR}
}

stop_helper() {
    stop_frontend
    stop_backend
}

start_helper() {
    start_frontend
    start_backend
}

update_helper() {
    echo -e "\t"
    echo -e "\t"
    echo -e "[${green}Info${plain}] Updating..."
    stop_helper
    pull_changes
    update_frontend_packages
    update_backend_packages
    build
    start_helper
    reset_database
}

updatefrontend_helper() {
    echo -e "\t"
    echo -e "\t"
    echo -e "[${green}Info${plain}] Updating frontend..."
    stop_frontend
    pull_changes
    update_frontend_packages
    build
    start_frontend
}

updatebackend_helper() {
    echo -e "\t"
    echo -e "\t"
    echo -e "[${green}Info${plain}] Updating backend..."
    stop_backend
    pull_changes
    update_backend_packages
    start_backend
    reset_database
}

database_helper() {
    echo -e "\t"
    echo -e "\t"
    echo -e "[${green}Info${plain}] Restoring database..."
    reset_database
}

install_node() {
    if [ -f /usr/bin/node ];then
        echo -e "[${yellow}Info${plain}] Node already installed."
    else
        curl -sL ${NODESOURCE_URL} | sudo -E bash -
        sudo apt-get install -y nodejs 
    fi
}

install_mysql() {
    if [ -f /usr/bin/mysql ];then
        echo -e "[${yellow}Info${plain}] MySQL already installed."
    else
        wget -O mysql-apt-config.deb -c ${MYSQL_DEB_URL}
        sudo dpkg -i mysql-apt-config.deb
        sudo apt-get update
        sudo apt-get install mysql-server
        rm -f mysql-apt-config.deb
    fi
}

install_serve() {
    if [ -f /usr/bin/serve ];then
        echo -e "[${yellow}Info${plain}] Serve already installed."
    else
        npm i -g serve
    fi
}

backend_service_conf() {
    cat >/lib/systemd/system/galserver.service << EOF
[Unit]
Description=Galvatron Server Service
#Requires=After=mysql.service # Requires the mysql service to run first

[Service]
ExecStart=/usr/bin/node ./bin/www
WorkingDirectory=$SERVER_DIR
Restart=always
# Output to syslog
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=galvatron_server
# Database env vars
EnvironmentFile=$CONFIG

[Install]
WantedBy=multi-user.target
EOF
    systemctl disable galserver.service
    systemctl enable /lib/systemd/system/galserver.service
}

frontend_service_conf() {
    cat >/lib/systemd/system/galclient.service << EOF
[Unit]
Description=Galvatron Client Service

[Service]
ExecStart=/usr/bin/serve -s $CLIENT_DIR/build -l 3000
WorkingDirectory=$CLIENT_DIR
Restart=always
# Output to syslog
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=galvatron-client

[Install]
WantedBy=multi-user.target
EOF
    systemctl disable galclient.service
    systemctl enable /lib/systemd/system/galclient.service
}

install_helper() {
    [ `whoami` != "root" ] && echo -e "[${red}Info${plain}] The install script must be run as root." && exit 1
    echo -e "\t"
    echo -e "\t"
    echo -e "[${green}Info${plain}] Setting up production environment..."
    echo -e "[${yellow}Info${plain}] Install backend [Y/N]?"
    read -r choice
    case $choice in
    [yY][eE][sS] | [yY])
        echo -e "[${green}Info${plain}] Starting backend installation"
        install_node
        install_mysql
        backend_service_conf
        ;;
    *)
        echo -e "[${yellow}Info${plain}] Skipping backend installation"
        ;;
    esac
    
    echo -e "[${yellow}Info${plain}] Install frontend [Y/N]?"
    read -r choice
    case $choice in
    [yY][eE][sS] | [yY])
        echo -e "[${green}Info${plain}] Starting frontend installation"
        install_node
        install_serve
        frontend_service_conf
        ;;
    *)
        echo -e "[${yellow}Info${plain}] Skipping frontend installation"
        ;;
    esac
    echo -e "[${green}Info${plain}] Installation completed, please rerun the script using the update option to deploy."
}

log_helper() {
    journalctl --unit=galserver.service -n 500 --no-pager
}

# Initialization step
action=$1
case "${action}" in
    update|updatefrontend|updatebackend|stop|start|database|install|log)
        ${action}_helper
        ;;
    *)
        echo "Arguments error! [${action}]"
        echo "Usage: $(basename $0) [update|updatefrontend|updatebackend|stop|start|database|install|log]"
        ;;
esac
