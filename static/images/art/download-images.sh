#!/bin/bash
# 下载艺术图片的脚本
# 请在网络环境良好时手动运行此脚本

BASE_URL="https://upload.wikimedia.org/wikipedia/commons"

# 下载沈周《庐山高图》
curl -L -o "shen_zhou.jpg" \
  "$BASE_URL/thumb/9/9e/Shen_Zhou_-_Lu_Shan_Gao_Tu_-_Google_Art_Project.jpg/800px-Shen_Zhou_-_Lu_Shan_Gao_Tu_-_Google_Art_Project.jpg"

# 下载莫奈《鲁昂大教堂》
curl -L -o "monet_rouen.jpg" \
  "$BASE_URL/thumb/5/5e/Claude_Monet_-_Rouen_Cathedral_%28Sunset%29.jpg/800px-Claude_Monet_-_Rouen_Cathedral_%28Sunset%29.jpg"

# 下载齐白石《虾》
curl -L -o "qi_baishi.jpg" \
  "$BASE_URL/thumb/5/5e/Qi_Baishi_-_Shrimp_%281953%29.jpg/800px-Qi_Baishi_-_Shrimp_%281953%29.jpg"

echo "下载完成！"
