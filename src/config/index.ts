/** 
 * 线上环境
 * 为了方便测试，使用的是聚合数据免费接口
 * 网址：https://www.juhe.cn/
 */

export const ONLINE_HOST = 'http://api.juheapi.com'

/** 
 * 测试环境
 */
export const QA_HOST = 'http://xxx.cn'

/** 
 * 线上mock
 */
export const MOCK_HOST = 'http://xxx/mock'

/** 
 * 是否mock
 */
export const IS_MOCK = false

/**
 * 当前的host  ONLINE_HOST | QA_HOST | MOCK_HOST
 */
export const MAIN_HOST = ONLINE_HOST


/**
 * 全局的分享信息 不用每一个都去写
 */
export const SHARE_INFO = {
    'title': '分享标题',
    'path': '路径',
    'imageUrl': '图片'
}
  
  