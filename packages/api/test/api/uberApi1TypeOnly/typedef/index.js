/* eslint-disable */
// @ts-nocheck

/**
 * generated by free-swagger
 * @see https://www.npmjs.com/package/free-swagger
 * @title Uber API
 * @description Move your app forward with the Uber API
 * @version 1.0.0
 * @date 2016-12-22 07:36
**/

/**
 * @typedef Product
 * @property {string} product_id - Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.
 * @property {string} description - Description of product.
 * @property {string} display_name - Display name of product.
 * @property {string} capacity - Capacity of product. For example, 4 people.
 * @property {string} image - Image URL representing the product.
**/

/**
 * @typedef PriceEstimate
 * @property {string} product_id - Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles
 * @property {string} currency_code - [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code.
 * @property {string} display_name - Display name of product.
 * @property {string} estimate - Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI.
 * @property {number} low_estimate - Lower bound of the estimated price.
 * @property {number} high_estimate - Upper bound of the estimated price.
 * @property {number} surge_multiplier - Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier.
**/

/**
 * @typedef Profile
 * @property {string} first_name - First name of the Uber user.
 * @property {string} last_name - Last name of the Uber user.
 * @property {string} email - Email address of the Uber user
 * @property {string} picture - Image URL of the Uber user.
 * @property {string} promo_code - Promo code of the Uber user.
 * @property {RoleType} role
**/

/**
 * @typedef Activity
 * @property {string} uuid - Unique identifier for the activity
**/

/**
 * @typedef Activities
 * @property {number} offset - Position in pagination.
 * @property {number} limit - Number of items to retrieve (100 max).
 * @property {number} count - Total number of items available.
 * @property {Activity[]} history
**/

/**
  * @typedef {("Admin" | "User" | "SetSms")} RoleType - Enumeration of Role Type
**/

/**
 * @typedef CreateOrUpdateUserInput
 * @property {number} userId - 用户ID(ID来自User表)
 * @property {("View" | "Operate" | "Auth" | "Search" | "Delete" | "UserManage" | "UserConfig" | "SetTime" | "SetNetwork" | "SetSms" | "SystemManage")[]} userRights - 用户权限
**/

/**
 * @typedef Abc
 * @property {string} id
 * @property {boolean} isLow
**/

/**
  * @typedef {(Abc[])} ArrayOfAbc 
**/

/**
 * @typedef NumberArrayEnumModel
 * @property {("0" | "1" | "2" | "4" | "8")[]} foo
 * @property {("0" | "1" | "2" | "3")[]} bar
**/

/**
 * @typedef Error
 * @property {number} code
 * @property {string} message
 * @property {string} fields
**/

/**
 * @typedef PagedResultDto
 * @property {number} totalCount
 * @property {T[]} items
**/

/**
 * @typedef AuditLogListDto
 * @property {number} userId
 * @property {number} id
**/

/**
 * @typedef JsonResult - 接口返回结果
 * @property {boolean} result - 结果
 * @property {"Success" | "Timeout" | "Fail" | "Expired" | "Error" | "InternalServerError" | "InvalidAnonymousAccess" | "UserSessionExpired" | "UserIsBinded"} code - 代码
 * @property {string} data - 数据
 * @property {string} message - 消息
**/