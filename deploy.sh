#!/usr/bin/env sh
 
# 忽略错误
set -e  #有错误抛出错误
 
# 构建
npm run docs:build  #然后执行打包命令
 
# 进入待发布的目录
cd docs/.vitepress/dist  #进到dist目录

#执行这些git命令
git init 
git add -A
git commit -m 'deploy'

#提交到这个分支
git push -f git@github.com:panshun/notes.git main:gh-pages

cd -

#删除dist文件夹ssss
rm -rf docs/.vitepress/dist  

echo "部署成功"