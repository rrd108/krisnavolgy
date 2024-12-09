#!/bin/bash

# SSH should be set up to do not ask for password
# https://www.thegeekstuff.com/2008/11/3-steps-to-perform-ssh-login-without-password-using-ssh-keygen-ssh-copy-id/

RED='\e[1;41m'
GREEN='\e[1;42m'
NC='\033[0m' # No Color

SSH_USER=$1
SSH_HOST=$2
SSH_PATH='/var/www/jaccoter.1108.cc/'

if ! echo "$SSH_USER" | grep -q "srava"; then
	echo -e "${RED}The SSH_USER seems to be different then the required${NC}"
    exit 1
fi
PREV_STEP=1

echo -e $'\n' " \u2a2f TODO add backend tests " $'\n'
echo -e $'\n' " \u2a2f TODO add frontend tests " $'\n'

if [ $PREV_STEP -eq 1 ];then
	echo $'\n' "Bump frontend version number" $'\n'
	npm version patch --no-git-tag-version

	echo $'\n' "Running Build" $'\n'
	yarn build
	if [ $? -eq 0 ]; then
		echo -e $'\n' "${GREEN} \u2714 Build successfull ${NC}" $'\n'
	else
		echo -e $'\n' "${RED} \u2a2f Build failed ${NC}" $'\n'
		PREV_STEP=0
		npm version --no-git-tag-version $(node -p "require('./package.json').version")
		echo $'\n' "Frontend version number reverted" $'\n'
	fi

	if [ $PREV_STEP -eq 1 ];then
		echo $'\n' "Copy .output/public folder to server" $'\n'
		rsync --progress -azh \
			--delete --exclude='data' --exclude='robots.txt' --exclude='ecosystem.config.js' ./.output/ \
			-e "ssh -i /home/rrd/.ssh/sravanamGCI" \
			$SSH_USER@$SSH_HOST:$SSH_PATH

		if [ $? -eq 0 ]; then
			echo -e $'\n' "${GREEN} \u2714 .output folder uploaded ${NC}" $'\n'
		else
			echo -e $'\n' "${RED} \u2a2f .output folder upload failed ${NC}" $'\n'
			PREV_STEP=0
		fi
	fi
fi

if [ $PREV_STEP -eq 1 ];then
	echo -e $'\n' "${GREEN} \u2714 All is fine ${NC}" $'\n'
fi