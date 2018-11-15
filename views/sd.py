import sys
for i in range(3):
    for j in range(2):
        print(i,j)

# 注
# print(__name__)#__开头与__结尾的，是python内置的方法
# 在当前文件获取文件的属性，当前文件不能导入当前文件的文件名
# this_module = sys.modules[__name__]

# this_module = importlib.import_module('sd')
# print(importlib)
# this_module = __import__('t')
# if 1:




# print(hasattr(this_module,'s1'))
# print(getattr(this_module,'s2'))
# print(this_module.s2)
# print(this_module.s1())

