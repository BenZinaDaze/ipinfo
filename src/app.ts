/*
 * @Description: 
 * @Author: benz1
 * @Date: 2022-03-04 10:59:43
 * @LastEditTime: 2022-03-04 14:12:55
 * @LastEditors: benz1
 * @Reference: 
 */

import express from "express"
import { qqwry } from "./ipinfo";

const app = express();
// 添加json解析
app.use(express.json());
// 创建 application/x-www-form-urlencoded 编码解析
app.use(express.urlencoded({ extended: false }));

export class App {
    constructor() {
        this.init();
        app.listen(3002, "127.0.0.1", () => {
            console.log("开始监听本机3002端口");
        })
    }

    init() {
        app.get("/ipinfo", (req, res) => {
            res.json(qqwry.searchIP(""+req.headers['x-real-ip']))
        });
    }
}
