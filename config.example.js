// config.example.js — 模板文件，已提交 git。
// 使用方法：将此文件复制为 config.local.js，然后填入真实密码和数据。
// config.local.js 已被 .gitignore 忽略，不会上传到 GitHub。

window.LOCAL_CONFIG = {
  // 学生下载区密码不再写在这里。
  // 如需修改，请在本地编辑 generate-download-enc.js 后运行：
  // node generate-download-enc.js

  // ICT 管理员密码（解锁管理员视图：会议纪要 + 教案状态）
  ictPassword: "your-ict-password-here",

  // 会议纪要列表，按时间从新到旧排列（最新在上）
  meetingMinutes: [
    // {
    //   date: "2026-03-20",
    //   title: "第X次例会",
    //   content: "讨论内容……"
    // }
  ],

  // 教案上传状态不再写在这里。
  // 如需修改，请在本地编辑 generate-ict-plans-enc.js 后运行：
  // node generate-ict-plans-enc.js
};
