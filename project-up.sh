#!/bin/bash

# Open Tilix
tilix &

# Wait a bit
sleep 3

# Split Tilix window horizontally to create a new pane at the bottom
xdotool key ctrl+alt+Down

# Wait for the split to complete
sleep 1

# Type the command in the new pane and execute it
xdotool type --delay 1 'npm run dev'
xdotool key Return

# Additional delay for the command to initiate
sleep 2

# Switch focus back to the original (top) pane
xdotool key ctrl+alt+Up

# Print a message
echo "Started Project..."