#!/bin/bash
#
# Setup Project Development Environment
#
#######################################################

# Open Terminal to the Project Root and Start Server & Move to Left Side
source project-up.sh

# Open Browser to Access Web Server & Move to Right Side
google-chrome --new-window "http://localhost:3000" &>/dev/null
sleep 5
xdotool search key super+Right

# Open Code Editor in Project Root & Move to Left Side
code /home/user/Projects/rdt-dev-portfolio
sleep 5
xdotool key super+Left

