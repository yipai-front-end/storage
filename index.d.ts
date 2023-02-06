/**
 * 设置缓存
 */
export declare function setStorageSync(
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
export declare function getStorageSync(
  /**
   * 缓存值的key
   */
  key: string
): any
/**
 * 删除缓存
 */
export declare function removeStorageSync(
  /**
   * 缓存值的key
   */
  key: string
): void
