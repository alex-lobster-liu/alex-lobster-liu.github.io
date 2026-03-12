#!/bin/bash
# 下载艺术图片的脚本
# 请在网络环境良好时手动运行此脚本

BASE_URL="https://upload.wikimedia.org/wikipedia/commons"

# 下载倪瓒《容膝斋图》
curl -L -o "ni_zan_rongxi.jpg" \
  "$BASE_URL/thumb/4/4e/Ni_Zan_-_The_Rongxi_Studio.jpg/800px-Ni_Zan_-_The_Rongxi_Studio.jpg"

echo "下载完成！"
