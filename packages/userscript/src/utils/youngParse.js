import { Message } from "element-ui";

// format 不规范的 json
export default string => {
  if (!string) return;
  if (typeof string !== "string") {
    console.error("请传入string");
    return {};
  }
  let scopedData = {};
  try {
    return JSON.parse(string);
  } catch {
    string = `scopedData.$JSON = ${string}`;
    try {
      eval(string);
    } catch (e) {
      console.error(string);
      Message.error({
        duration: 10000,
        message: `json 结构解析失败，错误原因： ${e}`
      });
      console.error(e);
      return {};
    }
    return scopedData.$JSON;
  }
};