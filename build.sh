#!/usr/bin/env bash
ng build --prod --aot --build-optimizer
mv dist/assets/manifest.webapp dist/
# cp -r dist/* /opt/dhis/config/apps/wisnpoa/
cd dist/hris-data-entry/
#Compress the file
echo "Compressing the file..."
zip -r -D hrisdataentry.zip .
echo "Successful installed the app"

