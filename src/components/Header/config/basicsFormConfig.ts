export const basicsFormConfig = {
  title: "修改基本信息",
  labelWitdth: "8rem",
  draggable: true,
  formItem: [
    {
      field: "name",
      type: "input",
      lable: "姓名",
      placeholder: "请输入用户名",
    },
    {
      field: "position",
      type: "input",
      lable: "职位",
      placeholder: "请输入求职意向",
    },
    {
      field: "gender",
      type: "select",
      lable: "姓别",
      placeholder: "请选择您的性别",
      options: [],
    },
    {
      field: "educ",
      type: "input",
      lable: "毕业院校",
      placeholder: "请输入您的毕业院校",
    },
    {
      field: "email",
      type: "input",
      lable: "邮箱",
      placeholder: "请输入您的邮箱",
    },
    {
      field: "phone",
      type: "input",
      lable: "手机号",
      placeholder: "请输入您的手机号",
    },
    {
      field: "website",
      type: "input",
      lable: "GitHub",
      placeholder: "请输入您的Github链接",
    },
  ],
};
