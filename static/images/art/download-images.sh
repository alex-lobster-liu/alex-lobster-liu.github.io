#!/bin/bash
# 下载艺术图片的脚本
# 请在网络环境良好时手动运行此脚本

BASE_URL="https://upload.wikimedia.org/wikipedia/commons"

# 下载沈周《庐山高图》
curl -L -o "shen_zhou.jpg" \
  "$BASE_URL/thumb/9/9e/Shen_Zhou_-_Lu_Shan_Gao_Tu_-_Google_Art_Project.jpg/800px-Shen_Zhou_-_Lu_Shan_Gao_Tu_-_Google_Art_Project.jpg"

echo "下载完成！"
