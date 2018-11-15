import json
f=open("new3",mode='r',encoding='utf8')
data=f.read()
# print(data)
res=json.loads(data)
print(type(res))
