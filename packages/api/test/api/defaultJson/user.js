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

import axios from "axios";

/**
 * @description User Profile
 **/
export const meByGet = () =>
  axios.request({
    url: `/v1/me`,
    method: "get",
    params: {},
    data: {}
  });

/** 
 * @description User Activity 
 * @param {{
    "offset": number
    "limit": number
}} params    
**/
export const historyByGet = (params) =>
  axios.request({
    url: `/v1/history`,
    method: "get",
    params: params,
    data: {}
  });