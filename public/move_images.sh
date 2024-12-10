#!/bin/bash

# Define the source folder where the images are located
SOURCE_FOLDER="."

# Define the destination folder
DEST_FOLDER="images/pool"

# Create the destination folder if it doesn't exist
mkdir -p "$DEST_FOLDER"

# List of files to move
FILES=(
"/2016/01/Little-Forest-117.jpg"
"/2016/01/Little-Forest-119.jpg"
"/2016/01/Little-Forest-136.jpg"
"/2016/01/Little-Forest-137.jpg"
"/2016/01/Little-Forest-138.jpg"
"/2016/01/Little-Forest-146.jpg"
"/2016/01/Little-Forest-157.jpg"
"/2024/05/WhatsApp-Image-2024-04-30-at-02.35.59-752x450_c.jpeg"
"/2024/05/WhatsApp-Image-2024-04-30-at-02.33.54-752x450_c.jpeg"
)

# Loop through the array and move each file
for FILE in "${FILES[@]}"; do
  # Construct the full path for the source file
  SOURCE_PATH="$SOURCE_FOLDER$FILE"

  # Check if the file exists
  if [ -f "$SOURCE_PATH" ]; then
    # Move the file to the destination folder
    mv "$SOURCE_PATH" "$DEST_FOLDER"
    echo "Moved: $SOURCE_PATH"
  else
    echo "File not found: $SOURCE_PATH"
  fi
done
