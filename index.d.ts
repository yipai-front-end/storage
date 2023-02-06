/**
 * 设置缓存
 */
export declare function setStorage(
  /**
   * 缓存值的key
   */
  key: string,
  /**
   * 缓存值的value
   */
  value: any
): void
/**
 * 获取缓存
 */
export declare function getStorage(
  /**
   * 缓存值的key
   */
  key: string
): any
/**
 * 删除缓存
 */
export declare function removeStorage(
  /**
   * 缓存值的key
   */
  key: string
): void
