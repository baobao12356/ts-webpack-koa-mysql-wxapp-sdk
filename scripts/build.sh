#!/bin/bash
echo "后端项目构建中..."
echo "清除旧目录"
rm -rf build
echo "开始编译"
tsc
echo "拷贝配置文件"
cp -R package.json package-lock.json build
echo "构建结束"