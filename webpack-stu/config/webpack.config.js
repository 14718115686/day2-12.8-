//单入口
// module.exports={
//      entry:"./src/index.js",  //入口
//      output:{  //出口
//         path:path.resolve(_dirname,"../dist/"),  //打包文件输出路径 获取当前绝对路径
//         // filename:"bundle.js"  //打包文件输出名称
//      }
// }

const path=require("path");  //加载path模块
module.exports={
      
    entry:{//多个入口

        index:"./src/index.js",
        product:"./src/product.js"
    }, //入口  上级一个点
    output:{  //打包出口
       path:path.resolve(__dirname,"../dist/"),  //打包文件输出路径 获取当前绝对路径
       // filename:"bundle.js"  //打包文件输出名称
       filename:"[name].[hash].js"
    }
}