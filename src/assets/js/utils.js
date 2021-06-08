const OSS = require("ali-oss");
/**
 *
 * @param {图片base64位地址} url
 * @returns
 */
const loadImage = function (url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = reject;
  })
}
/**
 * 压缩图片、减少带宽
 * @param {*} file
 * @returns
 */
const compressImg = async function (file) {
  // 建立Canvas对象(画布)
  let canvas = document.createElement("canvas"),
    // 获取对应的CanvasRenderingContext2D对象(画笔)
    context = canvas.getContext("2d");
  let img = await loadImage(file.content);
  // 图片原始尺寸
  let originWidth = img.width,
    originHeight = img.height,
    // 最大尺寸限制
    maxWidth = 500, maxHeight = 500,
    // 目标尺寸
    targetWidth = originWidth, targetHeight = originHeight;
  // 图片尺寸超过500x500的限制
  if (originWidth > maxWidth || originHeight > maxHeight) {
    if (originWidth / originHeight > maxWidth / maxHeight) {
      // 更宽，按照宽度限定尺寸
      targetWidth = maxWidth;
      targetHeight = Math.round(maxWidth * (originHeight / originWidth));
    } else {
      targetHeight = maxHeight;
      targetWidth = Math.round(maxHeight * (originWidth / originHeight));
    }
  }
  // canvas对图片进行缩放
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  // 清除画布
  context.clearRect(0, 0, targetWidth, targetHeight);
  // 图片压缩
  context.drawImage(img, 0, 0, targetWidth, targetHeight);
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob)
    }, file.file.type || "image/png");
  }).catch((err) => {
    console.log(err);
  })
}
/**
* oss上传图片，参考:
* 1. https://help.aliyun.com/document_detail/64047.htm?spm=a2c4g.11186623.2.21.334514a0vHgYJO#concept-64047-zh
* 2.https://github.com/ali-sdk/ali-oss?spm=a2c4g.11186623.2.10.52ae62e7PV2pxM#multipartuploadname-file-options
 */
/**
* 上传单张图片
* @param {Object} file
* @param {存储类型，1存到公有bucket，2存到私有bucket，3 blueoms ，4 bluepms , 5 bluemart ,6 mart2} bucketType
* @param {*} options
* @returns Array
*/
const uploadOneFile = async function (file, bucketType, options) {
  const fileName = "****"; // 后台生成的文件名
  const client = new OSS({
    region: "oss-ap-southeast-1", // 申请OSS服务所在的地域
    endpoint: "", // 访问域名
    accessKeyId: "", // 标识用户
    accessKeySecret: "", // 用户用于加密签名字符串和OSS用来验证签名字符串的密钥
    bucket: "", // 存储空间
    stsToken: "", // 安全令牌
    secure: true,
  });
  let compressFile = await compressImg(file);
  return new Promise( /*eslint-disable*/ async (resolve, reject) => {
    try {
      let res = await client.multipartUpload(fileName, compressFile, options);
      resolve(res.res.requestUrls[0].split("?")[0]);
    } catch (err) {
      console.log(err);
    }
  });
}

export { uploadOneFile }