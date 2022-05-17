import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      basics: {
        position: "Web 前端工程师",
        name: "朱云祺",
        gender: "男",
        weChat: "HowdyZ1220",
        educ: "福州大学",
        picture:
          "http://www.lgstatic.com/i/image/M00/A1/9D/CgqKkVioBICAXXVyAABFXV8M2hw21.jpeg",
        email: "982796687@qq.com",
        phone: "15829220208",
        website: "https://github.com/HowdyZ1220",
      },
      summary: [
        "个人主攻 Web 前端和 NodeJS 开发，3年+前端开发经验，参与或独立开发过多个核心项目，项目类型涉及：电子商务、教育服务、企业管理、SPA 应用（PC/Moblie）等等",
        "喜欢关注 Web 前端相关新技术（React、Angular、Vue...），对于新技术有很强的学习兴趣",
        "喜欢折腾造轮子，有一些简单的开源项目，不定时会更新 Github 小项目 5k+ Star（https://github.com/skyvow）",
        "热爱前端这份工作，也热爱一切美好的事物，对于我来说，是一种责任、是一种快乐",
      ],
      project: [
        {
          organization: "上海中科院后台管理",
          website: "",
          startDate: "2017.01",
          endDate: "2017.04",
          summary: "React + React-router + Redux + Wepack + ES6 + PostCSS",
          highlights: [
            "2017年1月到2017年4月我们四人小组负责开发的一款 CMS 内容管理系统项目包括内容管理、模板管理、发布管理，为上海中科院提供可视化后台管理功能；",
            "作为团队中的核心程序员，我负责项目的调研，根据产品需求文档进行需求拆分，技术选型与搭建框架等开发；",
            "项目基于 React + React-router + Redux + Wepack + ES6 + PostCSS 前端框架配合 NodeJS 开发环境开发，采用 Webpack 作为自动化构建工具，实时编译代码，热更新；",
            "项目上线后，前端性能表现良好，测试结果也没有任何异常，客户也很满意。",
          ],
        },
        {
          organization: "上海高校后勤e站",
          website: "",
          startDate: "2016.10",
          endDate: "2016.12",
          summary: "AngularJS + Wepack + ES6 + PostCSS",
          highlights: [
            "2016年10月到2016年12月我们四人小组负责开发一款会议管理系统的项目，包括会议预订、信息发布、微信签到、扫码签到等功能；",
            "作为团队中的核心程序员，我负责项目的调研，根据产品需求文档进行需求拆分，技术选型与搭建框架等开发；",
            "项目基于 AngularJS + Wepack + ES6 + PostCSS 前端框架配合 NodeJS 开发环境开发，采用 Webpack 作为自动化构建工具，实时编译代码；",
            "项目上线后，已多次试点于中小型重要会议中，参会人员能随时轻松查看活动信息、下载资料，更为便捷。",
          ],
        },
      ],
      education: [
        {
          institution: "福州大学",
          area: "机械工程",
          studyType: "研究生",
          startDate: "2020-09",
          endDate: "2023-06",
        },
        {
          institution: "西安工业大学",
          area: "机械电子工程",
          studyType: "本科",
          startDate: "2016-09",
          endDate: "2020-06",
        },
      ],
      awards: [
        {
          title: "一等奖学金",
          date: "2020-9",
        },
        {
          title: "CET-4",
          date: "2021-6",
        },
      ],

      skills: [
        {
          name: "HTML/CSS",
          keywords: "能够语义化使用HTML标签，模块化使用CSS，了解TailWindCSS。",
        },
        {
          name: "JavaScript",
          keywords: ["NodeJS", "Python"],
        },
        {
          name: "VUE",
          keywords: ["NodeJS", "Python"],
        },
      ],
    };
  },
  mutations: {
    updataBasics(state: any, payload) {
      console.log("进入commit");
      console.log(payload);

      state.basics.name = payload.name;
      state.basics.position = payload.position;
      state.basics.gender = payload.gender;
      state.basics.weChat = payload.weChat;
      state.basics.educ = payload.educ;
      state.basics.email = payload.email;
      state.basics.website = payload.website;
    },
    updataSummary(state: any, payload) {
      console.log(payload);
      state.summary = [...payload];
      console.log(state.summary);
    },
  },
});
// const basic = { ...resume.basics };
