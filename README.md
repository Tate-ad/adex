### adex  v0.0.1 初级Demo

#### 环境

-  Ubuntu 14.10 linux 64-bit
-  node.js  v0.12.3
-  node-webkit v0.12.2
-  npm 2.9.1

#### 安装

```bash
$ git clone git@github.com:Tate-ad/adex.git
$ cd adex
$ npm install
$ sudo npm install node-webkit-builder -g
```

#### 运行

*Note*: **先切换到adex目录, 首次运行需root 权限**

```bash
$ sudo nwbuild -r .
```
或者:
```bash
$ sudo make run
```

#### 运行效果

![pic](https://github.com/Tate-ad/adex/blob/master/res/pic/adex1.png?raw=true)

- 左边显示bid的结果, 右边为winner的物料播放(.mp4).

#### 目录结构
- css/ 存放项目的css file
- js/  webkit 的js 脚本
- res/ 
  - input/  
    - input.yaml   模拟广告屏输入
  - flash/         webkit 播放flash 所需的插件
  - pic/           运行结果截图
  - sample/        
  - strategy/
    - ipinyou.yaml ipinyou竞价规则
    - media_v.yaml media_v竞价规则
- src/
  - engine/
    - bid.js       bid 逻辑
  - lib/
    - cpp/         c++ 插件
    - filter.js    处理range 数组
    - utils.js     工具
  - ploys/
    - ploystore.js 项目启动时将 res/strategy/ 目录下的所有规则加载到内存中

#### bid 过程
- 输入
   -  广告屏获取的环境变量, 格式如下:

    ```yaml
    device:
      id: 62b77266-bbd9-4c76-9bb8-b73ee0561d08 
      os: ubuntu14.10
      property:
          floor: 1.5
          region: 昌平
    scene:
      gender: woman
      age: 23 
      weather: rain
      people_count: 100 
      time: 2015-07-04 10:38:40.456
    ```
  -  用户自定义规则, 格式如下:

    ```yaml
    uid: ipinyou
    desc: 品友针对年轻女性的广告投放
    orders:
      - oid: 087e91bd6df2
        mid: /home/tate/Public/ipinyou1.mp4
        regions: [海淀, 朝阳] 
        duration:
          start: 2015-07-01
          finish: 2015-07-07
        rules:
          - gender: woman
            price: +0.4
            required: true
          - age: [20, 30]
            price: +0.4
            required: true
          - people_count: [2, 999999999]
            price: +0.2
            required: false
          - weather: fine
            price: +0.3
            required: false

      - oid: 8b4a894b3700
        mid: /home/tate/Public/ipinyou2.mp4
        regions: [海淀, 昌平] 
        duration:
          start: 2015-07-01
          finish: 2015-07-07
        rules:
          - people_count: [2, 999999]
            price: +5.5
            required: true
    ```
- 输出
    - 物料信息
    - 最终价格

- bid 逻辑:

  1. 根据device 中的region 和 rules 中的regions判断该规则是否参与竞价;
  2. 若参与竞价, 判断rules中的各个字段是否在scene中; 若不在在scene中并且该字段为required, break ,     进入下一字段比较, 否则, 返回floor + 用户出价;
  3. 在各个规则中取最大值, 并将结果返回给webkit进行render;

#### **TODO**

1. 修正rules 格式为kev 在wiki上建议的格式;
2. 为rules 添加 逻辑运算符(and, or, not);
3. 确认电子屏输入的各个字段;
4. 输出bid的更多结果, ex: oid, uid ...



