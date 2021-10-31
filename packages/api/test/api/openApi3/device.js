/* eslint-disable */
// @ts-nocheck

/**
 * generated by free-swagger
 * @see https://www.npmjs.com/package/free-swagger
 * @title home-iot-api
 * @description The API for the EatBacon IOT project
 * @version 1.0.0-oas3
 * @date 2016-12-22 07:36
 **/

import axios from "axios";

/** 
 * @description  
 * @param {{
    "skip": number
    "limit": number
}} params    
**/
export const getDevices = (params) =>
  axios.request({
    url: `/yeyan1996/IOT/1.0.0/devices`,
    method: "get",
    params: params,
    data: {}
  });

/**
 * @description
 * @param {DeviceRegistrationInfo} params
 **/
export const register = (params) =>
  axios.request({
    url: `/yeyan1996/IOT/1.0.0/devices`,
    method: "post",
    params: {},
    data: params
  });