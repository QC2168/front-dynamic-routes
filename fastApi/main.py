from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

common_permission = ['home', 'news']
admin_permission = ['home', 'list', 'news']


def result(data={}, msg='success', status=200):
    return {
        'data': data,
        'msg': msg,
        'status': status
    }


@app.get("/")
async def read_root():
    return {"Hello": "World"}


class UserType(BaseModel):
    account: str
    password: str


@app.post("/login")
async def login(item: UserType):
    # find user
    if item.account == 'admin' and item.password == '123456':
        return result({"role": 'admin',
        'token':123456521124321}, '登录成功')
    if item.account == 'user' and item.password == '123456':
        return result({"role": 'common',
        'token':123456521124321}, '登录成功')
    else:
        return '账号密码错误'
