#!/usr/bin/env bash

# NOTE: this is just a helper script for testing keymap-drawer locally and requires keymap-drawer to be installed.

keymap -c keymap_drawer/draw_config.yaml parse -c 12 -z config/corne.keymap > keymap_drawer/corne_keymap.yaml
keymap -c keymap_drawer/draw_config.yaml draw keymap_drawer/corne_keymap.yaml > keymap_drawer/corne_keymap_test.svg
