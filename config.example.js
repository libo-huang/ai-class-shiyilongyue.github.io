// config.example.js — 模板文件，已提交 git。
// 使用方法：将此文件复制为 config.local.js，然后填入真实密码和数据。
// config.local.js 已被 .gitignore 忽略，不会上传到 GitHub。

window.LOCAL_CONFIG = {
  // 学生下载密码（在下载页面解锁课程资料）
  password: "your-downloads-password-here",

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

  // 教案上传状态，key 为 lessonId（"01"～"14"，与 data.js 对应）
  lessonPlans: {
    // "01": { fileUrl: "https://pan.baidu.com/example", note: "备注" },
    // "02": { fileUrl: "", note: "" }
  }
};
