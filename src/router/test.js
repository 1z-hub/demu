export default[
    {
        path: "/MakeTestPaper",
        component: () =>
          import("@/views/test/MakeTestPaper.vue"),
      },
      {
        path: "/TestPaperManage",
        component: () =>
          import("@/views/test/TestPaperManage.vue"),
      },
     {
        path: "/TestResult",
        component: () =>
          import("@/views/test/TestResult.vue"),
      },
      {
        path: "/TestSetter",
        component: () =>
          import("@/views/test/TestSetter.vue"),
      }
]